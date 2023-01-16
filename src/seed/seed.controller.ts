import { Controller, Get } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { SeedService } from './seed.service';
import { ValidRoles } from '../auth/interfaces/valid-roles';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  @Get()
  executeSeed() {
    return this.seedService.runSeed();
  }
}
