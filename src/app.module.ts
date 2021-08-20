import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Record, RecordSchema } from './schemas/record.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true',
      {
        retryAttempts: 3,
      }
    ),
    MongooseModule.forFeature([
      { name: Record.name, schema: RecordSchema },
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
