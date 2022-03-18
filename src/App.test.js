import { render, screen } from '@testing-library/react'

import StepComponent from './Components/StepComponent'
import PageOne from './Components/Pages/PageOne'

test('should render Page One texts correctly', () => {
  render(<PageOne />)
  const pageOneText = screen.getByText(/Page One/i)
  expect(pageOneText).toBeInTheDocument()
})
