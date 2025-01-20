import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/AnimatedBackground"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="sm:ml-[240px] flex min-h-screen items-center justify-center p-4">
        <div className="max-w-3xl w-full space-y-8 text-center bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-lg mt-16 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Welcome
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            <span className="block mb-4">I&apos;m Akio. Operator and entrepreneur, currently based in SF.</span>
            <span className="block">I believe that transparency makes collaboration easier and created this page to share more about my principles and thoughts.</span>
          </p>
          <div className="mt-5 sm:mt-8">
            <Link href="/pages/user-manual-akio">
              <Button>Click here to unpack the user manual for Akio</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

