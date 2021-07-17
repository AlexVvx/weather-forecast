import { HttpModule, Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ForecastController } from "./forecast/forecast.controller";
import { ForecastHistoryController } from "./forecast-history/forecast-history.controller";
import { ForecastService } from "./forecast/forecast.service";

@Module({
  imports: [HttpModule],
  controllers: [AppController, ForecastController, ForecastHistoryController],
  providers: [AppService, ForecastService],
})
export class AppModule {}
