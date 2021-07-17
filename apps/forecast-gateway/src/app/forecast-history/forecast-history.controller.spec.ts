import { Test, TestingModule } from '@nestjs/testing';
import { ForecastHistoryController } from './forecast-history.controller';

describe('ForecastHistoryController', () => {
  let controller: ForecastHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForecastHistoryController],
    }).compile();

    controller = module.get<ForecastHistoryController>(ForecastHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
