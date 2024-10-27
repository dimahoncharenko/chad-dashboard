import { Typography } from '@mui/material'

import { cn } from '../lib/utils/cn-merge'

type Props = {
  title: string
  shiftDown?: boolean
}

export const PageHeader = ({ title, shiftDown }: Props) => {
  return (
    <Typography
      variant='h2'
      className={cn(
        '!-tracking-sm pb-2 pt-8 !text-2xl/[28.8px] !font-semibold text-blue-900',
        shiftDown && '!mt-[18.8px]',
      )}
    >
      {title}
    </Typography>
  )
}
