<?php
// Report all PHP errors
//error_reporting(-1);
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
include_once("class.filmtotaal.php");
include_once("class.movie.php");
$filmTotaal = new FilmTotaal('avhedzfx5j464lfysar4e4yxoguhdaga');

if ($_GET['list'] == 'today') {
    echo $filmTotaal->getList('today');
}
else if ($_GET['list'] == 'tomorrow') {
    echo $filmTotaal->getList('tomorrow');
}
else {
    echo json_encode(array('error' => 'url fout'));
}
 