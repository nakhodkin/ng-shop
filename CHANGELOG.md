# Task 1

### Created `Cart` component
It is used for presenting products, that user has added to the cart.   
It can be in two states:
- Disabled button with a text `Your cart is empty`
- Clickable button with a number of products, which was added. If user click on the button, dropdown menu appears. User can click on any items in dropdown to remove item from the cart.

### Created `Product` component:
It is used mostly for providing markup for product.
It constructs image url for the product depending on the category of the product.

### Created `ProductList` component
It is used for displaying product in a list.   
It populates `onBuy` callback to the product.

### Created `Cart` service
It provides functionality of adding and removing products from the cart.    
It uses Observables under the hood.  

### Created `Product` service
It provides initial product list construction.

###### Minor
##### Created `Product interface`
##### Created `Product model`
##### Created enum `Category`

###### Chore
##### Added `bootstrap@4.1.3`
##### Added `fortawesome` icons
