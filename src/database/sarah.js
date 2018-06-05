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
        "location": "2164 Center St, Berkeley, CA 94704",
        "menu": [createData("Roast Oolong Milk Tea (specify black or green in notes for ALL milk teas)", 4.89), createData("Honey Milk Tea", 4.89), createData("Hazelnut Milk Tea", 4.89), createData("Almond Milk Tea", 4.89), createData("Chocolate Milk Tea", 4.89), createData("Matcha Milk Green Tea", 4.89), createData("Purple Kow Tea Crema",4.99), createData("Lychee Black Tea Crema", 4.99), createData("Matcha Crema", 4.99), createData("Peach Oolong Crema", 4.99), createData("Passionfruit QQ (QQ = boba & lychee jelly)", 4.99), createData("Peach QQ", 4.99), createData("Salt & Pepper Chicken Nuggets", 5.25), createData("Fried Cheese Sticks", 5.99)]
    },
    {
        "name": "Ike's Sandwiches",
        "location": "2172 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Bruce Wayne (specify bread type in notes; default is dutch crunch)", 9.99), createData("By George!", 8.98), createData("Going Home For Thanksgiving", 9.99), createData("John Wayne", 8.98), createData("Julius Caesar", 8.98), createData("Marilyn Monroe", 8.98), createData("Meatless Mike", 9.99), createData("Michael Jordan", 9.99), createData("Pee Wee", 9.99), createData("",), createData("Pilgrim", 9.99), createData("Shattuck", 9.99), createData("Tony Stark", 9.99), createData("Golden Bear", 8.98)]
    },
    {
        "name": "Toss",
        "location": "2272 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Noodles (add 1 WOK-Toss and 1 Protein)",), createData("White Steamed Rice",), createData("Brown Steamed Rice",), createData("White Fried Rice",), createData("Brown Fried Rice",), createData("WOK-TOSS: Thai (spicy sauce)",), createData("WOK-TOSS: Malay (peanut sauce)",), createData("WOK-TOSS: Chinese (soy sauce)",), createData("WOK-TOSS: Japanese (sweet & sour)",), createData("Tomyum Soup",), createData("Clear Soup",), createData("Laksa Soup",), createData("Green Curry",), createData("Red Curry", ), createData("PROTEIN: Tofu", 9.95), createData("PROTEIN: Chicken", 9.95), createData("PROTEIN: Beef", 9.95), createData("PROTEIN: Pork", 9.95), createData("PROTEIN: King Prawn", 11.95), createData("PROTEIN: Combination", 11.95), createData("Water", ), createData("Thai Iced Tea", ), createData("Edamame", 4), createData("Prawn Chips", 4), createData("Fried Octopus", 6), createData("Veggie Steamed Dumpling", 5), createData("Chicken Salay Stick", 3), createData("BBQ Pork Stick", 3)]
    },
    {
        "name": "Cancun",
        "location": "2134 Allston Way, Berkeley, CA 94704",
        "menu": [createData("Super Burrito (specify ingredients below)", 11.50), createData("Regular Burrito (specify ingredients below)", 10.75), createData("Soft Taco (specify ingredients below)", 5.50), createData("Crispy Taco", 5.95), createData("Quesadilla (specify ingredients below)", 10.95), createData("Nachos (specify ingredients below)", 11.50), createData("Vegetarian Super Burrito (specify ingredients below, no meat)",), createData("Vegetarian Regular Burito (specify ingredients below, no meat)",), createData("Vegetarian Soft Taco (specify ingredients below, no meat)",), createData("Vegetarian Quesadilla",), createData("Vegetarian Nachos (specify ingredients below, no meat)",), createData("Grilled Angus Beef",), createData("Grilled Chicken",), createData("Carnitas",), createData("Chile Verde Chicken",), createData("Pork Loin",), createData("Black Beans",), createData("Pinto Beans",), createData("Cheese",), createData("Tomatoes",), createData("Salsa",), createData("Guac",), createData("Sour Cream",), createData("Rice",), createData("Fish Taco", 6.55), createData("Kids' Burrito (rice, beans, cheese)", 6.25), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",), createData("",)]
    }
];

export default menuData;