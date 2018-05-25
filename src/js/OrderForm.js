import React, { Component } from 'react';
import axios from "axios";

const data = [
    {
        "name": "Suya",
        "location": "",
        "menu": ["Beef Skewers", "Chicken Skewers", "Grilled Veggies Skewers", "Prawn Skewers", "Tilapia Fillet", "Grilled Corn", "Roasted Potatoes", "Steamed Veggies", "Seasoned Rice", "Grilled Plantains", "Sweet Potato Chips", "Mixed Green Salad", "Entree Salad", "Wrap", "Tilapia Special", "Jamaican-Style Patties", "Ginger Beer", "Water", "Ting", "Coke", "Diet Coke", "Sunkist", "Sprite"]
    },
    {
        "name": "Sliver",
        "location": "",
        "menu":["Pizza of the day", "Salad"]
    },
    {
        "name": "Bongo Burger",
        "location": "",
        "menu":["All American Burger", "Turkey Burger", "Mushroom Burger", "Bacon Burger", "Polish Sausage", "Hot Dog", "Soda", "Shish Kabab Sandwich", "Chicken Sandwich", "Persian Burger Sandwich", "Half-Persian Burger Sandwich", "Steak Sandwich", "Full/Half Falafel", "Bongo Salad", "Homefries"]
    },
    {
        "name": "Saigon Express",
        "location": "",
        "menu":[ "Ham/Meat Pie/Grilled Chicken/Grilled Pork/Veggie Sandwich/Tofu/Fishcake", "Beef/Chicken Pho"]
    },
    {
        "name": "Fresco",
        "location": "",
        "menu":[ "Taco/Burrito/Quesadilla/Plate: Steak, Chicken, Carnitas, Veggie, Fish, Beans, Salsa, Cheese, Guac", "Tortilla Chips", "Water", "Soda"]},
    {
        "name": "Arinell's",
        "location": "",
        "menu":[ "Neopolitan (regular)", "Sicilian (deep dish)", "Vegan Slice", "Various toppings", "S/L: Coke, Diet Coke, Sprite, Root Beer, Fruit Punch, Lemonade"]
    }
];

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.url = "https://developers.zomato.com/api/v2.1/search?q=";
        this.state = {
            response: "",
            menu: ""
        }
    }
    componentDidMount() {
        for(let i = 0; i < data.length; i++){
            if(data[i].name === this.props.match.params.name){
                this.setState({menu: data[i].menu})
            }
        }

        axios.get(this.url + this.props.match.params.name, {
            params: {
                apikey: "d0e94af676033025fcc57acb863d9526",
                lat: "37.862679",
                lon: "-122.2705152"
            }})
            .then((response) => {
                console.log(response);
                if(response.data.results_found > 0){
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
        let location = null;
        if(this.state.response !== ""){
            location = this.state.response.location.address
        }
        let menu = null;
        if(this.state.menu !== ""){
            menu = this.state.menu
        }
        return(
            <div>
                <h2> Restaurant: {this.props.match.params.name} </h2>
                <br />
                {location}
                {menu}
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