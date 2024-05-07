import { NextRequest,NextResponse } from "next/server";
import {ChatOpenAI} from "@langchain/openai"
import {HumanMessage} from"@langchain/core/messages"
import {PDFLoader} from "langchain/document_loaders/fs/pdf"
 
export async function POST(req:NextRequest) {
    const body=await req.formData()
    const document=body.get("pdf")
    

}