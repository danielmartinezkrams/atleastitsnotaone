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
        "menu": [createData("Taco (select one PROTEIN, and BEANS below, can add multiple condiments))", 2.50), createData("Burrito (select one PROTEIN, and BEANS below, can add multiple condiments)", 5.50), createData("Quesadilla (select one PROTEIN, and BEANS below, can add multiple condiments)", 6), createData("Plate (select one PROTEIN, and BEANS below, can add multiple condiments)", 8.50), createData("PROTEIN: Steak",), createData("PROTEIN: Chicken",), createData("PROTEIN: Carnitas",), createData("PROTEIN: Veggie",), createData("PROTEIN: Fish",), createData("BEANS: Black Beans",), createData("BEANS: Pinto Beans",), createData("CONDIMENTS: Salsa",), createData("CONDIMENTS: Cheese",), createData("CONDIMENTS: Rice"), createData("CONDIMENTS: Guacamole", .50), createData("CONDIMENTS: Sour Cream",), createData("Tortilla Chips w/ Salsa or Guac (specify in notes)", 2), createData("Water",)]
    },
    {
        "name": "Arinell's",
        "location": "2109 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Neopolitan (regular)", 3), createData("Sicilian (deep dish)", 3.50), createData("Vegan Slice", 3.25), createData("With toppings (specify in notes)", 0), createData("S Coke", 1.25), createData("L Coke", 1.50), createData("S Diet Coke", 1.25), createData("L Diet Coke",1.50), createData("S Sprite", 1.25), createData("L Sprite", 1.50), createData("S Root Beer", 1.25), createData("L Root Beer", 1.50), createData("S Fruit Punch", 1.25), createData("L Fruit Punch", 1.50), createData("S Lemonade", 1.25), createData("L Lemonade", 1.50)]
    },
    {
        "name": "K's Cafe",
        "location": "2002 Center Street, Berkeley, CA 94704",
        "menu": [createData("Cheese bagel", 2.25), createData("With butter", .50), createData("With cream cheese", .75), createData("With tomato", 1.25), createData("With avocado", 1.40), createData("20 oz Mocha Frappuccino", 4.15), createData("20 oz Caramel Frappuccino", 4.14), createData("M Chai Latte", 3.50), createData("M Hot Chocolate", 2.75), createData("M Mocha", 3.75), createData("M House Coffee", 1.90), createData("M Thai Iced Tea", 3.50), createData("M Iced Latte", 3.85), createData("M Iced Mocha", 4.15), createData("M Iced Tea", 2.25)]
    },
    {
        "name": "Purple Kow",
        "location": "2164 Center St, Berkeley, CA 94704",
        "menu": [createData("Roast Oolong Milk Tea (specify black or green in notes for ALL milk teas)", 4.89), createData("Honey Milk Tea", 4.89), createData("Hazelnut Milk Tea", 4.89), createData("Almond Milk Tea", 4.89), createData("Chocolate Milk Tea", 4.89), createData("Matcha Milk Green Tea", 4.89), createData("Purple Kow Tea Crema",4.99), createData("Lychee Black Tea Crema", 4.99), createData("Matcha Crema", 4.99), createData("Peach Oolong Crema", 4.99), createData("Passionfruit QQ (QQ = boba & lychee jelly)", 4.99), createData("Peach QQ", 4.99), createData("Salt & Pepper Chicken Nuggets", 5.25), createData("Fried Cheese Sticks", 5.99)]
    },
    {
        "name": "Ike's Sandwiches",
        "location": "2172 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Bruce Wayne (specify bread type in notes; default is dutch crunch)", 9.99), createData("By George!", 8.98), createData("Going Home For Thanksgiving", 9.99), createData("John Wayne", 8.98), createData("Julius Caesar", 8.98), createData("Marilyn Monroe", 8.98), createData("Meatless Mike", 9.99), createData("Michael Jordan", 9.99), createData("Pee Wee", 9.99), createData("Pilgrim", 9.99), createData("Shattuck", 9.99), createData("Tony Stark", 9.99), createData("Golden Bear", 8.98)]
    },
    {
        "name": "Toss Noodle Bar",
        "location": "2272 Shattuck Ave, Berkeley, CA 94704",
        "menu": [createData("Noodles (must add 1 WOK-Toss and 1 Protein)",), createData("White Steamed Rice (must add 1 WOK-Toss and 1 Protein)",), createData("Brown Steamed Rice (must add 1 WOK-Toss and 1 Protein)",), createData("White Fried Rice (must add 1 WOK-Toss and 1 Protein)",), createData("Brown Fried Rice (must add 1 WOK-Toss and 1 Protein)",), createData("WOK-TOSS: Thai (spicy sauce)",), createData("WOK-TOSS: Malay (peanut sauce)",), createData("WOK-TOSS: Chinese (soy sauce)",), createData("WOK-TOSS: Japanese (sweet & sour)",), createData("PROTEIN: Tofu", 9.95), createData("PROTEIN: Chicken", 9.95), createData("PROTEIN: Beef", 9.95), createData("PROTEIN: Pork", 9.95), createData("PROTEIN: King Prawn", 11.95), createData("PROTEIN: Combination", 11.95), createData("Thai Iced Tea", 2), createData("Edamame", 4), createData("Prawn Chips", 4), createData("Fried Octopus", 6), createData("Veggie Steamed Dumpling", 5), createData("Chicken Salay Stick", 3), createData("BBQ Pork Stick", 3)]
    },
    {
        "name": "Cancun",
        "location": "2134 Allston Way, Berkeley, CA 94704",
        "menu": [createData("Super Burrito (specify ingredients below)", 11.50), createData("Regular Burrito (specify ingredients below)", 10.75), createData("Soft Taco (specify ingredients below)", 5.50), createData("Crispy Taco", 5.95), createData("Quesadilla (specify ingredients below)", 10.95), createData("Nachos (specify ingredients below)", 11.50), createData("Vegetarian Super Burrito (specify ingredients below, no meat)", 11.95), createData("Grilled Vegetable Burito", 12.50), createData("Vegetarian Soft Taco (specify ingredients below, no meat)", 6.50), createData("Vegetarian Quesadilla", 11.95), createData("Vegetarian Nachos (specify ingredients below, no meat)", 11.95), createData("Grilled Angus Beef",), createData("Grilled Chicken",), createData("Carnitas",), createData("Chile Verde Chicken",), createData("Pork Loin",), createData("Black Beans",), createData("Pinto Beans",), createData("Cheese",), createData("Tomatoes",), createData("Salsa",), createData("Guac",), createData("Sour Cream",), createData("Rice",), createData("Fish Taco", 6.55), createData("Kids' Burrito (rice, beans, cheese)", 6.25)]
    },
    {
        "name": "Sandwich Zone",
        "location": "2117 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Build sandwich (select BREAD, EXTRAS, CHEESE, MEAT, and CONDIMENTS below)", 3.99), createData("BREAD: Sweet roll",), createData("BREAD: Sour roll",), createData("BREAD: Dutch crunch",), createData("BREAD: Wheat",), createData("BREAD: White",), createData("BREAD: Multigrain",), createData("BREAD: Rye",), createData("BREAD: Croissant", 0.50), createData("EXTRAS: Avocado", 0.75), createData("EXTRAS: Bacon", 1), createData("EXTRAS: Cranberries", 0.50), createData("EXTRAS: Pesto", 0.75), createData("EXTRA: Sprouts", 0.50), createData("CHEESE: American",), createData("CHEESE: Swiss",), createData("CHEESE: Cheddar",), createData("CHEESE: Pepper Jack",), createData("CHEESE: Mozzerella",), createData("CHEESE: Jack",), createData("MEAT: Turkey",), createData("MEAT: Tuna",), createData("MEAT: Salami",), createData("MEAT: Veggie",), createData("MEAT: Roast beef",), createData("CONDIMENTS: Mayo",), createData("CONDIMENTS: Tomato",), createData("CONDIMENTS: Onion",), createData("CONDIMENTS: Pickles",), createData("CONDIMENTS: Lettuce",), createData("House Coffee", 1.75), createData("Cafe Au Lait", 1.95), createData("Cafe Mocha", 2.96), createData("Chai Latte", 2.75), createData("Hot Chocolate", 2.45), createData("Caramel Macchiato", 3.69), createData("Fountain Soda (specify in notes)", 1.59), createData("Iced Coffee", 2.75), createData("Green Tea Latte", 2.95), createData("Italian Soda (specify in notes)", 2.99), ]
    },
    {
        "name": "Guacamole 61",
        "location": "2142 Center St, Berkeley, CA 94704",
        "menu":[createData("Crispy Taco Plato", 11.50), createData("Mexican Salad", 10.25), createData("Tortas", 10.50), createData("Quesadillas", 10.50), createData("Super 61 Quesadilla", 11.25), createData("1 Street Style Taco", 2.25), createData("5 Street Style Tacos", 10), createData("Mexican Flag Burrito", 12.50), createData("Guacamole and chips", 3.25), createData("Burrito (select 1 PROTEIN, 1 BEANS, and multiple CONDIMENTS)",), createData("BEANS: Black Beans",), createData("BEANS: Pinto Beans",), createData("CONDIMENTS: Rice",), createData("CONDIMENTS: Cheese",), createData("CONDIMENTS: Sour Cream",), createData("CONDIMENTS: Guacamole",), createData("PROTEIN: Chicken", 7.50),  createData("PROTEIN: Carnitas", 8.50), createData("PROTEIN: Beef",8.50), createData("PROTEIN: Veggie", 8.50), createData("Beef Nachos", 10.75), createData("Cheese Nachos", 9), createData("Chicken Nachos", 9.25), createData("Carnitas Nachos", 10.75)]
    },
    {
        "name": "Little Plearn",
        "location": "2283 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Pad Thai", 8.95), createData("Prawn Pad Thai", 11.00), createData("Pad Kee Mao", 8.95), createData("Pad See Ew", 8.95), createData("Chicken Noodle Soup", 8.95), createData("Beef Noodle Soup", 8.95), createData("Spicy Noodle Soup", 10.95), createData("Chicken over Rice", 7.95), createData("Woon Sen Pad Thai", 8.50), createData("SIAM Noodles", 8.50), createData("Thai Sin Mee", 8.50), createData("Red Curry", 8.50), createData("Green Curry", 8.50), createData("Rad Na", 8.50), createData("Thai Iced Tea", 2.50), createData("Soda (specify in notes)", 1.25)]
    },
    {
        "name": "El Burro Picante",
        "location": "2021 University Ave, Berkeley, CA 94704",
        "menu":[createData("Truck Style Taco (specify meat in notes)", 2.20), createData("Super Burrito (specify meat in notes)", 9.25), createData("Regular Burrito (specify meat in notes)", 7.25), createData("Super Nachos (specify meat in notes)", 8.95), createData("Donkey Burrito (specify meat in notes)", 12.95), createData("Super Taco (specify meat in notes)", 3.95), createData("Cheese Please Quesadilla", 4.95), createData("Rice Bowl (specify meat in notes)", 6), createData("Cali Burrito (specify meat in notes)", 8.95), createData("Churro", 1.50), createData("Churros Na Na", 3.95), createData("Chocolate Burrito", 5.95), createData("Bottled Coke", 2.25), createData("S Horchata", 1.95), createData("L Horchata", 2.25), createData("Jarritos (specify flavor in notes)", 1.95), createData("Bottled Water", 1.50)]
    },
    {
        "name": "eXtreme Pizza",
        "location": "2352 Shattuck Ave, Berkeley, CA 94704",
        "menu":[createData("Classic Cheese Pizza", 7.20), createData("Yard Sale Pizza", 8.95), createData("Caesar Salad Entree", 9.25), createData("Greek Salad Entree", 9.25), createData("Bunny Slope Pizza", 8.95), createData("Screamin' Tomato Pizza", 8.95), createData("Mr. Pestato Head Pizza", 8.95), createData("White Out Pizza", 8.95), createData("Everest Pizza", 8.95), createData("Paia Pie", 8.95), createData("Big Chewy Cookie", 2.25), createData("Bottled Water", 1.95), createData("Red Gatorade", 2.75), createData("Blue Gatorade", 2.50), createData("Lemon Lipton Pure Leaf Tea", 2.70)]
    }
];

export default menuData;