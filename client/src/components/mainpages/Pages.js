import React from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./home/Home"
import About from "./about/About"
import Service from "./service/Service"
import Products from "./products/Products"
import Supplier from "./supplier/Supplier"
import Contact from "./contact/Contact"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Cart from "./cart/Cart"
import NotFound from "./utils/not_found/NotFound"



function Pages(){
    return (
       <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/product" exact component={Products} />
            <Route path="/supplier" exact component={Supplier} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="*" exact component={NotFound} />
       </Switch>
    )
}

export default Pages
