import React, { Component } from 'react';

class pageOne extends Component {
    render(){
        return(
            <div>
            <h1>
                Page One
            </h1>
            <form>
                    Resturaunt:<br>
                    <input type="text" name="Choose Resturaunt"><br>
                        Meal:<br>
                        <input type="text" name="Choose Meal">
                            Drink:<br>
                            <input type="text" name="Choose Drink">
                                Options:<br>
                                <input type="text" name="Additional items. Please specify"/>
                </form>
                <button type="button">Submit Order</button>
            </div>
        )
    }
}

export default pageOne;