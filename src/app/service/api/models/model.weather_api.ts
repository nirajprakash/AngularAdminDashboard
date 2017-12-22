

export class ModelWeatherApi {
   public weather: Weather[];
    public dt: number;
    public name: string;
    public sys: Sys;
    public main: Main;

    public getMain(): string {
        if (this.weather != null && this.weather.length > 0) {
            return this.weather[0].main;
        }

        return null;

    };

    public getTemp(): string {
        if (this.main != null)
            return this.main.temp;
        return null;
    };

    public getCity(): string {
        return name;
    }

    public getCountry(): string {
        if (this.sys != null)
            return this.sys.country;
        return null;
    }

   
}

class Weather {
    public id: number;
    public main: string;
}


class Main {
    public temp: string;
}

class Sys {
    public country: string;
}