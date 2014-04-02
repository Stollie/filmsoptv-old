module.exports = function(server) {
  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    // Return fixture data for '/api/lists/:id'
    server.get('/lists/:imdb_id', function(req, res) {
      var lists = {
            "list": {
              "id": 1,
              "name": "today",
              "date": "28-03-2014",
              "movies": ["0091306","0092306","0093306"]
            },
            "movies": [{
                    "titel": "Jumpin' Jack Flash 2",
                    "jaar": "1986",
                    "imdb_id": "0091306",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396463400",
                    "imdb_rating": "5.7",
                    "imdb_votes": "12684",
                    "ft_rating": "6.3",
                    "ft_votes": "9",
                    "filmtip": "1",
                    "ft_link": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                },
                {
                    "titel": "Jumpin' Jack Flash 3",
                    "jaar": "1986",
                    "imdb_id": "0092306",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396463400",
                    "imdb_rating": "5.7",
                    "imdb_votes": "12684",
                    "ft_rating": "6.3",
                    "ft_votes": "9",
                    "filmtip": "0",
                    "ft_link": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                },
                {
                    "titel": "Jumpin' Jack Flash 4",
                    "jaar": "1986",
                    "imdb_id": "0093306",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396463400",
                    "imdb_rating": "5.7",
                    "imdb_votes": "12684",
                    "ft_rating": "6.3",
                    "ft_votes": "9",
                    "filmtip": "0",
                    "ft_link": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                }
            ]};

      res.send(lists);
    });

    // Return fixture data for '/api/movies/:id'
//    server.get('/movies/:id', function(req, res) {
//      var movie = {
//        "movie": {
//          "id": "0091306",
//          "title": "Jumpin' Jack Flash",
//          "year": 1986,
//          "imdbId": 0091306,
//          "cleanChannelName": "RTL4",
//          "channelName": "RTL4",
//
//          "startTime": 1396007400,
//          "endTime": 1396015200,
//
//          "imdbRating": 5.7,
//          "imdbVotes": 12684,
//
//          "ftRating": 6.3,
//          "ftVotes": 9,
//          "filmTip": true,
//          "ftLink": "http://www.filmtotaal.nl/film.php?id=3285",
//
//          "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
//        }
//      };
//      res.send(movie);
//    });
  });
};
