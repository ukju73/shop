import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./detail.js";
import { useHistory } from 'react-router-dom';


function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="main-container">
          <Navbar.Brand href="#home">FootPrint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}  >  Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/:id");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Product shoes={shoes} />} />
        <Route path="/detail/:id" element={ <Detail shoes={shoes} navigate={navigate}/> }/>
        <Route path="*" element={<div>없는페이지 입니다</div>} />
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="one"
            element={<div> 첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div> 생일 기념 쿠폰받기 </div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  );
}





function Product({shoes}) {
  let navigate = useNavigate(); 

  return (
    <Container fluid>
      <div className="main-bg"></div>
      <Row className="row">
        {shoes.map((shoe, i) => (
          <Col xs={12} sm={6} md={4} lg={3} key={shoe.id} className="col1-main" onClick={()=>{
            navigate(`/detail/${shoe.id}`); // 상품 클릭 시 Detail 페이지로 이동
          }}>
            <img src={shoe.image} alt="" width="80%" />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}



export default App;
