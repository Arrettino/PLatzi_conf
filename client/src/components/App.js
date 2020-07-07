import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BadgeEditContainer from '../pages/BadgeEditContainer'
import BadgeNewContainer from '../pages/BadgeNewContainer'
import BadgeViewContainer from '../pages/BadgeViewContainer'
import BadgesContainer from '../pages/BadgesContainer'
import Layout from './Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function App(){
    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}/>    
                        <Route exact path='/badges' component={BadgesContainer}/>
                        <Route exact path='/badges/new' component={BadgeNewContainer}/>
                        <Route exact path='/badge/:BadgeId' component={BadgeViewContainer}/>
                        <Route exact path='/badge/:BadgeId/edit' component={BadgeEditContainer}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App
