if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Object.keys(Meteor.settings).length === 0) {
      throw new Error("Please specify network settings file via `--settings` flag");
    }

    var client = Meteor.npmRequire('coffea')(Meteor.settings);

    client.on('message', Meteor.bindEnvironment(function (err, event) {
        Logs.insert({
          network: event.network,
          channel: event.channel.name,
          nick: event.user.nick,
          message: event.message,
          createdAt: new Date() // current time
        });
    }));
  });
}