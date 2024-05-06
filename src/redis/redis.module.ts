import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisController } from './redis.controller';
import { REDIS_CLIENT } from './redis-client';
import { redisClientFactory } from './redis-client.factory';

@Module({
  controllers: [RedisController],
  providers: [RedisService, redisClientFactory],
})
export class RedisModule {}
