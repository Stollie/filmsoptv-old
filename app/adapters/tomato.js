var TomatoAdapter = DS.Adapter.extend({
    counter: 10,
    apikey:  "rh6r4h5dumfh8tkvnquqeu7c",
    baseUrl: "http://api.rottentomatoes.com/api/public/v1.0",
    find: function(store, type, id) {
        this.counter++;
        var url = this.baseUrl + "/movie_alias.json?apikey=" + this.apikey + "&type=imdb&id="+id;
        var counter = this.counter;
        return new Ember.RSVP.Promise(function(resolve, reject) {
            // Set a delay to slowdown api calls to rottentomatoes
            Ember.run.later(function() {
//                ic.ajax(url);
                jQuery.ajax({
                    url: url,
                    dataType: "jsonp"
                }).then(function(data) {
                    if (data.error) {
                        Ember.run(null, reject);
                    }
                    else {
                        Ember.run(null, resolve, data);
                    }
                }, function(jqXHR) {
                    jqXHR.then = null; // tame jQuery's ill mannered promises
                    Ember.run(null, reject, jqXHR);
                });
            }, counter * 200);
        });
    }
});

export default TomatoAdapter;
