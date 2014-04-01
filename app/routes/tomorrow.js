export default Ember.Route.extend({
//  renderTemplate: function() {
//    this.render('today', {   // the template to render
//      into: 'application',                // the template to render into
//      outlet: 'today',              // the name of the outlet in that template
//      controller: 'today'        // the controller to use for the template
//    });
//    this.render('tomorrow', {   // the template to render
//      into: 'application',                // the template to render into
//      outlet: 'tomorrow',              // the name of the outlet in that template
//      controller: 'tomorrow'        // the controller to use for the template
//    });
//  }//,
  model: function() {
//    return this.store.find('list', 1);
    return Ember.RSVP.hash({
        moviesToday: this.store.find('today'),
        moviesTomorrow: this.store.find('today')
    })
  }
});
