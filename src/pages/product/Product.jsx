import styled from "./product.module.css";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { useParams } from "react-router";
import Spinner from "../../components/spinner/Spinner";
import Container from "../../components/container/Container";

function Product() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (params.id) {
      async function fechProduct() {
        setIsLoading(true);
        try {
          const result = await getProduct(params.id);
          setProduct(result);
          setIsLoading(false);
        } catch (error) {
          console.log("Error", error);
          setIsLoading(false);
        }
      }
      fechProduct();
    }
  }, [params.id]);
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        product && (
          <div className={`container-fluid pt-5 pb-5 ${styled['product-section']}`}>
            <Container>
                <div className="row">
                  <div className="col-xl-9 p-0">
                    <div className={styled['card']}>
                    <div className="row">
                      <div className="col-md-6 ps-md-0">
                      <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.title}
                    />
                      </div>
                      <div className="col-md-6 ps-md-0">
                      <h1 className={styled['product-name']}>{product.title}</h1>
                      <div>
                      <span>
                        <img src="https://nonegar2.ir/km/star-yellow.png" />
                      </span>
                      <span>{product["rating"].rate}</span>
                    </div>
                   
                    <div>
                      <span> دسته بندی:</span>
                      <span>{product.category}</span>
                    </div>
                    <div>
                      <span>باقیمانده در انبار:</span>
                      <span>{product["rating"].count}</span>
                    </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                      <div className={styled['description']}>{product.description}</div>
                    </div>
                  </div>
                    </div>
                  </div>
                  <div className="col-xl-3 pe-md-0">
                    <div className={styled['card']}>
                    <div>
                       <span className={styled["old-price"]}> {product.price}</span>
                       <span className={styled["discount-price"]}> {product.discount}</span>
                     </div>
                    <div className={styled["total-price"]}>
                      {calculateDiscountedPrice(
                        product.price,
                        product.discount
                      )}
                    </div>
                    </div>
                  </div>
                </div> 
            </Container>
          </div>
        )
      )}
    </>
  );
}

export default Product;
