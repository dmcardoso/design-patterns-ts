import { Framework } from './framework';

export default class FrameworkSetters extends Framework {}

const myFrameworkSetters = new FrameworkSetters();
myFrameworkSetters
  .setName('name')
  .setDb('db')
  .setDbHost('dbHost')
  .setDbPassword('dbPassword')
  .setDbUser('dbUser')
  .setFull(true)
  .setTests(true)
  .setWebpack(true);
