import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='mx-auto max-w-[326px] md:container md:max-w-[540px]'>
      {children}
    </div>
  )
}
