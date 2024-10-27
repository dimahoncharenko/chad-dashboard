'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import CloseRounded from '@mui/icons-material/CloseRounded'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material'

import { useSessionStore } from '@/entities/session/model/session-store-provider'
import laptop from '@/shared/assets/gifs/laptop.gif'

export const HomePage = () => {
  const { logout, loggedIn, name } = useSessionStore(state => state)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  if (!loggedIn) redirect('/login')

  return (
    <div className='min-h-screen flex-1 bg-white'>
      <div className='container mx-auto'>
        <div className='hidden md:block'>
          <p>Hello Luna Edge, My name is {name}.</p>
          <Button onClick={logout}>Logout</Button>
        </div>

        <div className='flex h-screen flex-col items-center justify-center md:hidden'>
          <Image alt='' src={laptop} width={160} height={160} unoptimized />
          <p className='text-center text-sm text-blue-800'>
            This application is not available for use on mobile screens. Please
            access it on a tablet or desktop device.
          </p>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        classes={{
          paper: '!rounded-lg !py-6 !px-4 !max-w-[434px]',
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          className='!absolute !right-3 !top-3 !text-blue-900'
        >
          <CloseRounded />
        </IconButton>
        <DialogTitle
          id='responsive-dialog-title'
          classes={{
            root: '!font-fancy !mb-6 !font-bold !text-2xl/[18px] !text-blue-900 !-tracking-xs',
          }}
        >
          {'You’re ready to go! 🚀'}
        </DialogTitle>
        <DialogContent className='!flex !flex-col !gap-4'>
          <DialogContentText className='!text-base/[24px] !-tracking-xs !text-blue-800'>
            A fully loaded self-service portal is now ready to deploy on your
            Shopify store.
          </DialogContentText>
          <DialogContentText className='!text-base/[24px] !-tracking-xs !text-blue-800'>
            {`We’ve programmed it to follow industry best practices
            for shipping, return & exchange, and payment policy.`}
          </DialogContentText>
          <DialogContentText className='!text-base/[24px] !-tracking-xs !text-blue-800'>
            You can customize these settings to fit your store policy anytime.
          </DialogContentText>
          <DialogContentText className='!text-base/[24px] !-tracking-xs !text-blue-800'>
            Lastly,{' '}
            <span className='font-semibold'>
              nothing is live until you hit “Go Live”!
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BrandButton className='!mt-0' onClick={handleClose}>
            Start customizing
          </BrandButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
