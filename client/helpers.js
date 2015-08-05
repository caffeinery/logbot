Template.body.helpers({
  logs: function () {
    return Logs.find({}, {sort: {createdAt: Session.get('order') ? 1 : -1}});
  }
});

LIMIT = (Meteor.settings && Meteor.settings.public) ? Meteor.settings.public.limit : 0;
LIMIT = (LIMIT > 0) ? LIMIT : 25;
var instance = EasySearch.getComponentInstance(
  { id: 'main', index: 'logs' }
);

Template.body.helpers({
  isSearching: function () {
    return instance ? instance.get('searching') : false;
  },

  order: function () {
    return Session.get('order');
  },

  moreResults: function () {
    return Counts.get('logs') > Session.get('logsLimit');
  },

  version: function () {
    var v = Meteor.settings.public.version.split('.');
    return (v.length >= 2) ? v[0] + '.' + v[1] : Meteor.settings.public.version;
  },

  fullVersion: function () {
    return Meteor.settings.public.version;
  }
});

Template.body.events({
  'click #orderButton': function () {
    Session.set('order', !Session.get('order'));
    EasySearch.changeProperty('logs', 'order', Session.get('order'));
    instance.triggerSearch();
  },
  'click #showMoreButton': function () {
    Session.set('logsLimit', Session.get('logsLimit') + LIMIT);
  }
});

Template.log.helpers({
  timestamp: function () {
    return this.createdAt.toLocaleDateString() + " " + this.createdAt.toLocaleTimeString();
  }
});

Session.setDefault('logsLimit', LIMIT);
Deps.autorun(function () {
  Meteor.subscribe('logs', Session.get('order'), Session.get('logsLimit'));
  Meteor.subscribe('logsCount');
});