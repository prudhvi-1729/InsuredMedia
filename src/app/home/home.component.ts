import { Component} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

    tribute:string='';
    items:string[]= [ "Noah", "Liam", "Mason", "Jacob" ];
    mentionConfig = {
      mentionSelect:(item:any)=>{
        this.tribute=`${item.label}`;
        return this.tribute;
      }
      
  }

}
