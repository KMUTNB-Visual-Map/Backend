import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { FindShortestPathModule } from './find_shortest_path/find_shortest_path.module';
import { GraphModule } from './graph/graph.module';
import { GetPathfindingModule } from './get_pathfinding/get_pathfinding.module';


@Module({
  
  imports: [ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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
    CalibrationsModule,
    FindShortestPathModule,
    GraphModule,
    GetPathfindingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
