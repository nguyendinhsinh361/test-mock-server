import { Module } from '@nestjs/common';
import { RSAController } from './rsa.controller';
import { RSAService } from './rsa.service';

@Module({
  controllers: [RSAController],
  providers: [RSAService],
})
export class RSAModule {}
