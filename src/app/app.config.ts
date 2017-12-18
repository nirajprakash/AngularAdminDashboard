
export class ConfigAPI {

    /* {
      "id": "104",
      "companyName": "Intugine",
      "appName": "Ble Navigation Demo App",
      "appType":"android",
      "detail":"This is research oriented app, used for location detection of the mobile while navigating in those area where more than 3 BluetoothLEs are present.",
      "features": [
          "Bluetooth low energy"
          ],
      "images":[],       
      "hasVideo":false,   
      "colorPrimary":"#1561BD",
      "colorPrimaryLight":"#a3c9f6",
      "colorPrimaryDark": "#1257aa",
      "wall":"/assets/img/intugine_ble.jpg",
      "year": "2017",
      "logo":"/assets/img/intugine_logo.png",
      "link":"https://intugine.com/"
  },*/
    public static get Weather() {
        //'https://intugine.net:8081/api/''
        // 'http://localhost:9081/api/'
        // 'http://localhost:9081/api/'
        return {
            key: "50c2251aab1918622b2eaeda24529cdf",
            url: 'https://api.openweathermap.org/data/2.5/'
        };
    }
}