import * as moment from 'moment';

export class EventSend {
    dateEvent: String;
    header: String;
    info: String;
    type: String;
  
    constructor(date, header, info, type){
      this.dateEvent = date;
      this.header = header;
      this.info = info;
      this.type = type;
    }
  
}