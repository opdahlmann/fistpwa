import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentPipe'
})
export class MomentPipe implements PipeTransform {
    transform(date, format) {
        return moment(date).format(format);
    }
}

//use: {{order.CreatedDate | momentPipe:'DD.MM.YYYY'}}
