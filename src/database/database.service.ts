import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  private pool = new Pool({
    connectionString:
      'postgresql://postgres.nskjeegyfgvaktuextiv:JauEbfX8ifIhzkh5@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres',
    ssl: {
      rejectUnauthorized: false, 
    },
  });

  





  async query(text: string, params?: any[]) {
    const result = await this.pool.query(text, params);
    return result.rows;
  }
}
