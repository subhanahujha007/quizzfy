"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const UploadDoc = () => {
    const [document ,setdocument]=useState<File | null | Blob | undefined>(null)
    const [loading,setloading]=useState<Boolean>(false)

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(document)
        setloading(true)
    }

    return (
        <div className="w-full">
            <form className="w-full" onSubmit={handleSubmit}>
                <label htmlFor="Document" className="bg-secondary w-full flex h-20 rounded-md border-4 border-dashed border-blue-900 relative ">
                    <div className="absolute m-auto insert-0 flex justify-center items-center">{document ? (document instanceof File ? document.name : "Drag a File") : "Drag a File"}</div> 
                    <input type="file" id="document" className="relative block w-full h-full z-50 opacity-0 " onChange={(e)=>setdocument(e?.target?.files?.[0])} />
                </label>
                <button style={{backgroundColor:"blue",padding:"1rem",borderRadius:"20px"}} type="submit" className="mt-10">Generate Quiz!!</button>
            </form>
        </div>
    )
}

export default UploadDoc
