import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EdgesModule } from './edges/edges.module';
import { LandmarksModule } from './landmarks/landmarks.module';
import { NodeModule } from './node/node.module';
import { FloorModule } from './floor/floor.module';
import { GuestUsersModule } from './guest_users/guest_users.module';
import { CalibrationsModule } from './calibrations/calibrations.module';

@Module({
  imports: [DatabaseModule,EdgesModule,LandmarksModule, NodeModule, FloorModule, GuestUsersModule, CalibrationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
