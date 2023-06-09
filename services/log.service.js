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

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')}
      Weather in city: ${res.name}
      ${icon} ${res.weather[0].description}
      Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
      Humidity: ${res.main.humidity}
      Wind speed: ${res.wind.speed}
      `
  );
};

export { printError, printSuccess, printHelp, printWeather } ;

