import { call, put, takeEvery } from "redux-saga/effects";
import { fetchForecast as fetchForecastService } from "../services";

function* fetchForecast(action) {
  try {
    const user = yield call(fetchForecastService, action.payload.userId);
    yield put({ type: "FORECAST_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "FORECAST_FETCH_FAILED", message: e.message });
  }
}

function* forecastSaga() {
  yield takeEvery("FORECAST_FETCH_REQUESTED", fetchForecast);
}

export default forecastSaga;
