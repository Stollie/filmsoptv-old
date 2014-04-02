var formatDate = Ember.Handlebars.makeBoundHelper(function(date, format) {
  return window.moment.unix(date).format(format);
});

export default formatDate;
