import React from 'react'


export default class Input extends React.Component{
    render() {
        return (
            <div className="div">
                <span style={{padding:"18px"}}>
                <input type="radio" onChange={this.props.onclick}  name="options" value={this.props.value} />
                </span>
                <span style={{marginLeft:"0.5%"}}>{this.props.value}</span>
            </div>
        )
    }
}