import React, { useState } from 'react'

const Pagination = ({items,itemsParPage}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const indexOfLastIten=currentPage*itemsParPage;
    return (
    <div>Pagination</div>
  )
}

export default Pagination   