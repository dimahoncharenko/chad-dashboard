import { Logo } from '@/shared/ui/logo'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='page-wrapper container self-center md:max-w-[540px] xl:max-w-[480px]'>
      <Logo />
      {children}
    </div>
  )
}
