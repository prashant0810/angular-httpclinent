
import { Component ,OnInit} from '@angular/core';
import { FetchdataService } from './fetchdata.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataService]
})
export class AppComponent implements OnInit{
  posts=[''];
  title='Angular HttpClient';
  Url = "https://jsonplaceholder.typicode.com/posts"

  // inject FetchdataService service
  constructor(private srv: FetchdataService) { }

  getPosts() : void {
    this.srv.getData(this.Url)
      .subscribe(
        data => this.posts.push(...data),
        error=> console.log(error)
      )
  }
 
  ngOnInit(){
    this.getPosts()
  }
}








