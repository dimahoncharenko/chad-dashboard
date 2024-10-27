import { CheckRounded } from '@mui/icons-material'
import { StepIconProps, styled } from '@mui/material'

const CustomStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  () => ({
    color: '#fff',
    display: 'flex',
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '0px',
  }),
)

export function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <CheckRounded className='!text-sm' /> : <></>}
    </CustomStepIconRoot>
  )
}
