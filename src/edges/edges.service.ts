import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EdgesService {
  constructor(private db: DatabaseService) {}

  async findAll() {
    return await this.db.query('SELECT edge_id, source, target, cost, floor_id, ST_AsGeoJSON(geom)::json AS geom  FROM edge');
    }
    async findONE(id: number) {
    const result = await this.db.query('SELECT edge_id, source, target, cost, floor_id, ST_AsGeoJSON(geom)::json AS geom  FROM edge WHERE edge_id = $1', [id]);
    return result[0];
    } 
}