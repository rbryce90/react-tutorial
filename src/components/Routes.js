import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'

export default function Routes() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </div>
    )
}
