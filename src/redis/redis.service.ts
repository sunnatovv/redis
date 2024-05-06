import {
  BadRequestException,
  Inject,
  Injectable,
  OnModuleDestroy,
} from '@nestjs/common';
import { REDIS_CLIENT, RedisClient } from './redis-client';
import { SetRedisDto } from './dto/set-redis.dto';

@Injectable()
export class RedisService implements OnModuleDestroy {
  constructor(@Inject(REDIS_CLIENT) private redisClient: RedisClient) {}

  onModuleDestroy() {
    this.redisClient.quit();
  }

  ping() {
    return this.redisClient.ping();
  }

  async set(setRedisDto: SetRedisDto): Promise<string> {
    const { key, value } = setRedisDto;

    const keyExists = await this.redisClient.exists(key);
    console.log(keyExists);
    if (keyExists) {
      throw new BadRequestException('Already exists');
    }

    await this.redisClient.get(key);
    // await this.redisClient.setRange
    return `Set value to Redis: ${value}`;
  }

  async get(key: string): Promise<string> {
    console.log(await this.redisClient.keys('*'));

    const retrievedValue = await this.redisClient.get(key);
    const retrievedValueDel = await this.redisClient.getDel(key);
    await this.redisClient.del(key);

    return `Get value from Redis: ${retrievedValue}`;
  }
}
