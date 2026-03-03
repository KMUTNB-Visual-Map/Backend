import { Test, TestingModule } from '@nestjs/testing';
import { CalibrationsController } from './calibrations.controller';
import { CalibrationsService } from './calibrations.service';

describe('CalibrationsController', () => {
  let controller: CalibrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalibrationsController],
      providers: [CalibrationsService],
    }).compile();

    controller = module.get<CalibrationsController>(CalibrationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
