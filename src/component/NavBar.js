import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Person, Search } from "react-bootstrap-icons";
import Offmenu from "./Offmenu";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "유아",
    "아동",
    "여성",
    "남성",
    "H&M HOME",
    "스포츠",
    "sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  const search = (e) => {
    // console.log("keyDown");
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter", e.key);
      let keyword = e.target.value;
      console.log("keyword? :", keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <>
      <Container>
        {authenticate ? (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div
              className="ms-2 pointer"
              onClick={() => {
                setAuthenticate(false);
              }}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div className="ms-2 pointer" onClick={goToLogin}>
              로그인
            </div>
          </div>
        )}

        <div className="text-center mt-4 d-none d-md-block">
          <img
            src="../images/logo.png"
            alt="logo"
            width={"150px"}
            onClick={home}
            className="pointer"
          />
        </div>
        <div className="d-none d-md-block">
          <Row>
            <Col lg={2}></Col>
            <Col lg={8} className="text-center">
              <ul className="list-unstyled d-flex justify-content-center mt-2">
                {menuList.map((menu) => (
                  <li className="ms-3 fw-bold">{menu}</li>
                ))}
              </ul>
            </Col>
            <Col lg={2}>
              <Form
                inline
                className="d-flex justify-content-end align-items-center"
                role="search"
              >
                <Search />
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2 me-2 border-0 border-bottom"
                      onKeyDown={(event) => search(event)}
                    />
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
        <div>
          <div className="d-md-none">
            <Offmenu />
            <img
              src="../images/logo.png"
              alt="logo"
              width={"70px"}
              onClick={home}
              className="pointer"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
