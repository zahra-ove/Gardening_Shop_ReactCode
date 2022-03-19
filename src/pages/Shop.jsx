import React, { useState, useEffect } from 'react';
import ProductInfo from '../containers/Product/ProductInfo';
// import GetAllProducts from '../services/productService/GetAllProducts';
import loader from '../assets/img/core-img/leaf.png';
import GetAllProductsPaginated from '../services/productService/GetAllProductsPaginated';
import Pagination from "react-js-pagination";




function Shop() {

  const [products, setProducts] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({"currentPage": 1, "perPage": 6, "total":1});

  useEffect( async () => {
    productPagination();
  },[]);

  const productPagination = async (currentPage = 1) => {
    let {data, paginationInfo} = await GetAllProductsPaginated(currentPage);
    setProducts(data);
    setPaginationInfo(paginationInfo);
  };


  return (
    <>    
      <div className="col-12 col-md-8 col-lg-10 marg">
        <div className="shop-products-area">
            <div className="row">
                {
                  products?.length > 0
                  ?
                    products.map((item) => (<ProductInfo product={item} key={item.id} />))
                  :
                  (
                    <div className="preloader d-flex align-items-center justify-content-center">
                      <div className="preloader-circle"></div>
                      <div className="preloader-img">
                          <img src={loader} alt="" />
                      </div>
                    </div>
                  )
                }

            </div>             
        </div>
      </div>


      <div className="col-12 col-sm-6 col-lg-10 marg">
      <div className="shop-products-area">
        <div className="row">
          <Pagination 
            activePage={paginationInfo.currentPage} 
            itemsCountPerPage={paginationInfo.perPage} 
            totalItemsCount={paginationInfo.total} 
            onChange={(currentPage) => {
                    productPagination(currentPage)
                  }}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText="First Page"
            lastPageText="Last Lage"
            innerClass="marg-tot"
          />
          </div>
        </div>
      </div>
    </>

  )
}

export default Shop