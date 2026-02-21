import { Injectable } from '@nestjs/common';
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class LandmarksService {
  constructor(private db: DatabaseService) {}
  async create(createLandmarkDto: CreateLandmarkDto) {
   const { landmark_id, floor_id, name, type, x_coordinate, y_coordinate } =
    createLandmarkDto;

  const query = `
    INSERT INTO landmark
    (landmark_id, floor_id, name, type, x_coordinate, y_coordinate)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const values = [
    landmark_id,
    floor_id,
    name,
    type,
    x_coordinate,
    y_coordinate,
  ];

  return await this.db.query(query, values);
  }
  

  findAll() {
    return this.db.query(`SELECT * FROM landmark`);
  }

  findOne(id: number) {
    return `This action returns a #${id} landmark`;
  }

  update(id: number, updateLandmarkDto: UpdateLandmarkDto) {
    return `This action updates a #${id} landmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} landmark`;
  }
}
