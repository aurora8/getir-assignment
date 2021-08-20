import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsNumber, Min } from "class-validator";

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