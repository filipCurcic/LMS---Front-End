import * as moment from 'moment';


export class Event {
    date: moment.Moment;
    header: String;
    type: String;
    info: String;

    constructor(date, header, type, info){
        this.date = date;
        this.header = header;
        this.type = type;
        this.info = info;
    }

}
