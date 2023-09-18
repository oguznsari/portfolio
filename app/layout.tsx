import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const thisYear = new Date().getFullYear();
const yearsOfExperience = thisYear - 2018;

export const metadata: Metadata = {
  title: `Oğuzhan SARI`,
  description: `Oğuzhan is a full-stack developer with ${yearsOfExperience} years of experience.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className='bg-[#fbe2e3] relative top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] 
          rounded-full blur-[10rem] 
          sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] 
          rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <div></div>
        {children}
      </body>
    </html>
  )
}
