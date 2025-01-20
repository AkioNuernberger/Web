'use client'

import { useNavbar } from '@/components/Navbar'
import { cn } from "@/lib/utils"

export default function ManualAkio() {
  const { isExpanded } = useNavbar();

  return (
    <div className={cn(
      "content-container",
      isExpanded ? "sm:ml-64" : "sm:ml-48",
      "transition-all duration-300 ease-in-out"
    )}>
      <h1 className="text-3xl font-bold mb-6">User Manual for Akio</h1>
      <p className="mb-8 text-lg">Learn more about how I think and operate:</p>
      
      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://pitch.com/embed-link/69ekp9" 
          allow="fullscreen; clipboard-write" 
          allowFullScreen
          width="100%" 
          height="100%" 
          className="border-0"
        />
      </div>
    </div>
  )
}

