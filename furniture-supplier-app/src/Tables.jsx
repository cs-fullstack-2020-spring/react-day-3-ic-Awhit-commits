import React, { Component } from 'react'

export default class Tables extends Component {
    constructor(props) {
        super(props)
    
        this.tableList = ["Billards","Air Hockey","Coffee","Dinner"]
    }
    
    render() {
        return (
            <div className = "ListTables">
                <h1>List of Tables</h1>
                {this.tableList.map((tables) =>{
                    return(<p>{tables}</p>)
                })}
            </div>
        )
    }
}
