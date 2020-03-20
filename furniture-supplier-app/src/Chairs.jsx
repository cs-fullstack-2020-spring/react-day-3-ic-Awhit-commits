import React, { Component } from 'react'

export default class Chairs extends Component {
    constructor(props) {
        super(props)
    
        this.chairList =["Dining","Wing","BarStool","ArmChair"]
    }
    

    render() {
        return (
            <div className="ListChairs">
                <h1>List of Chairs</h1>
                {this.chairList.map(chair =>{
                    return(
                    <p>{chair}</p>)
                })}
            </div>
        )
    }
}
