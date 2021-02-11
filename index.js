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
const artefactClientMonitors = require("./src/utils/artefactClientMonitors");
const Modules = require("./src/Structures/Modules");
const StringHandler = require('./src/Structures/StringHandler');

module.exports.Constants = Constants;
module.exports.Monitors = artefactClientMonitors;
module.exports.Util = artefactClientUtils;
module.exports.Permissions = Permissions;
module.exports.Modules = Modules;
module.exports.StringHandler = StringHandler;
module.exports.ArtefactClient = Artf;






