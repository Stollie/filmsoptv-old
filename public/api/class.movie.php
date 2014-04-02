<?php
class Movie
{
	private $_xml;
	
	public function __construct($xml)
	{
		$this->_xml = $xml;
	}
	
	public function getTitle()
	{
		return $this->_xml->getElementsByTagName('titel')->item(0)->nodeValue;
	}
	
	public function getSynopsis()
	{
		return substr($this->_xml->getElementsByTagName('synopsis')->item(0)->nodeValue, 0, 350).'.. <a href="'.$this->_xml->getElementsByTagName('ft_link')->item(0)->nodeValue.'"> Lees meer</a>';
	}
	
	public function getYear()
	{
		return $this->_xml->getElementsByTagName('jaar')->item(0)->nodeValue;
	}
	
	public function getChannelName()
	{
		return $this->_xml->getElementsByTagName('zender')->item(0)->nodeValue;
	}
	
	public function getChannelImg()
	{
		return 'assets/images/zenders/'.$this->getChannelName().'.png';
	}
	
	public function getImbdId()
	{
		return $this->_xml->getElementsByTagName('imdb_id')->item(0)->nodeValue;
	}
		
	public function getImbdRating()
	{
		return $this->_xml->getElementsByTagName('imdb_rating')->item(0)->nodeValue;
	}
        
	
	public function getImbdVotes()
	{
		return $this->_xml->getElementsByTagName('imdb_votes')->item(0)->nodeValue;
	}
        
	public function getFTRating()
	{
		if ( $this->_xml->getElementsByTagName('ft_votes')->item(0)->nodeValue > 0 ) 
		{
			return $this->_xml->getElementsByTagName('ft_rating')->item(0)->nodeValue;
		}
		return '';
	}

	public function getFTVotes()
	{
		if ( $this->_xml->getElementsByTagName('ft_votes')->item(0)->nodeValue > 0 ) 
		{
			return $this->_xml->getElementsByTagName('ft_votes')->item(0)->nodeValue;
		}
		return '';
	}
	
	public function getStartTime()
	{
		return date('H:i', $this->_xml->getElementsByTagName('starttijd')->item(0)->nodeValue);
	}
	
	public function getEndTime()
	{
		return date('H:i', $this->_xml->getElementsByTagName('eindtijd')->item(0)->nodeValue);
	}
	public function getEndTimestamp()
	{
		return $this->_xml->getElementsByTagName('eindtijd')->item(0)->nodeValue;
	}    
}
?>