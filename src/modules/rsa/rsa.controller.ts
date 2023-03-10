import { Controller, Get, Param, Query } from '@nestjs/common';
import { Body, Delete, Post } from '@nestjs/common/decorators';
import { MessagePattern } from '@nestjs/microservices';
import { PatrolDto } from './dto/patrol-base.dto';
import { RSAService } from './rsa.service';

@Controller('api')
export class RSAController {
  constructor(private readonly rSAService: RSAService) {}
  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    console.log(name);
    return `Hello ${name} Async`;
  }

  // @MessagePattern({ cmd: 'find-providers' })
  @Get('/providers')
  getProviders(@Query() query: any) {
    return this.rSAService.getProviders(query);
  }

  @Get('/providers/:providerId/triage-questions')
  getTriageQuestions(@Param('providerId') providerId: string) {
    return this.rSAService.getTriageQuestions(providerId);
  }

  @Post('/providers/:providerId/roadside-assistance')
  createProvider(
    @Param('providerId') providerId: string,
    @Body() patrolDto: PatrolDto,
  ) {
    return this.rSAService.createProvider(providerId, patrolDto);
  }

  @Get('/roadside-assistances/:assistanceId')
  getAssistance(@Param('assistanceId') assistanceId: string) {
    return this.rSAService.getAssistance(assistanceId);
  }

  @Delete('/roadside-assistances/:assistanceId')
  deleteAssistance(@Param('assistanceId') assistanceId: string) {
    return this.rSAService.deleteAssistance(assistanceId);
  }
}
