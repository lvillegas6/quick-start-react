import React from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Layout from './Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../assets/style/App.scss'

export default (): JSX.Element => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}
