Logs = new Mongo.Collection("logs");

if (Meteor.isClient) {
  Template.body.helpers({
    logs: function () {
      return Logs.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.log.helpers({
    timestamp: function () {
      return this.createdAt.toTimeString();
    }
  });
}