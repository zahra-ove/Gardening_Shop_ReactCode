import React from 'react';
import { Link } from 'react-router-dom';

function ProductInfo({product}) {
  return (
    <>
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-product-area mb-50">
                <Link to={`product/${product.id}`}>
                    <div className="product-img">
                        <img src={`data:image/png;base64,${product.image_url}`} alt="" />
                    </div>
                    <div className="product-info mt-15 text-center">
                        <p>{product.title}</p>
                        <h6>{product.price}</h6>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ProductInfo