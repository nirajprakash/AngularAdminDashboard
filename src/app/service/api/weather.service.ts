import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, 
    RequestOptions, Request, Response } from '@angular/http';
    import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { ConfigAPI } from '../../app.config';
import { ModelWeather, ModelWeatherApi } from './models'

@Injectable()
export class ServiceWeather {

    constructor(private http: Http) { }

    getWeather(city: string, country: string): Observable<ModelWeather> {
        let params = new URLSearchParams();
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //headers.append('Authorization', token);
        params.append('appid', ConfigAPI.Weather.key);
        params.append('q', city + ',' + country);

        let options = new RequestOptions(
            {
                headers: headers,
                method: "get",
                url: ConfigAPI.Weather.url + "/weather",
                search: params
            });

        return this.http.request(new Request(options))
            .map((response: Response) => {
                let data: ModelWeatherApi = response.json();
                if (data !== null) {
                    //console.log("http response: restaurant data: ");
                    console.log(data);
                    if (data) {

                       let country =   data.sys != null? data.sys.country:null;
                       let temp:number = data.main != null? parseInt(data.main.temp):0;
                       let main = (data.weather != null && data.weather.length > 0)?data.weather[0].main: null;

                       let modelWeather: ModelWeather = new ModelWeather(
                            data.dt,
                            data.name,
                            country,
                            main,
                            temp/10);
                            return modelWeather;

                    }
                    return null;
                } else {
                    Observable.throw('null');
                }
            }).catch((err: any) => {
                console.log(err);

                return Observable.throw(err.json() || 'Network error');

            });
    }

}