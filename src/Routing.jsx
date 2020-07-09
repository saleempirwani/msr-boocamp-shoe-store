import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Product from './components/Product'
import ProductItem from './components/ProductItem'
import Footer from './components/Footer'

export default function Routing() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/"> <Product /> </Route>
                <Route path="/:id"> <ProductItem /> </Route>
            </Switch>
            <Footer />
        </Router>
    )
}