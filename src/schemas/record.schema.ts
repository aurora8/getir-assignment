/*
"key":"TAKwGc6Jr4i8Z487",
"createdAt":"2017-01-28T01:22:14.398Z",
"totalCount":2800
*/

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/**
 * collection mapping to the records collection
 * 
 * modeling collection schema mappings is useful to 
 * support in extending the application, this model
 * class allows eay extensions
 */
@Schema({
    collection: 'records'
})
export class Record {

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

export const RecordSchema = SchemaFactory.createForClass(Record);