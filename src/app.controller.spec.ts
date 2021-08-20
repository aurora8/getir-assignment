import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Record, RecordSchema } from './schemas/record.schema';

// expected response given the test request payloads
const response = {
  records: [
    {
      key: 'TAKwGc6Jr4i8Z487',
      createdAt: '2017-01-28T01:22:14.398Z',
      totalCount: 310,
    },
    {
      key: 'TAKwGc6Jr4i8Z487',
      createdAt: '2017-01-28T01:22:14.398Z',
      totalCount: 170,
    },
  ],
  code: 200,
  msg: 'Success',
};

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
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
      ]
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('api', async () => {
    it('query filter should equal', async () => {
      // mock implementation
      jest.spyOn(appController, 'query').mockImplementation(() => response as any);
      jest.setTimeout(10000);
      expect(
        await appController.query({
          startDate: new Date('2017-01-01'),
          endDate: new Date('2018-03-18'),
          minCount: 0,
          maxCount: 1000,
        }),
      ).toBe(response);
      console.log(response);
    });
  });

});
