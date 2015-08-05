Logs = new Mongo.Collection("logs");

VERSION = "0.2.2";

LIMIT = (Meteor.settings && Meteor.settings.public) ? Meteor.settings.public.limit : 0;
LIMIT = (LIMIT > 0) ? LIMIT : 25;
Logs.initEasySearch(['network', 'channel', 'nick'], {
  'limit' : LIMIT,
  'use' : 'mongo-db',
  'props': {
    'order': false
  },
  'sort': function () {
    return { createdAt: this.props.order ? 1 : -1 };
  }
});