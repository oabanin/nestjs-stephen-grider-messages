import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}
