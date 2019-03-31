/* eslint-disable global-require */

const CARDS = require('./cards.json');

const IMAGES = {
  banker: require('../img/banker.jpg'),
  capitalist: require('../img/capitalist.jpg'),
  communist: require('../img/communist.jpg'),
  crime_boss: require('../img/crime_boss.jpg'),
  customs_officer: require('../img/customs_officer.jpg'),
  director: require('../img/director.jpg'),
  farmer: require('../img/farmer.jpg'),
  foreign_consular: require('../img/foreign_consular.jpg'),
  general: require('../img/general.jpg'),
  guerrilla: require('../img/guerrilla.jpg'),
  intellectual: require('../img/intellectual.jpg'),
  judge: require('../img/judge.jpg'),
  lawyer: require('../img/lawyer.jpg'),
  mercenary: require('../img/mercenary.jpg'),
  missionary: require('../img/missionary.jpg'),
  newscaster: require('../img/newscaster.jpg'),
  peacekeeper: require('../img/peacekeeper.jpg'),
  politician: require('../img/politician.jpg'),
  priest: require('../img/priest.jpg'),
  producer: require('../img/producer.jpg'),
  protestor: require('../img/protestor.jpg'),
  reporter: require('../img/reporter.jpg'),
  speculator: require('../img/speculator.jpg'),
  spy: require('../img/spy.jpg'),
  writer: require('../img/writer.jpg')
};

export function getCards() {
  return CARDS;
}

export function getImage(imageName) {
  return IMAGES[imageName];
}
