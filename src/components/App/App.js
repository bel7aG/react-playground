import React from 'react'
import { Navigation } from '../'

const pages = [
  {title: `Hello World`, url: `/HelloWorld`}
]

const App = () => (
  <div className="container">
    <Navigation pages={pages}/>
  </div>
)

export default App
