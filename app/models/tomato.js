var Tomato = DS.Model.extend({
    ratings: DS.attr(),
    links: DS.attr(),
    audienceIcon: function() {
        var score = this.get('ratings.audience_score');
        if ( score >= 60 ) {
            return 'popcorn';
        }
        else if (
            score > 0 &&
            score < 60
        ) {
            return 'spilled';
        }
    }.property('ratings.audience_score'),
    criticsIcon: function() {
        var score = this.get('ratings.critics_score');
        if ( score >= 60 ) {
            return 'fresh';
        }
        else if (
            score > 0 &&
            score < 60
        ) {
            return 'rotten';
        }
    }.property('ratings.critics_score')
});

export default Tomato;
