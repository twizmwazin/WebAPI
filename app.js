var express = require('express');

var app = express();

var players = require("./routes/players");
var forums = require("./routes/forums");
var tournaments = require("./routes/tournaments");
var teams = require("./routes/teams");
var channels = require("./routes/channels");
var stats = require("./routes/stats");
var alerts = require("./routes/alerts");
var punishments = require("./routes/punishments");
var staff = require("./routes/staff");


app.use("/players", players);
app.use("/forums", forums);
app.use("/tournaments", tournaments);
app.use("/teams", teams);
app.use("/channels", channels);
app.use("/stats", stats);
app.use("/alerts", alerts);
app.use("/punishments", punishments);
app.use("/staff", staff);

String.prototype.escapeSpecialChars = function() {
    return this.replace(new RegExp("\\n", "g"), "", "");
};

// for some reason cheerio parses various lines with 
// spaces as new lines, rather than spaces
String.prototype.spaceSpecialChars = function() {
    return this.replace(new RegExp("\\n", "g"), " ", " ");
};


module.exports = app;