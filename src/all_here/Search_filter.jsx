import React, { useState } from 'react'

const Search_filter = () => {
    const allItems = [
        "Apple", "Banana", "Cherry", "Date", "Elderberry",
        "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
        "Mango", "Orange", "Papaya", "Strawberry", "Watermelon"
    ];
    const[serchtext,SetSerchtext]=useState("");
    const filterItem=allItems.filter(item=>
        item.toLowerCase().includes(serchtext.toLowerCase())
    )
  return (
    <div>
        <input type='text' onChange={(e)=>SetSerchtext(e.target.value)}/>
      {filterItem.length > 0 ? (
                    filterItem.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                padding: "10px",
                                background: "#f0f0f0",
                                margin: "5px 0",
                                borderRadius: "5px"
                            }}
                        >
                            {item}
                        </li>
                    ))
                ) : (
                    <p>No items found</p>
                )}
    </div>
  )
}

export default Search_filter