import { WeatherService } from './../weather.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit, OnChanges {
  weatherData: any;
  errorFlag: boolean;

  @Input('text') text: string;
  constructor(private wS: WeatherService) { }

  ngOnChanges(changes: any) {
    if(changes.text.currentValue)
      this.getCurrentWeatherData(changes.text.currentValue);

  }


  ngOnInit(): any {
    if (this.text)
      this.getCurrentWeatherData(this.text);
  }


  getCurrentWeatherData(text) {

    this.wS.getcurrentWeather(text).subscribe(
      (data: any) => {
        if (data.query.count > 0) {
          this.weatherData = data.query.results;
          this.errorFlag = false;
        }
        else
          this.errorFlag = true;





      }
    );

  }



}
