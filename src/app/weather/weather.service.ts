import { Http, Response, Headers } from '@angular/http';


import {  Output, EventEmitter, Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {
  
  


  constructor(private http: Http) { }

  getcurrentWeather(text) {
    
  
  
    return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + text + "') and u='c'"+'&format=json')
   
      .map(response => response.json() )
      .catch(this.handleError);
  }

    getForecastData(text) {

     return this.http.get("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + text + "') and u='c'"+'&format=json')
   
      .map(response => response.json() )
      .catch(this.handleError);
  }



 

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}
