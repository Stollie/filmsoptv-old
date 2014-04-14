//import AccordionItem from "appkit/views/accordion-item";

export default Ember.CollectionView.extend({
    classNames: ['accordion', 'movie-list'], 
    hasGroupControl: true,
    startsCollapsed: false,
    itemViewClass: 'accordion-item',
    emptyView: Ember.View.extend({
      template: Ember.Handlebars.compile('This class is not meant to be used directly, but extended.')
    })
});
