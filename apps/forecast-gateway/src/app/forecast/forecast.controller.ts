import { Controller, Get, Param, Query } from "@nestjs/common";
import { ForecastService } from "./forecast.service";
import { DataSource } from "../models/data-source-model";

@Controller("forecast")
export class ForecastController {
  constructor(private forecastService: ForecastService) {}
  defaultDataSource: DataSource = DataSource.pogodaby;

  @Get()
  getDefaultDataSource(
    @Query("city") city: string,
    @Query("period") period: number
  ) {
    return this.forecastService.fetchWeatherForecast(this.defaultDataSource, city, period);
  }

  @Get(":dataSource")
  getDataSource(
    @Param("dataSource") dataSource: DataSource,
    @Query("city") city: string,
    @Query("period") period: number
  ) {
    return this.forecastService.fetchWeatherForecast(dataSource, city, period);
  }
}
