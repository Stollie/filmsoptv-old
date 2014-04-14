export default Ember.View.extend({
    classNames: ['accordion-group'],
    parentId: null,
    parentRef: function() {
        var hasGroupControl = this.get('parentView.hasGroupControl');
        return (hasGroupControl) ? "#" + this.get('parentId') : "";
      }.property('parentId'),
    internalId: null,
    internalRef: function () {
        return '#' + this.get('internalId');
    }.property('internalId'),
    templateName: 'movie-item',
    titleView: Ember.View.extend({
      template: Ember.Handlebars.compile('This class is not meant to be used directly, but extended.')
    }),
    contentView: Ember.View.extend({
      template: Ember.Handlebars.compile('This class is not meant to be used directly, but extended.')
    }),
    didInsertElement: function() {
      this.set('internalId', this.get('elementId') + "inner");
      this.set('parentId', this.get('parentView.elementId'));
    }
});
  