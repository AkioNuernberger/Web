import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="flex min-h-screen items-center justify-center">
        <div className="max-w-3xl w-full space-y-8 text-center bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome!
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Intro text TBD
          </p>
          <div className="mt-5 sm:mt-8">
            <Button>Learn More About Me</Button>
          </div>
        </div>
      </main>
    </>
  )
}

