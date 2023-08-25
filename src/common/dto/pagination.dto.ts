import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    title: 'Limit',
    description: 'How many rows do you need?',
    default: 10,
    required: false,
  })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  limit?: number;

  @ApiProperty({
    title: 'Offset',
    description: 'How many rows do you need to skip?',
    default: 0,
    required: false,
  })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset?: number;
}
