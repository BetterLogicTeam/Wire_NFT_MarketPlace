import React, { useState } from "react";
import "./Header.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { loadWeb3 } from "../Api/api";

function Header() {
  let [btnTxt, setBtTxt] = useState("Wallet connect")

  const getAccount = async () => {
      let acc = await loadWeb3();
      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
          setBtTxt("No Wallet")
      }
      else if (acc == "Wrong Network") {
          setBtTxt("Wrong Network")
      } else {
          let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
          setBtTxt(myAcc);

      }
  }
  return (
    <div>

      <Navbar
        className="Headera"
        collapseOnSelect
        expand="xl"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="logo_dark.png" alt="" className="nav_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" nav_icon_here" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_text_here">
              <Nav.Link className="hzn" href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="hzn">
                <Link to="/Explore_main">Explore</Link>
              </Nav.Link>
              <Nav.Link className="hzn" href="#features">
                <Link to="/Activity">Activity</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="hzn">
                <Link to="/Community">Community</Link>
              </Nav.Link>
              <Nav.Link className="hzn" href="#features">
                <Link to="/Authors_main">Authors</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="hzn">
                <Link to="/Create"> Create</Link>
              </Nav.Link>
              <Nav.Link className="hzn" href="#features">
                <Link to="/Contact"> Contact</Link>
              </Nav.Link>
              <Nav.Link className="hzn" href="#features">
                <Link to="/My_collection"> My Collection</Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="hzn">
               <button className="btn btn_wallet" onClick={()=>getAccount()}> <FaWallet className="icon_wallet" /> <span className="inner_btn_connect">{btnTxt}</span>
                </button>
              </Nav.Link>

              {/* <div class="input-group input_and_btn">
                <input type="text" class="form-control input_search" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary btn1" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
              </div> */}
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>


        

    </div>
  );
}

export default Header;
