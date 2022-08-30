// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract MarketPlace {
    struct Product {
        uint256 id;
        string itemName;
        address creator;
        address owner;
        uint256 askingPrice;
        bool isSold;
    }

    mapping(uint256 => Product) public products;
    uint256 public totalProducts;

    event saveProduct(uint256 indexed _produtId);

    constructor() {
        totalProducts = 0;
        addProduct("samsung", 25000);
        addProduct("apple", 50000);
    }

    //add product to blockchain
    function addProduct(string memory _itemName, uint256 _askingPrice) public {
        Product storage product = products[totalProducts];
        product.itemName = _itemName;
        product.creator = msg.sender;
        product.owner = msg.sender;
        product.askingPrice = _askingPrice;
        product.isSold = false;

        products[totalProducts] = Product(
            totalProducts,
            product.itemName,
            product.creator,
            product.owner,
            product.askingPrice,
            product.isSold
        );

        totalProducts++;
    }

    //get single product by its id
    function getProduct(uint256 _productId)
        public
        view
        returns (Product memory)
    {
        return products[_productId];
    }

    //get all product list
    function getProducts() public view returns(Product[] memory) {
        Product[] memory prodList = new Product[](totalProducts);

        for (uint i = 0; i < totalProducts; i++) {
            Product storage product = products[i];
            prodList[i] = product;
        }

        return prodList;
    }

    function sellProduct(uint256 _prodId) public {
        Product storage product = products[_prodId];
        product.owner = msg.sender;
        product.isSold = true;
    }
}
