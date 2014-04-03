var ApplicationAdapter = DS.RESTAdapter.extend({
    host: Ember.ENV.host,
    namespace: Ember.ENV.namespace
});

export default ApplicationAdapter;
