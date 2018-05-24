import React, { Component } from 'react';
import axios from "axios";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.url = "https://developers.zomato.com/api/v2.1/search?q=";
        this.state = {
            response: ""
        }
    }
    componentDidMount() {
        axios.get(this.url + this.props.match.params.name, {
            params: {
                apikey: "d0e94af676033025fcc57acb863d9526",
                lat: "37.862679",
                lon: "-122.2705152"
            }})
            .then((response) => {
                console.log(response);
                if(response.data.results_found > 0){
                    console.log("hi");
                    this.setState({
                        response: response.data.restaurants[0].restaurant
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
        console.log(this.props.match.params.name);
        console.log(this.state.response);
        let location = null;
        if(this.state.response != ""){
            location = this.state.response.location.address
        }
        return(
            <div>
                <h2> Restaurant: {this.props.match.params.name} </h2>
                <br />
                {location}
            </div>
        )
    }
}

/*
 <br />
 <input type="text" name="Choose Resturaunt" />
 <br />
 Meal:
 <input type="text" name="Choose Meal" />
 Drink:
 <br />
 <input type="text" name="Choose Drink" />
 Options:<br />
 <input type="text" name="Additional items. Please specify"/>
 <button type="button">Submit Order</button>
 */

export default OrderForm;