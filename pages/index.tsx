import { Inter } from 'next/font/google'
import {Button} from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Button color='primary'>Click me</Button>
  </div>
  )
}
