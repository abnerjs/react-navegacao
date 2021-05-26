import React from 'react'
import './Content.css'
import { Switch, Route } from 'react-router-dom'
import About from '../../view/examples/About'
import Home from '../../view/examples/Home'
import Param from '../../view/examples/Param'
import NotFound from '../../view/examples/NotFound'

const Content = props => (
    <main className='content'>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>

)

export default Content