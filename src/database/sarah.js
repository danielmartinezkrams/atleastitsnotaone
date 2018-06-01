let counter = 0;
function createData(item, price) {
    counter += 1;
    return { id: counter, "item": item, "price": price};
}

const menuData = [
    {
        "name": "Suya",
        "location": "2130 Oxford St, Berkeley, CA 94704",
        "menu": [createData("Beef Skewers", 6.85), createData("Chicken Skewers", 6.85), createData("Grilled Veggies Skewers", 6.85), createData("Prawn Skewers", 8.95), createData("Tilapia Fillet", 7.90), createData("Grilled Corn", 2.65) , createData("Roasted Potatoes", 2.65), createData("Steamed Veggies", 2.65), createData("Seasoned Rice",2.65), createData("Grilled Plantains",2.65), createData("Sweet Potato Chips",2.65), createData("Tilapia Special", 10), createData("Mixed Green Salad", 2.65), createData("Entree Salad", 9.40), createData("Wrap", 7.30), createData("Jamaican-Style Patties", 3.70), createData("Ginger Beer", 1.60), createData("Water", 1.60), createData("Coke",1.60), createData("Diet Coke", 1.60), createData("Sunkist", 1.60), createData("Sprite", 1.60)]
    },
    {
        "name": "Sliver",
        "location": "2213 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Pizza of the day", 20), createData("Salad", 5.49), createData("Root Beer", 2.29), createData("Mexican Coke", 2.29), createData("Green Sauce", 0)]
    },
    {
        "name": "Bongo Burger",
        "location": "2154 Center St, Berkeley, CA 94704",
        "menu": [createData("All American Burger", 4.25), createData("Turkey Burger", 4.50), createData("Mushroom Burger", 5.50), createData("Bacon Burger", 5.50), createData("Polish Sausage", 3.95), createData("Hot Dog", 3.25), createData("Soda Large", 1.75), createData("Soda Medium", 1.50), createData("Soda Small", 1.20), createData("Shish Kaba Sandwich", 7.75), createData("Chicken Sandwich", 7.15), createData("Persian Burger Sandwich", 6.50), createData("Half-Persian Burger Sandwich", 3.95)]
    },
    {
        "name": "Saigon Express",
        "location": "2045 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Ham Sandwich", 2.50), createData("Meat Pie Sandwich", 2.50), createData("Grilled Chicken Sandwich", 2.75), createData("Grilled Pork Sandwich", 2.75), createData("Vegetarian Sandwich", 2.50), createData("Tofu Sandwich", 2.75), createData("Imperial Rolls", 3.95), createData("Vietnamese Moon Crepe", 6.45), createData("Clay Pot", 7.45), createData("Bird's Nest Noodles", 7.45), createData("Rare Sliced Beef Pho", 5.95), createData("Well-Done Beef Pho", 5.95), createData("Tofu Pho", 5.95), createData("Stir Fried Noodles", 6.45), createData("Fried Rice", 5.95), createData("Curry Chicken", 6.45), createData("Orange Flavored Chicken", 5.95), createData("Soft Drink", 1.25), createData("Grass Jelly", 1.50), createData("Thai Iced Tea", 2.75), createData("Iced Coffee", 3.00)]
    },
    {
        "name": "Fresco",
        "location": "2177 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Taco (select ingredients below))", 2.50), createData("Burrito (select ingredients below)", 5.50), createData("Quesadilla (select ingredients below)", 6), createData("Plate (select ingredients below)", 8.50), createData("Steak",), createData("Chicken",), createData("Carnitas",), createData("Veggie",), createData("Fish",), createData(" Black Beans",), createData("Pinto Beans",), createData("Salsa",), createData("Cheese",), createData("Guac", .50), createData("Sour Cream",), createData("Tortilla Chips",), createData("Water",)]
    },
    {
        "name": "Arinell's",
        "location": "2109 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Neopolitan (regular)", 3), createData("Sicilian (deep dish)", 3.50), createData("Vegan Slice", 3.25), createData("With toppings (specify in notes)", 0), createData("S Coke", 1.25), createData("L Coke", 1.50), createData("S Diet Coke", 1.25), createData("L Diet Coke",1.50), createData("S Sprite", 1.25), createData("L Sprite", 1.50), createData("S Root Beer", 1.25), createData("L Root Beer", 1.50), createData("S Fruit Punch", 1.25), createData("L Fruit Punch", 1.50), createData("S Lemonade", 1.25), createData("L Lemonade", 1.50)]
    },
    {
        "name": "K's Cafe",
        "location": "2002 Center Street, Berkeley, CA 94704",
        "menu": [createData("Cheese bagel",), createData("Plain bagel",), createData("With butter",), createData("With cream cheese",), createData("With tomato",), createData("With avocado",), createData("20 oz Mocha Frappuccino", 4.15), createData("20 oz Caramel Frappuccino", 4.14), createData("M Chai Latte", 3.50), createData("M Hot Chocolate", 2.75), createData("M Mocha", 3.75), createData("M House Coffee", 1.90), createData("Vitamin Water (specify color in notes)",)]
    },
    {
        "name": "Purple Kow",
        "location": "2164 Center St Berkeley, CA 94704",
        "menu": [createData("Roast Oolong Milk Tea (specify black or green in notes for ALL milk teas)", 4.89), createData("Honey Milk Tea", 4.89), createData("Hazelnut Milk Tea", 4.89), createData("Almond Milk Tea", 4.89), createData("Chocolate Milk Tea", 4.89), createData("Matcha Milk Green Tea", 4.89), createData("Purple Kow Tea Crema",4.99), createData("Lychee Black Tea Crema", 4.99), createData("Matcha Crema", 4.99), createData("Peach Oolong Crema", 4.99), createData("Passionfruit QQ (QQ = boba & lychee jelly)", 4.99), createData("Peach QQ", 4.99), createData("Salt & Pepper Chicken Nuggets", 5.25), createData("Fried Cheese Sticks", 5.99)]
    },
    {
        "name": "Ike's Sandwiches",
        "location": "",
        "menu": [createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",)]
    },
    {
        "name": "Toss",
        "location": "",
        "menu": [createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",)]
    },
    {
        "name": "Cancun",
        "location": "",
        "menu": [createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",)]
    }
];

export default menuData;