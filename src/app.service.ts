import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/record.schema';
import { RecordDto } from './schemas/record.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Item.name)
    private ItemModel: Model<Item>,
  ) {}

  async findAll() {
    return await this.ItemModel.find({}).exec();
  }

  async filterItems(dto: RecordDto) {
    const result = await this.ItemModel.aggregate([
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
