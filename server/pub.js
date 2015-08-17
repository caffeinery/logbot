function getLogs(order, limit) {
  return Logs.find({}, {
  	sort: {createdAt: -1},
  	limit: limit
  });
}

Meteor.publish("logs", getLogs);
Meteor.publish("logsCount", function () {
	Counts.publish(this, 'logs', Logs.find());
});