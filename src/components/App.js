import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeView from '../pages/BadgeView'
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
                        <Route exact path='/badges' component={Badges}/>
                        <Route exact path='/badges/new' component={BadgeNew}/>
                        <Route exact path='/badges/:BadgeId' component={BadgeView}/>
                        <Route exact path='/badges/:BadgeId/edit' component={BadgeEdit}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App
