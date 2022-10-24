import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: ` 
  <div>
    <div class="content" role="main">
      <ejs-dropdownlist (change)="onSelected($event)" [dataSource] = 'dataFromApi' [fields]="dataFields ">
  
      </ejs-dropdownlist>

   </div>
    <app-jpg [dataImg]='imgToShow'></app-jpg> 
  </div>
    `
})
export class AppComponent implements OnInit{
  posts:any;
  title = 'psitagram';
  public imgToShow: String | undefined;
  constructor(private service:PostService) {}
  onSelected($event: any):void {

    this.imgToShow=$event.itemData.race + ($event.itemData.breed ? `/${$event.itemData.breed}`: '')
   
	}
  public dataFromApi: Object[]=[{}]
  ngOnInit() {
    let newArray: { race: String; text:String; breed?: String; }[] =[];
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
          const results = this.posts.message
          const arrayResults = Object.entries(results)
          arrayResults.forEach(([key,value] : [any,any])=>{
            if(!value.length){
              newArray.push({race:key, text:key})
            }
            else{
            value.forEach((breed: String)=>{
              newArray.push({race:key, breed:breed, text:breed})
            })}
          })
        });
        this.dataFromApi=newArray;
      }
    public dataFields: Object ={ groupBy: 'race', text: 'text'}
  
}

