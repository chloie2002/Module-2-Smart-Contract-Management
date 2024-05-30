// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Book {
    mapping(string => uint256) public itemPrices;
    mapping(address => mapping(string => uint256)) public userItems;

    event ItemPurchased(address indexed buyer, string itemName, uint256 price);

    function setItemPrice(string memory _itemName, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");
        itemPrices[_itemName] = _price;
    }

    function purchaseItem(string memory _itemName) external payable {
        uint256 itemPrice = itemPrices[_itemName];
        require(itemPrice > 0, "Item price is not set");
        require(msg.value >= itemPrice, "Insufficient funds");

        userItems[msg.sender][_itemName]++;
        emit ItemPurchased(msg.sender, _itemName, itemPrice);
    }

    function getUserItemCount(address _user, string memory _itemName) external view returns (uint256) {
        return userItems[_user][_itemName];
    }
}
