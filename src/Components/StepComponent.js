//@flow
import * as React from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'

import './style.css'

//content
import Content from './Content'

//components
import PageOne from './Pages/PageOne'
import PageTwo from './Pages/PageTwo'
import PageThree from './Pages/PageThree'

//types
export type props = {
  currentStep: number,
  handleNext: () => void,
  handleBack: () => void,
}

const StepComponent = (): React$Element<'div'> => {
  const [currentStep, setCurrentStep] = React.useState<number>(0)

  //   console.log(Content)
  const handleNext = () => {
    setCurrentStep((step) => step + 1)
  }

  const handleBack = () => {
    setCurrentStep((step) => step - 1)
  }

  const currentPage = (pageNumber) => {
    if (pageNumber === 0) {
      return (
        <PageOne
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )
    } else if (pageNumber === 1) {
      return (
        <PageTwo
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )
    } else {
      return (
        <PageThree
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )
    }
  }

  return (
    <div className="bigBox">
      <div className="boxOne">
        <Stepper activeStep={currentStep} orientation="vertical">
          {Content.map((contentItem, index) => (
            <Step key={contentItem.description}>
              <StepLabel data-testid="label-element">
                {contentItem.label}
              </StepLabel>
              <StepContent>{contentItem.description}</StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="boxTwo">{currentPage(currentStep)}</div>
    </div>
  )
}

const pageStyles = {}

export default StepComponent
