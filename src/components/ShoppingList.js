import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemList,setItemList] = useState(items)

  function onItemFormSubmit (newItem) {

      const updatedItems = [...itemList,newItem ]
      setItemList(updatedItems)

  }
  console.log(itemList)

  function handleSearchChange (e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemDisplaySearch = itemsToDisplay.filter((item) => {
    if (search === "") return true;

    return item.name.includes(search);
  });

  return (
    <div className="ShoppingList">
      <ItemForm itemName={itemName} 
                setItemName={setItemName} 
                itemCategory={itemCategory} 
                setItemCategory={setItemCategory}
                onItemFormSubmit={onItemFormSubmit}
                // formSubmit={formSubmit}
                />
      <Filter onCategoryChange={handleCategoryChange} 
              selectedCategory={selectedCategory} 
              onSearchChange={handleSearchChange} 
              search={search}
              />
      <ul className="Items">
        {itemDisplaySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
