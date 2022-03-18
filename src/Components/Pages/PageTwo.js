//@flow
import React from 'react'

import '../style.css'

//types
import type { props } from '../StepComponent'

const PageTwo = ({
  currentStep,
  handleNext,
  handleBack,
}: props): React$Element<'div'> => {
  console.log('page 2', currentStep)
  return (
    <div>
      <h1>Page Two</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        aperiam consectetur iusto repellat optio est placeat esse quae facere
        ipsam. Reprehenderit facere deserunt ipsam reiciendis?
      </div>
      <div className="btnStyles">
        <button onClick={handleNext}>next</button>
        <button onClick={handleBack}>back</button>
      </div>
    </div>
  )
}

export default PageTwo
