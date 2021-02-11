require('./artefactImport')
const path = require('path');

/**
* @author Sora
 * Base client monitors
 * @param event
 * @param args
 */
module.exports.exec = (event, ...args) => {
  let monitorPath = path.resolve('./monitors/', event);
  let monitor = require(monitorPath);
  monitor(...args);
};