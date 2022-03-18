//@flow
import * as React from 'react'

import type { props } from '../StepComponent'

const PageOne = ({
  currentStep,
  handleNext,
  handleBack,
}: props): React$Element<'div'> => {
  console.log('page 1', currentStep)
  return (
    <div>
      <h1>Page One</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut fugiat
        repellendus cum ab est neque illo quod. Obcaecati, aliquam.
      </div>
      <div>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  )
}

export default PageOne
