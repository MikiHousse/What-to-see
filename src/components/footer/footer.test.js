import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Footer from './footer'

describe('Component: Footer', () => {
  const history = createMemoryHistory()
  it('should render correctly', () => {
    const { getByText } = render(
        <Router history={history}>
          <Footer/>
        </Router>
      );

      const copyrightText = getByText('© 2019 What to watch Ltd.');
      expect(copyrightText).toBeInTheDocument();
  });
})
