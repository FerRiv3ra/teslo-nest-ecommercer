import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class ParseUUIDFileExtension implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const [fileName, fileExtension] = value.split('.');

    if (!isUUID(fileName) || !fileExtension) {
      throw new BadRequestException(`${value} is not a valid filename`);
    }

    return value;
  }
}
