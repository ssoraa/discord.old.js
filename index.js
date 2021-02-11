"use strict";
/**
 * @file Base file of artefact
 * @author Sora
 * @license GPL-3.0
 * @Copyright 2016-2020 | Sora™
 */

const {Permissions} = require('discord.js');
const Artf = require('./src/utils/ArtefactClient');
const Constants = require("./src/utils/Constants");
const artefactClientUtils = require("./src/utils/artefactClientUtils");
const Configurations = require("./src/Structures/configurations");
const Credentials = require("./src/Structures/credentials");
const artefactClientMonitors = require("./src/utils/artefactClientMonitors");
const LogHandler = require("./src/Structures/logHandler");
const MethodsHandler = require("./src/Structures/methodHandler");
const Modules = require("./src/Structures/Modules");
const StringHandler = require('./src/Structures/StringHandler');
const Package = require('./src/Structures/package');

module.exports.Constants = Constants;
module.exports.Monitors = artefactClientMonitors;
module.exports.Util = artefactClientUtils;
module.exports.Permissions = Permissions;
module.exports.Configurations = Configurations;
module.exports.Credentials = Credentials;
module.exports.LogHandler = LogHandler;
module.exports.MethodsHandler = MethodsHandler;
module.exports.Modules = Modules;
module.exports.StringHandler = StringHandler;
module.exports.Package = Package;
module.exports.ArtefactClient = Artf;






