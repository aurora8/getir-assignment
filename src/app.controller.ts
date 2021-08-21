import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { RecordDto } from './schemas/record.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'fetches a filter query on the item data with the provided request payload conditions',
    description: 'fetches a filter query on the item data with the provided request payload conditions'
  })
  @ApiBody({
    required: true,
    type: () => RecordDto,
    description: 'request payload, defines filter conditions to apply on items'
  })
  @Post('records')
  /**
   * executes a filter query against the records collection
   * with the matching query conditions from the request payloads
   * 
   * all exception caught within controller methods are handled by
   * the default global exception filter at the exception layer provided
   * by the framework
   * 
   * @async
   * @function query
   * @param {RecordDto} recordDto the data transfer object of the request payloads, all
   * validation is performed by class-validator decorators on the class definition
   * @return {Promise<{ records: Array<RecordItem>, code: HttpStatus, msg: string }>} the response
   * object from the query
   */
  async query(@Body() record: RecordDto) {
      const records = await this.appService.filterItems(record);

      return {
        records,
        code: HttpStatus.OK,
        msg: "Success"
      }
  }
}
