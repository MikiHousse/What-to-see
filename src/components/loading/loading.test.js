import React from "react"
import { render } from "@testing-library/react"
import Loading from "./loading"

describe('Component: Loading', () => {
  it('should render correctly', () => {
    const { getByText } = render(
        <Loading/>,
  );
  const loadingStatus = getByText('Loading...')
  expect(loadingStatus).toBeInTheDocument()
    })
})
