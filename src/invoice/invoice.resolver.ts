import { PaymentStatus, Currency, Item } from "./invoice.model";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
class ItemDTO {
    @Field()
    description: string;
    @Field()
    rate: number;
    @Field()
    quantity: number
}

@InputType()
export class CreateInvoiceDTO {
    @Field()
    customer: string;
    @Field()
    invoiceNo: string;
    @Field()
    paymentStatus: PaymentStatus;
    @Field()
    description: string;
    @Field()
    currency: Currency;
    @Field()
    taxRate: number;
    @Field()
    issueDate: Date;
    @Field()
    dueDate: Date;
    @Field()
    note: string;
    @Field(type => [ItemDTO])
    items: Array<{ description: string; rate: number; quantity: number }>;
}


@Mutation(returns => InvoiceModel)
async createInvoice(
    @Args('invoice') invoice: CreateInvoiceDTO,
): Promise < InvoiceModel > {
    return await this.invoiceService.create(invoice)
}