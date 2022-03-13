import React, { useEffect, useState } from "react"
import QuoteImg from "../assets/images/quote.svg"
import QuoteImg1 from "../assets/images/quotes1.svg"
import QuoteImg2 from "../assets/images/quotes2.svg"
import QuoteImg3 from "../assets/images/quotes3.svg"
import { IoReload } from "react-icons/io5"
import axios from "axios"

export default function Quotes() {
  const [quote, setQuote] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const [loadingQuote, setLoadingQuote] = useState("")
  const [quoteCopied, setQuoteCopied] = useState(false)

  var items = [QuoteImg1, QuoteImg2, QuoteImg3];
var item = items[Math.floor(Math.random() * items.length)];

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true)
      setErrorMessage("")
      setQuoteCopied(false)
      const quoteObject = await axios.get("https://api.quotable.io/random")
      setQuote(quoteObject.data)
      setLoadingQuote(false)
    } catch (error) {
      setErrorMessage(error.message)
      setLoadingQuote(false)
    }
  }

  return (
    <div className='w-72 h-full shadow-md bg-[#F6F6F6] px-1 absolute right-0 top-[103px]'>
      <div className='relative'>
        <img src={item} alt='img' className='py-8' />
        <div className='px-2 grid place-items-center '>
          <p className='italic text-xl text-center'>"{quote.content}"</p>
          <p className='text-right text-xl'>- {quote.author}</p>
          <div
            className='cursor-pointer pl-4'
            onClick={fetchRandomQuote}
          >
            <div className='pt-4'>
              {" "}
              <IoReload className='w-6 h-6 font-bold' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
