import React from "react";
import { useContext } from "react";
import { Nav, Dropdown, Image } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { PostListContext } from "../../store/post-list-store";
import { Link } from "react-router-dom";

function Sidebar() {
  // const { selectedTab, setSelectedTab } = useContext(PostListContext);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", height: "100vh" }}
    >
      {/* Navigation Menu */}
      <Nav variant="pills" className="flex-column mb-auto">
        <Nav.Item>
          <Link
            to="/"
            // active={selectedTab === "Home"}
            className="text-white"
            onClick={() => {
              console.log("clieekd home");
            }}
          >
            <FaHome className="me-2" /> Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            to="/create-post"
            // active={selectedTab === "CreatePost"}
            className="text-white"
            onClick={() => {
              console.log("clieekd create post");
            }}
          >
            <IoIosCreate className="me-2" /> Create Post
          </Link>
        </Nav.Item>
      </Nav>

      <hr />

      {/* Profile Dropdown */}
      <Dropdown>
        <Dropdown.Toggle
          variant="dark"
          className="d-flex align-items-center text-white text-decoration-none p-0 border-0"
          id="dropdown-user"
        >
          <Image
            src="https://github.com/mdo.png"
            roundedCircle
            width={32}
            height={32}
            className="me-2"
          />
          <strong>mdo</strong>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" className="shadow">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
