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
                    "channelLogo": "assets/images/zenders/RTL4.png",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396471200",
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
                    "channelLogo": "assets/images/zenders/RTL4.png",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396471200",
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
                    "channelLogo": "assets/images/zenders/RTL4.png",
                    "zender": "RTL4",
                    "starttijd": "1396463400",
                    "eindtijd": "1396471200",
                    "imdb_rating": "5.7",
                    "imdb_votes": "12684",
                    "ft_rating": "6.3",
                    "ft_votes": "9",
                    "filmtip": "0",
                    "ft_link": "http://www.filmtotaal.nl/film.php?id=3285",
                    "synopsis": "Terry Doolittle is tijdens een dieptepunt van haar leven via de computer in contact komt met de Britse spion Jack. Hij is achter het IJzeren Gordijn verzeild geraakt en heeft moeite om weer naar de westerse wereld terug te keren. Hij vraagt haar om hulp bij zijn ontsnapping en zij begeeft zich in een web van intriges."
                }
            ]};

var indexRoute = Ember.Route.extend({
  model: function() {
//    return this.store.find('list', 1);
    return Ember.RSVP.hash({
//        moviesToday: this.store.find('list', {'name': 'today'}),
        moviesToday: this.store.find('list', 1),
        moviesTomorrow: lists
    });
  }
});

export default indexRoute;
