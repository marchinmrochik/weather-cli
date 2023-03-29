import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (error) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + error);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
      no parameters - output weather
      -s [CITY] for install city
      -h for output help
      -t [API_KEY] for save token
      `
  );
};

export { printError, printSuccess, printHelp } ;

