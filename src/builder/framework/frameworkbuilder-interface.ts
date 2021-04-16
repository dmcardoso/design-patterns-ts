export abstract class FrameworkBuilder {
  public abstract buildName(): void;

  public abstract buildDb(): void;

  public abstract buildTests(): void;

  public abstract buildWebpack(): void;

  public abstract buildFull(): void;
}
