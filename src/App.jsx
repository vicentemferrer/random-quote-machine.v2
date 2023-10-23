import { useEffect, useState } from 'react'
import { getQuote, setColor, tweetAnchor } from './helpers.js'
import './App.css'

function App() {
  const [signal, setSignal] = useState(true)
  const [content, setContent] = useState({
    quote: '',
    author: ''
  })

  const { quote, author } = content

  useEffect(() => {
    getQuote().then(({ content, name }) => {
      setContent({ quote: content, author: name })
    })
  }, [signal])

  useEffect(() => {
    setColor()
    tweetAnchor(content)
  }, [content])

  return (
    <>
      <div className="container-fluid text-center" id="quote-box">
        <h2 className="quote color-text" id="text">
          <i className="fa-solid fa-quote-left"></i>
          <span> {quote}</span>
        </h2>
        <h4 className="quote color-text" id="author">{author}</h4>
        <div className="row">
          <button className="btn btn-primary col-lg-2 color-bg" onClick={() => setSignal(!signal)} id="new-quote"><i className="fa-solid fa-circle-plus"></i> New</button>
          <a href="" target="_blank" className="btn btn-secondary col-lg-2 color-bg" id="tweet-quote"><i className="fa-brands fa-twitter"></i> Tweet</a>
        </div>
      </div>
      <p id="developed-by">by Vicente Ferrer</p>
    </>
  )
}

export default App
