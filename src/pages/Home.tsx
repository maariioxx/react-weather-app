import { Weather } from '../types/weather';
import { weatherCodesAndIcons } from '../data/weatherCodesAndIcons';

export function Home({ weather }: { weather: Weather }) {
  const weatherCode = weatherCodesAndIcons.filter((code) => {
    if (code.codes.includes(weather.current.condition.code)) return code;
    return;
  });
  let weatherStyle: { bgColor: string; textColor: string; icon: string };
  weather.current.is_day === 1
    ? (weatherStyle = weatherCode[0].day)
    : (weatherStyle = weatherCode[0].night);
  return (
    <div
      className={`${weatherStyle.bgColor} ${weatherStyle.textColor} grow rounded-t-xl flex gap-2 justify-center items-center flex-col transition-all`}
    >
      <div className="flex items-center">
        <img src={weatherStyle.icon} alt="" className="w-48" />
        <div className="flex gap-2 flex-col">
          <div className="flex gap-2">
            <p className="text-4xl">{weather.current.temp_c}ºC</p>
            <p className="text-xl">
              {weather.current.feelslike_c.toFixed(0)}ºC
            </p>
          </div>
          <hr className="border-black" />
          <div>
            <p className="text-4xl">
              {weather.current.wind_kph.toFixed(0)}
              <span className="text-xl">km/h</span>
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-7xl">{weather.location.name}</h1>
      <div className="flex items-center gap-5 text-xl">
        <p className="text-xl">{weather.location.country}</p>|
        <p>{weather.location.localtime.split(' ')[1]}</p>
      </div>
    </div>
  );
}
