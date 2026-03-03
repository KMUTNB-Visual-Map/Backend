import { Test, TestingModule } from '@nestjs/testing';
import { GuestUsersService } from './guest_users.service';

describe('GuestUsersService', () => {
  let service: GuestUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestUsersService],
    }).compile();

    service = module.get<GuestUsersService>(GuestUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
