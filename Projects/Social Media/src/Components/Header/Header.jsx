import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IoChatbubblesSharp } from "react-icons/io5";
import { useState } from "react";
import { PostListContext } from "../../store/post-list-store";
import { useContext } from "react";
import { useEffect } from "react";

function Header() {
  const [searchWord, setSearchWord] = useState("");
  const { handleOnSearch } = useContext(PostListContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("SEARCH FIRED ✅", searchWord);
      handleOnSearch(searchWord);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchWord]);

  const handelSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <IoChatbubblesSharp />
            Connect
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#" className="text-secondary">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Features
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                Pricing
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                FAQs
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                About
              </Nav.Link>
            </Nav>

            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="form-control-dark text-bg-dark"
                aria-label="Search"
                value={searchWord}
                onChange={handelSearchChange}
              />
            </Form>

            <div className="text-end">
              <Button variant="outline-light" className="me-2">
                Login
              </Button>
              <Button variant="warning">Sign-up</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
