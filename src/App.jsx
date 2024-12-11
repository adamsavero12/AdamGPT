// import { useState } from "react"
import "./App.css"
import {requestToGroqAI} from "./utils/groq"
import {useState} from "react"
import {Light as SyntaxHighlight} from "react-syntax-highlighter"
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function App () {
  const [data, setData] = useState("")

  const handleSubmit = async () => {
    const ai = await requestToGroqAI(content.value);
    setData(ai)
  }
  return (
    <>
    <main className=" flex flex-col mt-16 mx-auto justify-center items-center w-full max-w-2xl">
      <h1 className="text-5xl text-slate-200 mb-6 font-bold">AdamGPT</h1>
      <div className="w-full mt-12 mb-10 ">
      {data ? (
        <SyntaxHighlight 
      language="swift" 
      style={atomDark} 
      wrapLongLines={true}>
        {data}
      </SyntaxHighlight>
      ) : <h1 className="text-xl flex justify-center text-slate-200 mt-10">What can I help with?</h1> }
      
      </div>
      <form className="flex flex-col justify-center py-4 w-full mb-20">
        <input
          placeholder="Message Me"
          id="content"
          className="flex flex-col bg-slate-200 py-3 rounded-md"
          type="text"/>
        <button 
          type="button"
          onClick={handleSubmit}
          className="flex py-3 rounded-md bg-zinc-900 text-white font-semibold mt-4 justify-center">
            SUBMIT
        </button>
      </form>
      <h2 className="text-slate-200 pb-2">© AdamGPT. All rights reserved.</h2>
    </main>
    
    
    </>
  )
}