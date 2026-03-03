import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-1-ap-southeast-2.pooler.supabase.com',
      port: 5432,
      username: 'postgres.nskjeegyfgvaktuextiv',
      password: 'xxxx',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    DatabaseModule,
    EdgesModule,
    LandmarksModule, 
    NodeModule, 
    FloorModule, 
    GuestUsersModule, 
    CalibrationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
