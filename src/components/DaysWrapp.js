import React, { Component } from 'react';
import Days from './Days';

class DaysWrapp extends Component {

    render() {
        return(
            <ul className="days">
                {
                    this.props.receivedDays.map((day) => {
                        return (
                            <Days
                                class={day === this.props.activeDay ? 'active' : null}
                                key={day}
                                day={day}
                                selectDay={this.props.selectDay.bind(null, day)}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

export default DaysWrapp;