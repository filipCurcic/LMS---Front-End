import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient: HttpClient) {

   }

   private fileUrl = '`http://localhost:8080/file';

   downloadFile(data) {
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URL = this.fileUrl+data.fileUrl;
    return this.httpClient.get(REQUEST_URL, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    });

  }

  exportDataToPDF(data) {
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URL = data.fileUrl+'/pdf';
    return this.httpClient.get(REQUEST_URL, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    });
  }
  
}
