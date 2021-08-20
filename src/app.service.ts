import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record } from './schemas/record.schema';
import { RecordDto } from './schemas/record.dto';

@Injectable()
export class AppService {

  /**
   * @constructor
   * injects a RecotdItem model
   * @param RecordItem 
   */
  constructor(
    @InjectModel(Record.name)
    private RecordItem: Model<Record>,
  ) {}

  /**
   * executes a filter query, this is the service layer that
   * only takes care of executing business logic, the app
   * controller uses this method to run the query
   * 
   * @param {RecordDto} dto the dto of the request payloads
   * @returns {Promise<Collection<ItemRecord>>} query results
   */
  async filterItems(dto: RecordDto) {
    const result = await this.RecordItem.aggregate([
      {
        $match: {
          createdAt: {
            $gte: dto.startDate,
            $lte: dto.endDate,
          },
        }
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: { $sum: '$counts' },
        },
      },
      {
        $match: {
          totalCount: {
            $gt: dto.minCount,
            $lt: dto.maxCount,
          },
        },
      },
    ]).exec();

    return result;
  }
}
