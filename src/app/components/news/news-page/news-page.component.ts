import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news-service/news.service';
import News from 'src/app/models/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
 
  news:any;
  constructor(private NewsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = this.NewsService.getOneNews(+this.route.snapshot.paramMap.get('id')).subscribe((data: News[]) => {
      this.news = data;
    });
  }



}
