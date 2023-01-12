function configureListeners() {
    let images = getElementById('img')
    // select img elements  


    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
        //iterate over images and add mouseover event listeners      
    }
}



function addOpacity(event) {
    // add appropriate CSS class
    if (!this.classList.contains('dim')) {
        this.classList.add('dim')
    }
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    //remove appropriate CSS class
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            getProductInfo(); {
                price = "$14.99"
                colorName = "Lime Green"
            }
            // set variables for price and color name and invoke a function to update the price     
            break;
        case 'pn2':
            getProductInfo(); {
                price = "$11.14"
                colorName = "Medium Brown"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price    
            break;
        case 'pn3':
            getProductInfo(); {
                price = "$22.99"
                colorName = "Royal Blue"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn4':
            getProductInfo(); {
                price = "$4.99"
                colorName = "Solid Black"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price  
            break;
        case 'pn5':
            getProductInfo(); {
                price = "$8.22"
                colorName = "Solid Cyan"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price       
            break;
        case 'pn6':
            getProductInfo(); {
                price = "$11.99"
                colorName = "Solid Purple"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price        
            break;
        case 'pn7':
            getProductInfo(); {
                price = "$13.42"
                colorName = "Solid Red"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price 
            break;
        case 'pn8':
            getProductInfo(); {
                price = "$21.98"
                colorName = "Solid White"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price   
            break;
        case 'pn9':
            getProductInfo(); {
                price = "$14.99"
                colorName = "Solid Yellow"
                updatePrice(colorName, price)
            }
            // set variables for price and color name and invoke a function to update the price 
            break;
        default:
    }

    function updatePrice(colorName, price) {
        let colorPrice = getElementById(colorPrice)
        colorPrice.textContent = price;
        // select element with corresponding id
        // display price

        let color = getElementById(ColorName)
        color.textContent = colorName;
        // select element with corresponding id
        //display color name
    }

}
