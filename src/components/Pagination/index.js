import React from 'react'
import Pagination from "react-js-pagination";


function index({activePage, perPage, total, changeCurrentPage}) {
  return (
    <>
    <Pagination
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={total}
        // pageRangeDisplayed={5}
        onChange={changeCurrentPage}
    />
    </>
  )
}

export default index