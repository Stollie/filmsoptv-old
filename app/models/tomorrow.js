var List = DS.Model.extend({
    date: DS.attr('string'),
    movies: DS.hasMany('movie')
});

export default List;
