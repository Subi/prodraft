import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Home from '@/components/home/Home'
const inter = Inter({ subsets: ['latin'] })


export default function LandingPage() {
  return (
    <Home />
  )
}