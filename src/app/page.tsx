import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default function Home() {
  return (
    <>
      <div className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-o -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[30.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-accent opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
      <MaxWidthWrapper className="flex flex-col mb-12 lg:mt-20 sm:mt-30 text-center items-center justify-center">
        <h1 className="max-w-5xl text-5xl mt-14 font-bold md:text-6xl lg:text-7xl">
          Check your <span className="text-violet-600">brand name availability</span> in one go.
        </h1>

        <p className="mt-10 max-w-prose md:text-md sm:text-lg font-medium">
          Namecheckr allows you to check domain name and social media handles for your brand.
          Simply enter a name and check for availability <span className="font-bold">right away</span>. No hassle.
        </p>

        <LoginLink href="/dashboard" target="_blank" className={ buttonVariants({
          size: "lg",
          className: "mt-10 hover:-translate-y-2 shadow-lg shadow-accent/50 transition duration-300 ease-in"
        })}>
          Get started <ArrowRight className="ml-2 w-5 h-5" />
        </LoginLink>
      </MaxWidthWrapper>
    </>
  )
}
