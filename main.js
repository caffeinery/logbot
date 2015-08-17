Logs = new Mongo.Collection("logs");

VERSION = "0.3.5";

LIMIT = (Meteor.settings && Meteor.settings.public) ? Meteor.settings.public.limit : 0;
LIMIT = (LIMIT > 0) ? LIMIT : 25;
Logs.initEasySearch(['network', 'channel', 'nick'], {
  'limit' : LIMIT,
  'use' : 'mongo-db',
  'props': {
    'order': false
  },
  'sort': function () {
    return { createdAt: -1 };
  }
});