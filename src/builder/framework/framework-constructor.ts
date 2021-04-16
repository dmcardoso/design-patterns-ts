import { Framework } from './framework';

interface IFrameworkParams {
  name: string;
  db: string;
  dbUser: string;
  dbPassword: string;
  dbHost: string;
  webpack: boolean;
  tests: boolean;
  full: boolean;
}

class FrameworkCTT extends Framework {
  constructor({
    name,
    db,
    dbUser,
    dbPassword,
    dbHost,
    webpack,
    tests,
    full,
  }: IFrameworkParams) {
    super();
    this.name = name;
    this.db = db;
    this.dbUser = dbUser;
    this.dbPassword = dbPassword;
    this.dbHost = dbHost;
    this.webpack = webpack;
    this.tests = tests;
    this.full = full;
  }
}

const myFrameworkCTT = new FrameworkCTT({
  name: 'fm',
  db: 'db',
  dbHost: 'dbhost',
  dbPassword: 'dbPassword',
  dbUser: 'dbUser',
  full: true,
  tests: true,
  webpack: true,
});
