import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import NavDropDown from './NavDropDown.jsx';
import styles from './styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
          <Navbar bg="white" variant="light">
            <Navbar.Brand href="#home">SISU</Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropDown />
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>

            <Button href="#signup" className={styles.button}>SIGN UP</Button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
