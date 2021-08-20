/*
"key":"TAKwGc6Jr4i8Z487",
"createdAt":"2017-01-28T01:22:14.398Z",
"totalCount":2800
*/

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

@Schema({
    collection: 'records'
})
export class Item {

    @IsNotEmpty()
    @Prop({
        required: true,
    })
    key: string;

    @Prop({
        default: new Date(),
    })
    createdAt: Date;

    @Prop([Number])
    counts: number[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);