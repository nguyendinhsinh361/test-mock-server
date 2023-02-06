import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RSAModule } from './modules/rsa/rsa.module';

@Module({
  imports: [RSAModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
