import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/react'
import { LayoutComponent } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutComponent title='Lista de criptomonedas'>
      <Button color='primary'>Click me</Button>
    </LayoutComponent>
  )
}
