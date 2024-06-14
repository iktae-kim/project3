import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  const nweImg = <img src="../images/icon_02.gif" alt="신상품" />;
  const delivery = <img src="../images/icon_09.gif" alt="배송" />;
  const sale = <img src="../images/icon_11.gif" alt="세일" />;
  //id 읽어오기 usePrams
  let { id } = useParams();
  //data 저장
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/iktae-kim/project3/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={6} xs={12}>
            <img
              src={product?.img}
              alt="상품"
              width="100%"
              className="img-fluid"
            />
          </Col>
          <Col md={6} xs={12}>
            <p>
              <span>{product?.new && nweImg}</span>
              <span>{product?.sale && sale}</span>
              <span>{product?.delivery && delivery}</span>
            </p>
            <h3>{product?.title}</h3>
            <p> 상세정보 : {product?.description}</p>
            <p>가격 : {product?.price}</p>
            <Dropdown>
              <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <hr />
            <p className="text-end">
              <Button variant="outline-danger">구매하기</Button>
            </p>
          </Col>
        </Row>
        <Row>
          <hr className="mt-5"></hr>
          <h2>의류 관리 가이드</h2>
          <p>
            가장 일반적인 의류 관리 기호에 대한 편리한 참조 가이드를 통해 옷을
            더 잘 관리하면서 삶을 더 편하게 만드세요
          </p>
          <p>의류 관리법</p>
          <ul className="ps-5 mb-5">
            <li>걸어서 건조</li>
            <li>필요 시 비염소계 표백제만 사용 가능</li>
            <li>30도 물에서 기계세탁</li>
            <li>드라이클리닝 가능</li>
          </ul>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
