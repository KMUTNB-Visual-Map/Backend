import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EdgesModule } from './edges/edges.module';
import { LandmarksModule } from './landmarks/landmarks.module';

@Module({
  imports: [DatabaseModule,EdgesModule,LandmarksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
