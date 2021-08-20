import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
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
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 50,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
