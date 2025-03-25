class addOption {
    constructor(elementId, value, name, price) {
        this.elementId = elementId;
        this.value = value;
        this.name = name;
        this.price = price;
    }

    selectOption() {
        const selectElement = document.getElementById(this.elementId);
        const optionElement = document.createElement('option');
        optionElement.setAttribute("value", this.value);
        optionElement.textContent = `${this.name} ${this.price > 0 ? `(+$${this.price.toFixed(2)})` : ''}`;
        selectElement.appendChild(optionElement);
    }
}

function populateOption(optionName) {
    optionName.forEach(option => {
        let createOption = new addOption(option[0], option[1], option[2], option[3]);
        createOption.selectOption();
    });
}

let pizza_size = [
    ['pizza-size', 'small', 'Small (10")', 8.99],
    ['pizza-size', 'medium', 'Medium (12")', 10.99],
    ['pizza-size', 'large', 'Large (14")', 12.99],
    ['pizza-size', 'extra-large', 'Extra Large (16")', 14.99]
];
      
// Crust Types
let crust_types = [
    ['crust-type', 'classic', 'Classic Hand Tossed', 0],
    ['crust-type', 'thin', 'Thin Crust', 1.50],
    ['crust-type', 'deep-dish', 'Deep Dish', 2.00],
    ['crust-type', 'stuffed', 'Cheese Stuffed Crust', 3.00],
    ['crust-type', 'gluten-free', 'Gluten-Free Crust', 2.50]
];

// Sauce Types
let sauce_types = [
    ['sauce-type', 'marinara', 'Classic Marinara', 0],
    ['sauce-type', 'alfredo', 'Creamy Alfredo', 1.00],
    ['sauce-type', 'bbq', 'Tangy BBQ', 1.00],
    ['sauce-type', 'garlic-white', 'Garlic White Sauce', 1.50],
    ['sauce-type', 'pesto', 'Fresh Basil Pesto', 2.00]
];

// Cheese Types
let cheese_types = [
    ['cheese-type', 'regular', 'Regular Mozzarella', 0],
    ['cheese-type', 'extra', 'Extra Cheese', 1.50],
    ['cheese-type', 'four-cheese', 'Four Cheese Blend', 2.00],
    ['cheese-type', 'vegan', 'Vegan Cheese', 2.50],
    ['cheese-type', 'light', 'Light Cheese', -0.50]
];

// Toppings (for checkbox grid)
let toppings = [
    // Meats
    ['toppings', 'pepperoni', 'Pepperoni', 1.50],
    ['toppings', 'sausage', 'Italian Sausage', 1.75],
    ['toppings', 'bacon', 'Crispy Bacon', 1.50],
    ['toppings', 'chicken', 'Grilled Chicken', 2.00],
    ['toppings', 'ham', 'Honey Ham', 1.50],
    
    // Vegetables
    ['toppings', 'mushrooms', 'Mushrooms', 1.00],
    ['toppings', 'onions', 'Red Onions', 0.75],
    ['toppings', 'peppers', 'Bell Peppers', 1.00],
    ['toppings', 'olives', 'Black Olives', 1.00],
    ['toppings', 'spinach', 'Fresh Spinach', 0.75],
    
    // Extra
    ['toppings', 'extra-sauce', 'Extra Sauce', 0.50],
    ['toppings', 'extra-cheese', 'Extra Cheese', 1.00]
];

// Function to populate different form elements
function populateFormElements() {
    // Populate select elements
    populateOption(pizza_size);
    populateOption(crust_types);
    populateOption(sauce_types);
    populateOption(cheese_types);
    
    // Function to create toppings checkboxes
    function createToppingsGrid() {
        const toppingsGrid = document.querySelector('.toppings-grid');
        
        toppings.forEach(topping => {
            // Create wrapper div for each topping
            const toppingWrapper = document.createElement('div');
            toppingWrapper.className = 'topping-item';
            
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = topping[1];
            checkbox.name = 'toppings';
            checkbox.value = topping[1];
            
            // Create label
            const label = document.createElement('label');
            label.htmlFor = topping[1];
            label.textContent = `${topping[2]} (+$${topping[3].toFixed(2)})`;
            
            // Append checkbox and label to wrapper
            toppingWrapper.appendChild(checkbox);
            toppingWrapper.appendChild(label);
            
            // Add to grid
            toppingsGrid.appendChild(toppingWrapper);
        });
    }
    
    // Call the toppings grid creation function
    createToppingsGrid();
}

