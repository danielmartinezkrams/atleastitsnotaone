/**
 * Created by DanielMartinez-Krams on 5/25/18.
 */
let counter = 0;
function createData(item, price) {
    counter += 1;
    return { id: counter, "item": item, "price": price};
}

const menuData = [
    {
        "name": "Suya",
        "location": "",
        "menu": [{"id": 0, "item": "Beef Skewers", "price": 0}, {"id": 1, "item": "Chicken Skewers", "price": 0}, {"id": 2, "item": "Grilled Veggies Skewers", "price": 0}, {"id": 3, "item": "Prawn Skewers", "price": 0}, {"id": 4, "item": "Tilapia Fillet", "price": 0}, {"id": 5, "item": "Grilled Corn", "price": 0} , {"id": 6, "item": "Roasted Potatoes", "price": 0}, {"id": 7, "item": "Steamed Veggies", "price": 0}, {"id": 8, "item": "Seasoned Rice", "price": 0}, {"id": 9, "item": "Grilled Plantains", "price": 0}, {"id": 10, "item": "Sweet Potato Chips", "price": 0}, {"id": 11, "item": "Mixed Green Salad", "price": 0}, {"id": 12, "item": "Entree Salad", "price": 0}, {"id": 13, "item": "Wrap", "price": 0}, {"id": 14, "item": "Tilapia Special", "price": 0}, {"id": 15, "item": "Jamaican-Style Patties", "price": 0}, {"id": 16, "item": "Ginger Beer", "price": 0}, {"id": 17, "item": "Water", "price": 0}, {"id": 18, "item": "Ting", "price": 0}, {"id": 19, "item": "Coke", "price": 0}, {"id": 20, "item": "Diet Coke", "price": 0}, {"id": 21, "item": "Sunkist", "price": 0}, {"id": 22, "item": "Sprite", "price": 0}]
    },
    {
        "name": "Sliver",
        "location": "",
        "menu":[createData("Pizza of the day", 22), createData("Salad", 5)]
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

export default menuData;