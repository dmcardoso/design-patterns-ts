import { InvoiceBuilder } from './invoicebuilder-interface';

export default class InvoiceDirector {
  private invoiceBuilder: InvoiceBuilder;

  public setBuilder(builder: InvoiceBuilder): void {
    this.invoiceBuilder = builder;
  }

  public buildWSPInvoiceCommission(): void {
    this.invoiceBuilder.buildCommission();
  }

  public buildFranchisingInvoiceCommission(): void {
    this.invoiceBuilder.buildCommission();
  }

  public buildCommission(): void {
    this.invoiceBuilder.buildCommission();
  }
}
