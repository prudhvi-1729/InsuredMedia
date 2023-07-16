import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { loginData } from '../login/loginData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("textarea")
  $textarea!: ElementRef<HTMLTextAreaElement>;
  @ViewChild("backdrop")
  $backdrop!: ElementRef<HTMLDivElement>;
  tribute: string = '';
  users: string[] = [];
  comment = ""
  mentionConfig = {
    mentionSelect: (item: any) => {
      this.tribute = `${item.label}  `;
      return this.tribute;
    }
  }
  constructor(private auth:AuthserviceService){
    this.auth.getUsers().subscribe((data:loginData[])=>{
      for(let i=0 ; i< data.length; i++){
        this.users.push(data[i].username)
    }})
  }
  get highlightedText() {
    return this.applyHighlights(this.comment)
  }

  applyHighlights(text: string) {
    text = text ? text
      .replace(/\n$/g, "\n\n") : '';
    this.users.forEach(x => {
      text = text
        .replace(new RegExp(x, 'g'), "<mark>$&</mark>");
    })
    return text;
  }

  handleScroll() {
    var scrollTop = this.$textarea.nativeElement.scrollTop;
    this.$backdrop.nativeElement.scrollTop = scrollTop;

    var scrollLeft = this.$textarea.nativeElement.scrollLeft;
    this.$backdrop.nativeElement.scrollLeft = scrollLeft;
  }

}
