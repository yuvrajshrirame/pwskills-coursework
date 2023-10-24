// Question-05: Create an Inventory system in JavaScript to manage products using prototypes. Implement a Product constructor function that defines the properties of a product such as name, category, price, and stock. Develop an Inventory constructor function that initializes an empty inventory array. Extend the Inventory prototype with a method addProduct that adds a valid Product object to the inventory and logs a confirmation message. Additionally, implement a method deleteProduct that removes a product from the inventory by name and logs whether the deletion was successful.

// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.inventoryList = [];
}

// Add a valid Product object to the inventory
Inventory.prototype.addProduct = function (product) {
    if (product instanceof Product) {
        this.inventoryList.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    } else {
        console.log("Invalid product. Please provide a valid Product object.");
    }
};

// Remove a product from the inventory by name
Inventory.prototype.deleteProduct = function (productName) {
    const index = this.inventoryList.findIndex(
        (product) => product.name === productName
    );
    if (index !== -1) {
        const deletedProduct = this.inventoryList.splice(index, 1)[0];
        console.log(`Deleted ${deletedProduct.name} from the inventory.`);
    } else {
        console.log(
        `${productName} not found in the inventory. Deletion unsuccessful.`
        );
    }
};

const inventory = new Inventory();
const product1 = new Product("Laptop", "Electronics", 899, 10);
const product2 = new Product("Book", "Books", 20, 50);

inventory.addProduct(product1);
inventory.addProduct(product2);

inventory.deleteProduct("Laptop");