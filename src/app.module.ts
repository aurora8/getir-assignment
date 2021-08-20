import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item, ItemSchema } from './schemas/record.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
      {
        retryAttempts: 3,
      }
    ),
    MongooseModule.forFeature([
      { name: Item.name, schema: ItemSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
