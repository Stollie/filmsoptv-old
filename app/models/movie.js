var Movie = DS.Model.extend({
    title: DS.attr('string'),
    year: DS.attr('number'),
    imdbId: DS.attr('number'),

    cleanChannelName: DS.attr('string'),
    channelName: DS.attr('string'),

    startTime: DS.attr('string'),
    endTime: DS.attr('string'),

    imdbRating: DS.attr('number'),
    imdbVotes: DS.attr('number'),

    ftRating: DS.attr('number'),
    ftVotes: DS.attr('number'),
    filmTip: DS.attr('boolean'),
    ftLink: DS.attr('string'),

    synopsis: DS.attr('string')
});

export default Movie;
