import React, { useEffect, useState } from 'react'
import "./Home.css"
import QuoteIcon from "../../assets/icons/quote.svg"
import CopyIcon from "../../assets/icons/copy.svg"
import ShareIcon from "../../assets/icons/share.svg"
import GithubIcon from "../../assets/icons/github.svg"
import ReloadIcon from "../../assets/icons/reload.svg"
import axios from "axios"

function Home(props)
{
    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);

    const fetchQuote = async () => {
        try {
            const res = await axios.get("https://api.quotable.io/random");
            console.log(res)
            setQuote(res.data.content);
            setAuthor(res.data.author);
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, []);
    return (
        <div className="home">

            <div className="quoteBox">
                {/* quote icon */}
                <img src={QuoteIcon} alt="icon" className="colon" />
                {/* quote  */}
                <h1 className="quote">
                    {quote}
                </h1>
                {/* autor  */}
                <h2 className="author">- {author}</h2>
                {/* reload  */}
                <div className="reload" onClick={fetchQuote}>
                    <img src={ReloadIcon} alt="reload" />
                </div>
                {/* icons  */}
                <div className="icons">
                    <div className="icons_left">
                        <img src={CopyIcon} alt="copy" onClick={() => navigator.clipboard.writeText(quote)} />
                        <img src={ShareIcon} className="ml" alt="share" />
                    </div>
                    <div className="right">
                        <a href="https://github.com/kanak22/quote-room" target="_blank"> <img src={GithubIcon} alt="github" /> </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Home
