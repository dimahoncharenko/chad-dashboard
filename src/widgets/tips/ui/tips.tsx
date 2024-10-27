'use client'

import { useEffect, useState } from 'react'
import { Fade, Radio, Zoom } from '@mui/material'

import { cn } from '@/shared/lib/utils/cn-merge'

const tips = [
  {
    id: '1',
    icon: (
      <span className='p-4 pl-0 font-fancy text-[32px]/[32px] font-bold text-blue-400'>
        5X
      </span>
    ),
    tip: 'Acquiring a new customer is 5x more costly than making an unhappy customer happy',
  },
  {
    id: '2',
    icon: (
      <span className='p-4 pl-0 font-fancy text-[32px]/[32px] font-bold text-blue-400'>
        5X
      </span>
    ),
    tip: 'Acquiring a new customer is 5x more costly than making an unhappy customer happy',
  },
  {
    id: '3',
    icon: (
      <span className='p-4 pl-0 font-fancy text-[32px]/[32px] font-bold text-blue-400'>
        5X
      </span>
    ),
    tip: 'Acquiring a new customer is 5x more costly than making an unhappy customer happy',
  },
  {
    id: '4',
    icon: (
      <span className='p-4 pl-0 font-fancy text-[32px]/[32px] font-bold text-blue-400'>
        5X
      </span>
    ),
    tip: 'Acquiring a new customer is 5x more costly than making an unhappy customer happy',
  },
  {
    id: '5',
    icon: (
      <span className='p-4 pl-0 font-fancy text-[32px]/[32px] font-bold text-blue-400'>
        5X
      </span>
    ),
    tip: 'Acquiring a new customer is 5x more costly than making an unhappy customer happy',
  },
]

let intervalId: number
export const Tips = () => {
  const [selectedValue, setSelectedValue] = useState('1')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  useEffect(() => {
    intervalId = window.setInterval(() => {
      setSelectedValue(prev =>
        Number(prev) >= tips.length ? '1' : `${Number(prev) + 1}`,
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className='relative h-[95px] w-[364px] overflow-hidden rounded-lg bg-blue-900'>
        {tips.map(tip => (
          <Fade
            key={`${tip.id}_tip`}
            in={tip.id === selectedValue}
            timeout={700}
          >
            <Zoom in={tip.id === selectedValue} timeout={700}>
              <div className='absolute flex max-w-[364px] items-center p-4 duration-700'>
                {tip.icon}
                <p className='text-sm/[21px] -tracking-xs text-blue-400 transition-opacity'>
                  {tip.tip}
                </p>
              </div>
            </Zoom>
          </Fade>
        ))}
      </div>

      <div className='flex justify-center gap-3 py-4'>
        {tips.map(tip => (
          <Radio
            key={tip.id}
            size='small'
            sx={{
              '& .MuiSvgIcon-root': {
                display: 'none',
              },
            }}
            classes={{
              root: cn(
                '!bg-blue-900',
                selectedValue === tip.id && '!bg-blue-400',
              ),
              sizeSmall: '!size-2 !p-1',
            }}
            TouchRippleProps={{
              hidden: true,
            }}
            {...controlProps(tip.id)}
          />
        ))}
      </div>
    </>
  )
}