// Function to calculate the total cost of the pizza based on user selections
function calculatePizzaCost() {
    const size = document.getElementById('pizza-size').value;
    const crust = document.getElementById('crust-type').value;
    const sauce = document.getElementById('sauce-type').value;
    const cheese = document.getElementById('cheese-type').value;
    const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked');

    let totalCost = 0;

    const selectedSize = pizza_size.find(item => item[1] === size);
    if (selectedSize) totalCost += selectedSize[3];

    const selectedCrust = crust_types.find(item => item[1] === crust);
    if (selectedCrust) totalCost += selectedCrust[3];

    const selectedSauce = sauce_types.find(item => item[1] === sauce);
    if (selectedSauce) totalCost += selectedSauce[3];

    const selectedCheese = cheese_types.find(item => item[1] === cheese);
    if (selectedCheese) totalCost += selectedCheese[3];

    checkedToppings.forEach(topping => {
        const selectedTopping = toppings.find(item => item[1] === topping.value);
        if (selectedTopping) totalCost += selectedTopping[3];
    });

    return totalCost;
}

function validateForm() {
    const size = document.getElementById('pizza-size').value;
    const crust = document.getElementById('crust-type').value;
    const sauce = document.getElementById('sauce-type').value;
    const cheese = document.getElementById('cheese-type').value;

    // Check if all essential fields are selected
    if (!size || !crust || !sauce || !cheese) {
        alert("Please select all pizza options!");
        return false;
    }

    return true;
}

document.getElementById('student-info').textContent = "Student: Tanzilur Rahman, ID: 200595789";

// Function to update the pizza result display with the calculated cost
function updatePizzaResult() {
    if (validateForm()) {
        const totalCost = calculatePizzaCost();

        const resultSection = document.querySelector('#pizza-result');
        const size = document.getElementById('pizza-size').value;
        const crust = document.getElementById('crust-type').value;
        const sauce = document.getElementById('sauce-type').value;
        const cheese = document.getElementById('cheese-type').value;
        const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked');

        console.log(`Size: ${size}, Crust: ${crust}, Sauce: ${sauce}, Cheese: ${cheese}`);  // Debugging

        const selectedSize = pizza_size.find(item => item[1] === size);
        const selectedCrust = crust_types.find(item => item[1] === crust);
        const selectedSauce = sauce_types.find(item => item[1] === sauce);
        const selectedCheese = cheese_types.find(item => item[1] === cheese);

        const toppingNames = Array.from(checkedToppings).map(topping => {
            const selectedTopping = toppings.find(item => item[1] === topping.value);
            return selectedTopping ? selectedTopping[2] : '';
        }).join(', ');

        // Clear previous result content
        resultSection.innerHTML = '';
        let pizza = new Pizza(  `Size: ${selectedSize ? selectedSize[2] : 'None'}`,
                                `Crust: ${selectedCrust ? selectedCrust[2] : 'None'}`,
                                `Sauce: ${selectedSauce ? selectedSauce[2] : 'None'}`,
                                `Cheese: ${selectedCheese ? selectedCheese[2] : 'None'}`,
                                `Toppings: ${toppingNames || 'None'}`,
                                `Total Cost: $${totalCost.toFixed(2)}`
        );
        pizza.desception();
    }
}
class Pizza {
    size;
    crust;
    sauce;
    Cheese;
    toppings;
    price;
    constructor(size,crust,sauce,Cheese,toppings,price){
        this.size=size;
        this.crust=crust;
        this.sauce=sauce;
        this.Cheese=Cheese;
        this.toppings=toppings;
        this.price=price;
    }
    desception() {
        const resultSection = document.querySelector('#pizza-result');
        
        // Create paragraph elements
        const orderHeader = document.createElement('h3');
        orderHeader.textContent = 'Your Pizza Order:';
        resultSection.appendChild(orderHeader);
    
        const sizePara = document.createElement('p');
        const crustPara = document.createElement('p');
        const saucePara = document.createElement('p');
        const cheesePara = document.createElement('p');
        const toppingsPara = document.createElement('p');
        const costPara = document.createElement('p');
    
        // Set text content for each paragraph
        sizePara.textContent = this.size;
        crustPara.textContent = this.crust;
        saucePara.textContent = this.sauce;
        cheesePara.textContent = this.Cheese;
        toppingsPara.textContent = this.toppings;
        costPara.textContent = this.price;
    
        // Append paragraphs to result section
        resultSection.appendChild(sizePara);
        resultSection.appendChild(crustPara);
        resultSection.appendChild(saucePara);
        resultSection.appendChild(cheesePara);
        resultSection.appendChild(toppingsPara);
        resultSection.appendChild(costPara);
    }
}

// Event listener to handle form submission and display the pizza result
document.getElementById('pizza-order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');  // Debugging line
    updatePizzaResult();
});

populateFormElements();