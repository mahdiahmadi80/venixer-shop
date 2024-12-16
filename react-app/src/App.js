import React from 'react'
import './index.css';
import Menu from './components/Menu'
import Info from './components/Info'
import Product from './components/Product'
import Productlst from './components/Productlst.jsx'
import Panel from './components/Panel.jsx'
export default function App() {
    return (
        <div>
            <Menu />
            <Info/>
            <Product/>
            <Productlst/>
            <Panel/>

        </div>

    )
}
