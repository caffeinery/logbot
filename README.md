# logbot

_simple real-time irc logbot crafted with [coffea](https://github.com/caffeinery/coffea/)_

![logbot screenshot](https://i.imgur.com/snlTV3s.png)

## Setup

 * [Install meteor](https://www.meteor.com/install) (run `curl https://install.meteor.com/ | sh` on OS X and Linux)
 * [Download logbot via zip from github](https://github.com/caffeinery/logbot/archive/master.zip) (or run `git clone https://github.com/caffeinery/logbot`)
 * Change into the directory (run `cd logbot`)
 * Create a `settings.json` file (see Configuration section below)
 * Run logbot via `meteor --settings settings.json`
 * Access http://localhost:3000 to see the logs in real-time

## Configuration

The contents of the `settings.json` file are passed directly to coffea. Make sure to specify a network name or it'll have an automatically generated id like `0`. A random nickname will be generated unless specified.

```javascript
{
  "name": "test",
  "host": "192.168.99.100",
  "port": 32782,
  "channels": ["#foo", "#bar", "#baz"]
}
```

Multiple networks can be specified too:

```javascript
[
  {
    "name": "test",
    "host": "192.168.99.100",
    "port": 32782,
    "channels": ["#foo", "#bar", "#baz"]
  },
  {
    "name": "freenode",
    "host": "chat.freenode.net",
    "port": "6667",
    "channels": ["#caffeinery"]
  }
]
```
