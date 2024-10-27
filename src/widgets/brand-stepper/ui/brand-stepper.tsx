'use client'

import React from 'react'
import { MobileStepper, Typography } from '@mui/material'

type Props = {
  prevBtn?: React.ReactNode
  nextBtn?: React.ReactNode
  displayStep: number
  maxSteps: number
}

export const BrandStepper = ({
  nextBtn,
  prevBtn,
  displayStep,
  maxSteps,
}: Props) => {
  return (
    <div className='xl:hidden'>
      <Typography
        variant='caption'
        classes={{
          caption:
            'inline-block !mt-4 !text-xs/[18px] !-tracking-sx text-blue-800',
        }}
      >
        Step {displayStep} of {maxSteps}
      </Typography>
      <MobileStepper
        variant='progress'
        backButton={prevBtn}
        nextButton={nextBtn}
        steps={maxSteps + 1}
        position='static'
        classes={{
          root: 'w-full !px-0 !py-2 relative',
          progress:
            'border !h-2 border-gray-200 rounded !w-full !bg-transparent',
        }}
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#C9D3E0',
            borderRadius: '4px',
          },
        }}
        activeStep={displayStep}
      />
    </div>
  )
}
