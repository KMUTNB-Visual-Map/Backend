import { Test, TestingModule } from '@nestjs/testing';
import { GuestUsersController } from './guest_users.controller';
import { GuestUsersService } from './guest_users.service';

describe('GuestUsersController', () => {
  let controller: GuestUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestUsersController],
      providers: [GuestUsersService],
    }).compile();

    controller = module.get<GuestUsersController>(GuestUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
