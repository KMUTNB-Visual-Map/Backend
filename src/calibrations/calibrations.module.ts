import { Module } from '@nestjs/common';
import { CalibrationsService } from './calibrations.service';
import { CalibrationsController } from './calibrations.controller';

@Module({
  controllers: [CalibrationsController],
  providers: [CalibrationsService],
})
export class CalibrationsModule {}
