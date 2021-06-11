import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  // console.log('props on IF:', props.itemList.length+1)
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function formSubmit (e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    console.log(newItem)
    onItemFormSubmit(newItem)

  }


  return (
    <form className="NewItem" onSubmit={formSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={e=>setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={e=>setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
