declare var google: any;
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

    var input = document.getElementById('searchTextField');
    var options = {
      componentRestrictions: {
        country: 'us'
      }
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {

      var place = autocomplete.getPlace();
      var lat = place.geometry.location.lat();
      var long = place.geometry.location.lng();
    

    });
   
   }

  onSubmit(text: string) {
    this.text = text;
    localStorage.setItem("text", text);
  }

}
