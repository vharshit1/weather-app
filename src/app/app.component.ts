import { WeatherService } from './weather/weather.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private wS: WeatherService) { }

  text: string="";
 

   ngOnInit() {
     localStorage.setItem("lastname", "Smith");

   this.text=localStorage.getItem("text");
   
   }

  onSubmit(text: string) {
    this.text = text;
    localStorage.setItem("text", text);
  }

}
