import React, { Component } from 'react'
import Chairs from './Chairs'
import Tables from './Tables'

export default class Furniture extends Component {

    
    render() {
        return (
            <div className ="container">
                <h1>List of Tables and Chairs In Stock</h1>
                <Chairs/>
                <Tables/>
            </div>
        )
    }
}
