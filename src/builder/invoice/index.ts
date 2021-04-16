import InvoiceDirector from './invoice-director';
import InvoiceFranchisingBuilder from './invoice-franchising-builder';
import InvoiceWSPBuilder from './invoice-wsp-builder';

const invoiceDirector = new InvoiceDirector();

const wspInvoiceBuilder = new InvoiceWSPBuilder({
  amount: 50,
  salesPerson: 'Daniel',
});
invoiceDirector.setBuilder(wspInvoiceBuilder);
invoiceDirector.buildWSPInvoiceCommission();
// invoiceDirector.buildCommission();
wspInvoiceBuilder.getInvoice().printInvoice();

const franchisingInvoiceBuilder = new InvoiceFranchisingBuilder({
  amount: 50,
  salesPerson: 'Daniel',
});
invoiceDirector.setBuilder(franchisingInvoiceBuilder);
invoiceDirector.buildFranchisingInvoiceCommission();
// invoiceDirector.buildCommission();
franchisingInvoiceBuilder.getInvoice().printInvoice();
