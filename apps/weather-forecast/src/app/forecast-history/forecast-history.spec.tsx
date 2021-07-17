import { render } from '@testing-library/react';

import ForecastHistory from './forecast-history';

describe('ForecastHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< ForecastHistory />);
    expect(baseElement).toBeTruthy();
  });
});
