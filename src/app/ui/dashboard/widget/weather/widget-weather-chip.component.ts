import { Component, OnInit,Input } from '@angular/core';
import { ServiceWeather, ModelWeather } from './../../../../service/api';

@Component({
  selector: 'widget-weather-chip',
  templateUrl: './widget-weather-chip.component.html',
  styleUrls: ['./widget-weather-chip.component.scss']
})
export class WidgetWeatherChipComponent implements OnInit {

  @Input() city = "bangalore";
  @Input() country = "IN";

  _vmWeatherChip: ModelWeather;
  _mIsInProgress: boolean= false;
  constructor(
    private serviceWeather: ServiceWeather, ) {

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");

    setTimeout(() => {

      this.requestGetWeather(this.city, this.country);

    });
  }


  requestGetWeather(city: string, country: string) {
    this._mIsInProgress = true;

    this.serviceWeather.getWeather(city, country)
      .subscribe((modelWeather: ModelWeather) => {
        //console.log("modelUnusedTracker ", facilityOtherlist);
        //console.log("requestProject: " + values);
        console.log(modelWeather);
        //if (values == true) {
        //this.closeOnResult();
        this._vmWeatherChip = modelWeather;
        this._mIsInProgress = false;
      },
      (error) => {
        console.log(error);
        this._mIsInProgress = false;

        //this.mdlSnackbarService.showToast("Error |" + error.message, 4000);
        //toast('Error: '+ "server side", 4000);
      });
  }
}