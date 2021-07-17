const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const FORECAST = createRequestTypes("FORECAST");

function action(type, payload = {}) {
  return { type, ...payload };
}

export const forecast = {
  request: (city) => action(FORECAST[REQUEST], { city }),
  success: (response) => action(FORECAST[SUCCESS], { response }),
  failure: (error) => action(FORECAST[FAILURE], { error }),
};
