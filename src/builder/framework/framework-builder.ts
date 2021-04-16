import { Framework } from './framework';
import FrameworkSetters from './framework-setters';
import { FrameworkBuilder } from './frameworkbuilder-interface';

export default class FrameworkFullBuilder implements FrameworkBuilder {
  private framework: Framework;

  public constructor() {
    this.framework = new FrameworkSetters();

    this.buildName();
    this.buildDb();
    this.buildTests();
    this.buildWebpack();
    this.buildFull();
  }

  public buildName(): void {
    this.framework.setName('name');
  }

  public buildDb(): void {
    this.framework
      .setDb('db')
      .setDbHost('dbHost')
      .setDbPassword('dbPassword')
      .setDbUser('dbUser');
  }

  public buildTests(): void {
    this.framework.setTests(true);
  }

  public buildFull(): void {
    this.framework.setFull(true);
  }

  public buildWebpack(): void {
    this.framework.setWebpack(true);
  }

  public getFramework(): Framework {
    return this.framework;
  }
}
