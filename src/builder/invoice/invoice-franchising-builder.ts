import { Invoice, InvoiceConstructorParams } from './invoice';
import { InvoiceBuilder } from './invoicebuilder-interface';

export default class InvoiceWSPBuilder implements InvoiceBuilder {
  private invoice: Invoice;

  constructor({ amount, salesPerson }: InvoiceConstructorParams) {
    this.reset({ amount, salesPerson });
  }

  public reset({ amount, salesPerson }: InvoiceConstructorParams): void {
    this.invoice = new Invoice();
    this.invoice.setSeller('franchising');
    this.invoice.setAmount(amount);
    this.invoice.setCommissionedPerson(salesPerson);
  }

  public getInvoice(): Invoice {
    return this.invoice;
  }

  public buildCommission(): void {
    const invoiceAmount = this.invoice.getAmount();
    const commissionAmount = Number((invoiceAmount * 0.15).toFixed(2));
    this.invoice.setCommissionAmount(commissionAmount);
  }
}
