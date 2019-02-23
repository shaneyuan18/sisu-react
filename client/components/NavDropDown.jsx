import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './styles/NavDropDown.css';

class NavDropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Dropdown className={styles.dropdown}>
            <Dropdown.Toggle className={styles.toggle} bsPrefix='tog'>
                Stories
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item>Discrimination</Dropdown.Item>
            <Dropdown.Item>Harassment</Dropdown.Item>
            <Dropdown.Item>Politics STEM</Dropdown.Item>
            <Dropdown.Item>Work/Life Imbalance</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      );
    }
  }
  
  export default NavDropDown;
  