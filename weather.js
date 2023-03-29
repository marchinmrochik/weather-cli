#!/user/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if(!token.length) {
    printError('Token not found');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token save')
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(process.env)
  if(args.h) {
    printHelp();
  }

  if(args.s) {
    console.log('save city');
  }

  if(args.t) {
    return saveToken(args.t)
  }

  console.log('show weather');
  getWeather('Kiev') 
};

initCLI();