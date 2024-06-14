import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const nweImg = <img src="../images/icon_02.gif" alt="신상품" />;
  const delivery = <img src="../images/icon_09.gif" alt="배송" />;
  const sale = <img src="../images/icon_11.gif" alt="세일" />;

  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <>
      <div onClick={showDetail}>
        <img src={item?.img} alt="이미지1" width="100%" height={"220px"}></img>{" "}
      </div>
      <div className="my-3">
        <span>{item?.new && nweImg}</span>
        <span>{item?.sale && sale}</span>
        <span>{item?.delivery && delivery}</span>
        <h5 className="fw-bold">{item?.title}</h5>
        <div>{item?.price}</div>
      </div>
    </>
  );
};

export default ProductCard;
