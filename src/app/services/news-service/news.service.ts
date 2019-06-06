import { Injectable } from '@angular/core';
import News from 'src/app/models/news'
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  private newsUrl = 'http://localhost:8080/news';


  getNews():Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl+`/all`);
  }

  getOneNews(id:number):Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl+`/${id}`);
  }

  addNews(news:News, image:File) {
    const postData = new FormData();
    postData.append("profileImage", image, image.name);
    postData.append("data", JSON.stringify(news));
    return this.http.post(this.newsUrl+'/add', postData);
  }

  deleteNews(id: number) {
    return this.http.delete(this.newsUrl+`/${id}`);
  }

  updateNews(id:number, news:News) {
    return this.http.put(this.newsUrl+`/${id}`, news)
  }

}
