<?php
 
/**
 * FilmTotaal PHP API class - API 'filmtotaal.nl'
 * API Documentation: http://www.filmtotaal.nl/api/
 *
 * @author Remco Raaijmakers
 * @since 21.05.2012
 * @date 21.05.2012
 * @copyright Remco Raaijmakers
 * @version 0.1
 * @license MIT
 *
 */

class FilmTotaal
{
	const FILMTOTAAL = 'FilmTotaal - H&eacute;t online Filmoverzicht';

	const VERSION = '0.1';

	/**
	 * The API-key
	 *
	 * @var string
	 */
	private $_apikey;
	private $_timecache;
	private $_dateToday; 
	private $_dateTomorrow; 
	
	/**
	 * Default constructor
	 *
	 * @param string $apikey					API-key from FilmTotaal
	 * @return void
	 */
	public function __construct($apikey)
	{
		$this->_timecache = 3600 * 2;
		$this->_dateToday = date("d-m-Y");
		$this->_dateTomorrow = date("d-m-Y", mktime(0,0,0,date("m"),date("d")+1,date("Y")));
		$this->setApikey($apikey);
	}

	/**
	 * Get XML data from tomorrow
	 *
	 * @return string
	 */
	public function getToday()
	{	
            $data = $this->_makeCall($this->_dateToday, 'today');
            $ids = array();
            foreach ($data['film'] as $row) {
                $row['id'] = $row['imdb_id'];
                $ids[] = $row['imdb_id'];
            }
            
            $result = array(
                'list' =>  array(
                    'id' => 1,
                    'name' => 'today',
                    'date' => $data['@attributes']['datum'],
                    'movies' => $ids
                ),
                'movies' => $data['film']
            );
            
            return json_encode($result);
	}

	/**
	 * Get XML data from tomorrow
	 *
	 * @return string
	 */
	public function getTomorrow()
	{
		return $this->_makeCall($this->_dateTomorrow, 'tomorrow');
	}
	
	private function readXML($xml)
	{
            $fileContents = str_replace(array("\n", "\r", "\t"), '', $xml);
            $fileContents = trim(str_replace('"', "'", $fileContents));
            $simpleXml = simplexml_load_string($fileContents);
            $json = json_encode($simpleXml);
            
		$result = '';
		$doc = new DOMDocument;
		// We don't want to bother with white spaces
		$doc->preserveWhiteSpace = false;	
		$doc->loadXML ($xml);
		
		$xpath = new DOMXPath($doc);
		
		$query = '//filmsoptv/film';
		$movies = $xpath->query($query);
		if (false == is_null($movies)) {
                    $films = array("list" => array( 
                                "name" => "today", 
                                "date" => $this->_dateToday,
                                "movies" => array()
                                ),
                             "movies" => array()
                            );
			foreach ($movies as $movie) {
				$m = new Movie($movie);
                                
                                //$films["movies"][] = [
                                //    
                                //]
                $title_class = $m->getEndTimestamp() <= time() ? 'ended' : '';
                            
                
                
				$result .= "\t".'<h3 class="'.$title_class.'">';
                $result .= '<a href="#" data-imdbtitle="'.$m->getImbdId().'">'.$m->getTitle().' <small>('.$m->getYear().')</small> <span class="starttime">'. $m->getStartTime() .'</span></a>'.$m->getChannelImg().'</h3>'."\n";
				$result .= "\t".'<div class="movie-details" data-imdb="'.$m->getImbdId().'">'."\n";
				$result .= "\t\t".'<span class="endtime">tot '. $m->getEndTime() .'</span>';
				$result .= '<p class="rt-rating"></p>';
				$result .= '<p>' . $m->getImbdRating() . '</p><p>' . $m->getFTRating() . '</p>'."\n";
				$result .= "\t\t".'<p class="movie-synopsis">'.$m->getSynopsis().'</p>'."\n";
				$result .= "\t".'</div>'."\n\n";
			}
		}
		else {
			$result = 'empty';
		}
		return $result;
	}
	
	/**
	 * Makes the call to the API
	 *
	 * @param string $date					The date in format 30-04-2012
	 * @return xml
	 */
	private function _makeCall($date, $when)
	{
		$url = 'http://www.filmtotaal.nl/api/filmsoptv.xml?apikey='.$this->getApikey().'&dag='.$date.'&sorteer=0';
		$results = '';
		
		$file = 'cache/'.$when.'.xml';
		if ( $handle = file_exists($file) && (time() - $this->_timecache < filemtime($file)) )
		{
			$handle = fopen($file, 'r');
			$results = fread($handle,filesize($file));
			
			fclose($handle);
		}
		elseif (extension_loaded('curl'))
		{
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_FAILONERROR, 1);

			$results = curl_exec($ch);
			$headers = curl_getinfo($ch);

			$error_number = curl_errno($ch);
			$error_message = curl_error($ch);
			// netjes sluiten
			curl_close($ch);
			if (false === $error_number )
			{
				if ( file_exists($file) ) 
				{
					unlink($file);
				}
				$handle = fopen($file, 'w');
				fwrite($handle, $results);
				fclose($handle);
			}
		}
		else
		{
                    $results = file_get_contents($url);
		}

		return $this->parse($results);
	}

	public function parse ($data) {

		$fileContents = $data;

		$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);

		$fileContents = trim(str_replace('"', "'", $fileContents));

		$simpleXml = simplexml_load_string($fileContents);

		$json = json_encode($simpleXml);
                $array = json_decode($json,TRUE);
                
		return $array;

	}
        
	/**
	 * Setter for the API-key
	 *
	 * @param string $apikey
	 * @return void
	 */
	public function setApikey($apikey)
	{
		$this->_apikey = $apikey;
	}

	/**
	 * Getter for the API-key
	 *
	 * @return string
	 */
	public function getApikey()
	{
		return $this->_apikey;
	}
	
	public function getDateToday()
	{
		return $this->_dateToday;
	}
	public function getDateTomorrow()
	{
		return $this->_dateTomorrow;
	}
}
?>