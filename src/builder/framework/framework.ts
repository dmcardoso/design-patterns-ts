export abstract class Framework {
  protected name: string;

  protected db: string;

  protected dbUser: string;

  protected dbPassword: string;

  protected dbHost: string;

  protected webpack: boolean;

  protected tests: boolean;

  protected full: boolean;

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setDb(db: string): this {
    this.db = db;
    return this;
  }

  public setDbUser(dbUser: string): this {
    this.dbUser = dbUser;
    return this;
  }

  public setDbPassword(dbPassword: string): this {
    this.dbPassword = dbPassword;
    return this;
  }

  public setDbHost(dbHost: string): this {
    this.dbHost = dbHost;
    return this;
  }

  public setWebpack(webpack: boolean): this {
    this.webpack = webpack;
    return this;
  }

  public setTests(tests: boolean): this {
    this.tests = tests;
    return this;
  }

  public setFull(full: boolean): this {
    this.full = full;
    return this;
  }

  public run(): void {
    console.log('Framework running');
  }
}
