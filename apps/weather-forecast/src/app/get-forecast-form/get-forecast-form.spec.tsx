import { render } from '@testing-library/react';

import GetForecastForm from './get-forecast-form';

describe('GetForecastForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< GetForecastForm />);
    expect(baseElement).toBeTruthy();
  });
});
