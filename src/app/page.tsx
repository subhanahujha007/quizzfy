"use client"
import {Button} from "@/components/ui/button"
export default function Home() {
  const handleclick=()=>{
    window.location.href="/quiz"
  }
  return (<div className="flex flex-col flex-1">
    <main className="flex  flex-1 justify-center">
      <h1 className="text-6xl font-bold">Hello Subhanshu jha</h1>
    </main>
    <footer className="footer py-9 px-6 relative mb-0">
    <Button  onClick={handleclick}>Start</Button>
    </footer>
    </div>
  )
}
