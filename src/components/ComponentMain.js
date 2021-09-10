import React from 'react'
import { ComponentContact } from './ComponentContact'
import { ComponentFooter } from './ComponentFooter'
import { ComponentHeader } from './ComponentHeader'
import { ComponentInformacion } from './ComponentInformacion'
import { ComponentService } from './ComponentService'
import {Route, BrowserRouter as Router,Switch} from "react-router-dom"
import { ComponenteHabilidades } from './ComponenteHabilidades'

export const ComponentMain = () => {
    return (
        <Router>
            <ComponentHeader/>
            <Switch>
                <Route path="/" exact component={ComponentInformacion}></Route>
                <Route path="/contacto" exact component={ComponentContact}></Route>
                <Route path="/service" exact component={ComponentService}></Route>
                <Route path="/Conocimientos" exact component={ComponenteHabilidades}></Route>
            </Switch>
          
            <ComponentFooter></ComponentFooter>
        </Router>
    )
}
