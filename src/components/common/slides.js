import React, { useEffect } from 'react'

const Reveal = typeof navigator !== 'undefined' ? require('reveal.js') : null


const Slides = ({ children }) => {
  useEffect(() => {
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: 'convex', // none/fade/slides/convex/concave/zoom

      // More info https://github.com/hakimel/reveal.js#dependencies
      // dependencies: [
      //   { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
      //   { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      //   { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      // //   { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      //   { src: 'plugin/search/search.js', async: true },
      //   { src: 'plugin/zoom-js/zoom.js', async: true },
      //   { src: 'plugin/notes/notes.js', async: true }
      // ]
    })
  }, [])
  return (
    <div className="reveal">
      <div className="slides">
        {children}
      </div>
    </div>
  )
}


export default Slides
