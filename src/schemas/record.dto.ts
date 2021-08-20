import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, Min } from "class-validator";

/**
 * @class RecordDto
 * a class representing a transfer object that is serialized 
 * on the network, dto is used to validate incoming network payloads
 * to be utilized in controller methods using class-transformer and 
 * class-validator
 */
export class RecordDto {

    @ApiProperty({
        title: 'item start date from',
        example: 'YYYY-MM-DD',
        type: String,
        required: true,
        description: 'defines a start date filter to apply in the format YYYY-MM-DD'
    })
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    startDate: Date;
    
    @ApiProperty({
        title: 'item end date',
        example: 'YYYY-MM-DD',
        required: true,
        type: String,
        description: 'defines an end date filter to apply in the format YYYY-MM-DD'
    })
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    endDate: Date;

    @ApiProperty({
        title: 'min count of the sum on the count field',
        type: Number,
        required: true,
        description: 'filters items that have a count field sum higher than this value'
    })
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    minCount: number;

    @ApiProperty({
        title: 'max count of the sum on the count field',
        type: Number,
        required: true,
        description: 'filters items that have a count field sum lower than this value'
    })
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    maxCount: number;
}