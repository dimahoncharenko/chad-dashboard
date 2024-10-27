'use client'

import { Step, StepLabel, Stepper } from '@mui/material'

import { cn } from '@/shared/lib/utils/cn-merge'
import { steps } from '../model/data'
import { CustomStepIcon } from './custom-step-icon'

type Props = {
  prevBtn?: React.ReactNode
  nextBtn?: React.ReactNode
  displayStep: number
}

export const BrandVerticalStepper = ({
  displayStep,
  nextBtn,
  prevBtn,
}: Props) => {
  return (
    <div className='flex flex-col'>
      <Stepper
        activeStep={displayStep}
        orientation='vertical'
        className='w-[364px]'
        sx={{
          '& .MuiStepIcon-text': {
            display: 'none',
          },
          '& .MuiStepConnector-line': {
            borderLeftColor: '#5D7FA3',
            marginLeft: '3.5px',
            height: 48,
            borderLeftWidth: 2,
          },
          '& .Mui-completed': {
            paddingRight: 0,
            border: 0,
          },
          '& .Mui-completed > div': {
            flex: 1,
            backgroundColor: '#5383ec',
            borderRadius: '50%',
          },
        }}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            sx={{
              '& .MuiSvgIcon-root circle': {
                display: 'none',
              },
            }}
          >
            <StepLabel
              StepIconComponent={CustomStepIcon}
              classes={{
                root: '!p-0',
                label: cn(
                  'ml-4 !text-base/[24px] !font-medium !-tracking-xs !text-blue-700',
                  displayStep === index && '!text-white',
                ),
                iconContainer: cn(
                  'size-8 rounded-full border-2 border-blue-700',
                  displayStep === index && 'border-blue-500',
                ),
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className='my-12 flex justify-between'>
        {prevBtn}
        {nextBtn}
      </div>
    </div>
  )
}
