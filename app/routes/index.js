var indexRoute = Ember.Route.extend({
  model: function() {
//    return this.store.find('list', 1);
    return Ember.RSVP.hash({
//        moviesToday: this.store.find('list', {'name': 'today'}),
        moviesToday: this.store.find('list', 1),
        moviesTomorrow: this.store.find('list', 2)
    });
  }
});

export default indexRoute;
