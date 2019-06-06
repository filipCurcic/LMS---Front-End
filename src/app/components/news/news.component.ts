import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {DataSource, CollectionViewer} from '@angular/cdk/collections';
import Professor from '../../models/professor';
import { ProfessorsService } from 'src/app/services/professors-service/professors.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import News from 'src/app/models/news';
import {NewsService} from "../../services/news-service/news.service"

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewsComponent implements OnInit {


  ds = new MyDataSource(this.NewsService);

  constructor(private NewsService:NewsService) { }

  ngOnInit() {

  }
  

}

export class MyDataSource extends DataSource<any> {


  constructor(private NewsService:NewsService){
    super()
  }

  connect(): Observable<News[]> {
    return this.NewsService.getNews();
  }

  disconnect(){
    
  }
  
}
