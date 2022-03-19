import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import GetProductById from '../services/productService/GetProductById';


function SingleProduct() {

  const [product, setProduct] = useState([]);
  let { id } = useParams();
  // console.log('id: ', id);
  
  useEffect( async () => {
    setProduct(await GetProductById(id));
  },[]);


  return (
    <>
      <section className="single_product_details_area my-4">
        <div className="produts-details--content mb-50">
            <div className="container">
                <div className="row justify-content-between">

                    <div className="col-12 col-md-6 col-lg-5">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={`data:image/png;base64,${product.image_url}`} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="single_product_desc">
                            <h4 className="title">{product.title}</h4>
                            <h4 className="price">${product.price}</h4>
                            <div className="short_overview">
                              <p>{product.description}</p>
                            </div>
                            <div className="products--meta">
                                <p><span>SKU:</span> <span>{product.sku}</span></p>
                                <p><span>Category:</span> <span>{product.category}</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default SingleProduct