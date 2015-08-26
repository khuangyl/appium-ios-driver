import { errors } from 'mobile-json-wire-protocol';
//import _ from 'lodash';
//import { util } from 'appium-support';

let commands = {}, helpers = {}, extensions = {};

commands.execute = async function (script, args) {
  if (this.isWebContext()) {
    /* TODO */throw new errors.NotYetImplementedError();
  } else {
    if(script.match(/^mobile\:/)) {
      script = script.replace(/^mobile\:/, '').trim();
      await this.executeMobile(script, args);
    } else {
      return await this.uiAutoClient.sendCommand(script);
    }
  }
};

commands.executeMobile = async function (mobileCommand /*, args*/) {
  // we only support mobile: scroll
  if (mobileCommand === 'scroll') {
    /* TODO */throw new errors.NotYetImplementedError();
  } else {
    // TODO: check that this still apply
    throw new errors.UnknownCommandError('Unknown command, all the mobile commands except scroll have been removed.');
  }
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;