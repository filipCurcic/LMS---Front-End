import * as moment from 'moment';

export class EventSend {
    startEvent: String;
    endEvent: String;
    header: String;
    info: String;
    type: String;
  
    constructor(startEvent, endEvent, header, info, type){
      this.startEvent = startEvent;
      this.endEvent = endEvent;
      this.header = header;
      this.info = info;
      this.type = type;
    }
  
}