var Movie = DS.Model.extend({
    titel: DS.attr('string'),
    jaar: DS.attr('number'),
    imdb_id: DS.attr('string'),
    imdbLink: function() {
       return 'http://www.imdb.com/title/tt' + this.get('imdb_id');
     }.property('imdb_id'),
     
    zenderLogo: function() {
       return 'assets/images/zenders/' + this.get('zender') + '.png';
     }.property('zender'),
    zender: DS.attr('string'),

    starttijd: DS.attr('string'),
    eindtijd: DS.attr('string'),

    imdb_rating: DS.attr('number'),
    imdb_votes: DS.attr('number'),

    ft_rating: DS.attr('number'),
    ft_votes: DS.attr('number'),
    filmtip: DS.attr('number'),
    ft_link: DS.attr('string'),

    synopsis: DS.attr('string')
});

export default Movie;
