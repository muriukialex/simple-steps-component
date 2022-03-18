//@flow
import React from 'react'

import type { props } from '../StepComponent'

const PageThree = ({
  currentStep,
  handleNext,
  handleBack,
}: props): React$Element<'div'> => {
  console.log('page 3', currentStep)
  return (
    <div>
      <h1>Page three</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
        dignissimos voluptatibus ut, libero eligendi fugiat labore laboriosam
        doloribus suscipit fuga ipsum saepe hic blanditiis, accusantium quisquam
        sit. Amet, sed?
      </div>
      <div>
        <button onClick={handleBack}>back</button>
      </div>
    </div>
  )
}

export default PageThree
