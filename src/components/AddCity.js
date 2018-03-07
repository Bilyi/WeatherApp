import React, { Component } from 'react';

class AddCity extends Component {

    render() {
        return(
            <form className="cities-form" onSubmit={this.props.addCityFunc}>
                <input type="text" placeholder="enter city name..." className="cities-add" name="city" required/>
                <button type="submit" className="add-btn">Add city</button>
            </form>
        )
    }
}

export default AddCity;