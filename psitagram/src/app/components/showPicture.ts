import { Component,Input,OnChanges,OnInit,SimpleChanges } from '@angular/core';
import { pipe } from 'rxjs';
import { PostimgService } from '../services/postimg.service'; 
@Component({

    selector: 'app-jpg',
    templateUrl: './showPicture.html'
  })
export class showPicture implements OnChanges
{
    @Input() dataImg : String | undefined;

    posts:any;
    title = 'psitagram';
    constructor(private service:PostimgService) {}
    private defaultUrl = 'https://media.npr.org/assets/img/2022/08/26/img_9911-751a5efa015240804a553b880ae7a537c413d28a-s1100-c50.jpg'
  public imgSrc: String=''
  

    ngOnChanges(changes: SimpleChanges) {
       if (changes['dataImg']){
        if(changes['dataImg'].currentValue){  
       this.service.getImages(changes['dataImg'].currentValue)
          .subscribe(response => {
            this.posts = response;
           this.imgSrc=this.posts.message || '';
    })}
    else{
        this.imgSrc=this.defaultUrl;
    }
       }
       
  }}