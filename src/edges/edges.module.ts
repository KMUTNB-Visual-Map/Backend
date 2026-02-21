import { Module } from '@nestjs/common';
import { EdgesService } from './edges.service';
import { EdgesController } from './edges.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EdgesController],
  providers: [EdgesService],
})
export class EdgesModule {}
