import React, { Component } from 'react';

class Days extends Component {

    render() {
        return(
            <li className={this.props.class} onClick={this.props.selectDay}>
                <h4>{this.props.day}</h4>
            </li>
        )
    }
}

export default Days;