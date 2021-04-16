export type Seller = 'wsp' | 'franchising';

export interface InvoiceConstructorParams {
  amount: number;
  salesPerson: string;
}

export class Invoice {
  protected amount: number;

  protected seller: Seller;

  protected commissionAmount: number;

  protected commissionedPerson: string;

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public setSeller(seller: Seller): void {
    this.seller = seller;
  }

  public setCommissionedPerson(commissionedPerson: string): void {
    this.commissionedPerson = commissionedPerson;
  }

  public setCommissionAmount(commissionAmount: number): void {
    this.commissionAmount = commissionAmount;
  }

  public printInvoice(): void {
    console.log({
      amount: this.amount,
      seller: this.seller,
      commissionAmount: this.commissionAmount,
      commissionedPerson: this.commissionedPerson,
    });
  }

  public getAmount(): number {
    return this.amount;
  }

  public getSeller(): Seller {
    return this.seller;
  }

  public getCommissionAmount(): number {
    return this.commissionAmount;
  }

  public getCommissionedPerson(): string {
    return this.commissionedPerson;
  }
}
