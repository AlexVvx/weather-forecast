import { HttpService, Injectable } from "@nestjs/common";
import { DataSource } from "../models/data-source-model";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { parse } from "node-html-parser";
import { AxiosResponse } from "axios";

@Injectable()
export class ForecastService {
  constructor(private httpService: HttpService) {}

  dataSourcesParse = {
    pogodaby: (response: AxiosResponse) => {
      const parsedDocument = parse(response.data);
      const forecastElement = parsedDocument.querySelector("#forecast");
      const weatherForecast = forecastElement
        .querySelector("tr")
        .querySelectorAll("td")[2].innerText;
      return weatherForecast;
    },
    pogodaCityMapping: (city: string) => {
      const cityMapping = {
        Minsk: 26850,
        Brest: 33008,
      };
      return cityMapping[city];
    },
  };

  fetchWeatherForecast(dataSource: DataSource, city?: string, period?: number) {
    const cityMapped = this.dataSourcesParse.pogodaCityMapping(city);
    const dataSourceUrl = new URL(cityMapped, environment.urls[dataSource]);

    return this.httpService.get(dataSourceUrl.toString()).pipe(
      map((pageSource) => {
        switch (dataSource) {
          case DataSource.pogodaby:
            return this.dataSourcesParse.pogodaby(pageSource);
        }
      })
    );
  }
}
