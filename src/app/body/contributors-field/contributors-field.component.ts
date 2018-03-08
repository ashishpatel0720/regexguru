import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-contributors-field',
  templateUrl: './contributors-field.component.html',
  styleUrls: ['./contributors-field.component.css']
})
export class ContributorsFieldComponent implements OnInit {
  contributors=[]
  constructor(private http:Http) { }

  ngOnInit() {
    console.log("creating contributors");

      // this.http.get('//api.github.com/repos/ashishpatel0720/regexguru/contributors')
      this.http.get('https://api.github.com/repos/vuejs/vue/contributors')
        .subscribe((response)=>{
          console.log(response.json());
          this.contributors=response.json();
          },
          (error)=>{
          console.log(error);
          console.error("Error in getting Contributors");
          });

  }

}
