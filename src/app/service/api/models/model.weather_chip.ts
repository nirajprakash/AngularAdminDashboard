export class ModelWeather {
    public id: number;
    public main: string;
    public dt: number;
    public city: string;
    public country: string;
    public temp: number;

    constructor(dt: number,
        city: string,
        country: string,
        main: string,
        temp: number){
            this.dt = dt;
            this.city = city;
            this.country = country;
            this.temp = temp;
            this.main =main;
        }
        
}