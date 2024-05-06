import { PartialType } from '@nestjs/mapped-types';
import { SetRedisDto } from './set-redis.dto';

export class UpdateRediDto extends PartialType(SetRedisDto) {}
