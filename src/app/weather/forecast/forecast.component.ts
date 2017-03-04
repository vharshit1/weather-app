import { WeatherService } from './../weather.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';


import { Response } from '@angular/http';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit, OnChanges {
  @Input('text') text: string;
  forecastData: any;
  errorFlag: boolean;



  ngOnChanges(changes: any) {
     if(changes.text.currentValue)
      this.getForecastData(changes.text.currentValue);

  }
  constructor(private wS: WeatherService) { }

  ngOnInit(): any {
      
    if(this.text){
     this.getForecastData(this.text);
    }
    
  }


  getForecastData(text) {

    this.wS.getForecastData(text).subscribe(
      (data: any) => {

        if (data.query.count > 0) {
          this.forecastData = data.query.results.channel.item.forecast;
          this.errorFlag = false;
        }
        else
          this.errorFlag = true;






      }
    );

  }

}
