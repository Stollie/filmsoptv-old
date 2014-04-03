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
class FilmTotaal {
    const FILMTOTAAL = 'FilmTotaal - H&eacute;t online Filmoverzicht';
    const VERSION = '0.1';

    /**
     * The API-key
     *
     * @var string
     */
    private $_apikey;
    private $_timecache;
    private $today; 
    private $tomorrow; 

    /**
     * Default constructor
     *
     * @param string $apikey					API-key from FilmTotaal
     * @return void
     */
    public function __construct($apikey) {
        $this->_timecache = 3600 * 2;
        $this->today = date("d-m-Y");
        $this->tomorrow = date("d-m-Y", mktime(0,0,0,date("m"),date("d")+1,date("Y")));
        $this->setApikey($apikey);
    }

    /**
     * Get XML data from tomorrow
     *
     * @return string
     */
    public function getList($name) {	
        $data = $this->_makeCall($this->$name, $name);
        $ids = array();
        foreach ($data['film'] as &$row) {
            $ids[] = $row['imdb_id'];
            $row['tomato'] = $row['imdb_id'];
        }

        $result = array(
            'list' =>  array(
                'id' => $name == 'today' ? 1 : 2,
                'name' => $name,
                'date' => $data['@attributes']['datum'],
                'movies' => $ids
            ),
            'movies' => $data['film']
        );

        return json_encode($result);
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
        if (
            file_exists($file) &&
            (time() - $this->_timecache < filemtime($file))
        ) {
            $handle = fopen($file, 'r');
            $results = fread($handle,filesize($file));

            fclose($handle);
        }
        elseif (extension_loaded('curl')) {
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
            if (false === $error_number ) {
                if ( file_exists($file) ) {
                    unlink($file);
                }
                $handle = fopen($file, 'w');
                fwrite($handle, $results);
                fclose($handle);
            }
        }
        else {
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
    public function setApikey($apikey) {
        $this->_apikey = $apikey;
    }

    /**
     * Getter for the API-key
     *
     * @return string
     */
    public function getApikey() {
        return $this->_apikey;
    }
}
