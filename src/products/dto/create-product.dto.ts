import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    title: 'Title',
    description: 'Product title',
    uniqueItems: true,
    required: true,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    title: 'Price',
    description: 'Product price',
    default: 0,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    title: 'Description',
    description: 'Product description',
    default: '',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    title: 'SLUG',
    description: 'Product SLUG - SEO',
    required: false,
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    title: 'Stock',
    description: 'Product stock',
    required: false,
    default: 0,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    title: 'Sizes',
    description: 'Product sizes',
    required: true,
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    title: 'Gender',
    description: 'Product gender',
    required: true,
    enum: ['men', 'women', 'kid', 'unisex'],
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    title: 'Tags',
    description: 'Product tags',
    required: false,
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty({
    title: 'Images',
    description: 'Product images',
    required: false,
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images: string[];
  // type: string;
}
