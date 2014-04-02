<?php
// Report all PHP errors
//error_reporting(-1);
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
	include_once("class.filmtotaal.php");
	include_once("class.movie.php");
	$filmTotaal = new FilmTotaal('avhedzfx5j464lfysar4e4yxoguhdaga');
        echo $filmTotaal->getToday();
	//echo $filmTotaal->getTomorrow();


//print XmlToJson::Parse("http://www.filmtotaal.nl/api/filmsoptv.xml?apikey=avhedzfx5j464lfysar4e4yxoguhdaga&dag=02-04-2014&sorteer=0");

?>	
 