import { Typography } from '@mui/material'

type Props = {
  description: string
}

export const PageDescription = ({ description }: Props) => {
  return (
    <Typography
      variant='caption'
      classes={{
        caption: '!text-sm/[21px] !-tracking-xs !text-blue-800',
      }}
    >
      {description}
    </Typography>
  )
}
