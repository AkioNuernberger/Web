export default function ManualAkio() {
  return (
    <div className="content-container max-w-4xl mx-auto py-8 px-4">
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

