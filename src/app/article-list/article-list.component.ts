import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../models/post.model";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

        posts: Post[] = [];

        constructor(private http: HttpClient) {
        }

        ngOnInit() {
                this.http
                        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                        .subscribe(posts => {
                                this.posts = posts;
                        });
        }
}
