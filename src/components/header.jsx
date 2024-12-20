import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

import { CgFileDocument } from "react-icons/cg";

function Header(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <div style={{ fontWeight: 'bold', color: '#3e28ab', fontSize: '1.6rem'}}>N</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
                <Nav.Link onClick={() => {
                  updateExpanded(false)
                  props.scrollDown(props.pages.home)
                  }}>
                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link onClick={() => {
                      updateExpanded(false)
                      props.scrollDown(props.pages.about)
                      }}>
                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link onClick={() => {
                            updateExpanded(false)
                            props.scrollDown(props.pages.skills)
                            }}>
                    <FaCode style={{ marginBottom: "2px" }} /> Skills
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                  <Nav.Link onClick={() => {
                        updateExpanded(false)
                        props.scrollDown(props.pages.projects)
                        }}>
                    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }}/>{" "}
                    Projects
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                  <Nav.Link onClick={() => {
                              updateExpanded(false)
                              props.scrollDown(props.pages.resume)
                              }}>
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;