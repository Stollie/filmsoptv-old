      var lists = {
            "today": {
              "id": 1,
              "date": "28-03-2014",
              "movies": ["0091306","0092306","0093306"]
            },

            "movies": [{
                    "id": "0091306",
                    "title": "Jumpin' Jack Flash 2",
                    "year": 1986,
                    "imdbId": 0091306,
                    "cleanChannelName": "RTL4",
                    "channelName": "RTL4",
                    "startTime": "21:30",
                    "endTime": "22:45",
                    "imdbRating": 5.7,
                    "imdbVotes": 12684,
                    "ftRating": 6.3,
                    "ftVotes": 9,
                    "filmTip": true,
                    "ftLink": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                },
                {
                    "id": "0092306",
                    "title": "Jumpin' Jack Flash 3",
                    "year": 1986,
                    "imdbId": 0092306,
                    "cleanChannelName": "RTL4",
                    "channelName": "RTL4",
                    "startTime": "21:30",
                    "endTime": "22:45",
                    "imdbRating": 5.7,
                    "imdbVotes": 12684,
                    "ftRating": 6.3,
                    "ftVotes": 9,
                    "filmTip": false,
                    "ftLink": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                },
                {
                    "id": "0093306",
                    "title": "Jumpin' Jack Flash 4",
                    "year": 1986,
                    "imdbId": 0093306,
                    "cleanChannelName": "RTL4",
                    "channelName": "RTL4",
                    "startTime": "21:30",
                    "endTime": "22:45",
                    "imdbRating": 5.7,
                    "imdbVotes": 12684,
                    "ftRating": 6.3,
                    "ftVotes": 9,
                    "filmTip": false,
                    "ftLink": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                }
            ]};

var TodayController = Ember.ArrayController.create();

TodayController.set('content', lists);


export default TodayController;
