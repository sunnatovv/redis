import { createClient } from 'redis';
import { REDIS_CLIENT, RedisClient } from './redis-client';
import { FactoryProvider } from '@nestjs/common';

export const redisClientFactory: FactoryProvider<Promise<RedisClient>> = {
  provide: REDIS_CLIENT,
  useFactory: async () => {
    const client = createClient({
      url: 'redis://default:LD4QXhJYI9yGzkei4EEkn9Ed3s1ekBxj@redis-16354.c311.eu-central-1-1.ec2.redns.redis-cloud.com:16354',
    });
    await client.connect();
    return client;
  },
};
