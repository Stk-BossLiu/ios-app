export interface IWeatherInfo {
  temperature: number | undefined;
  weather:
  | 'Sunny'
  | 'Cloudy'
  | 'Rainy'
  | 'Snowy'
  | 'Windy'
  | 'Storms'
  | undefined;
  city: string | undefined;
  date: string | undefined;
}
