import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import StoryCarousel from './StoryCarousel.jsx';
import AboutUs from './AboutUs.jsx';

const fakeStories = [
    {
        title: "To Lead or Not to Lead?",
        description: "If someone takes over your meeting, how",
        imageURL: "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?cs=srgb&dl=buildings-city-city-view-597909.jpg&fm=jpg",
    },
    {
        title: "Story 2?",
        description: "Hello World, Computer Science 101",
        imageURL: "https://cdnb.artstation.com/p/assets/images/images/011/201/215/large/geovani-angelo-ponte-background-anime.jpg?1528341661",
    },
    {
        title: "City Outlook",
        description: "If someone takes over your meeting, how",
        imageURL: "https://athensservices.com/wp-content/uploads/2016/11/city-of-LA-final.jpg",
    }
]




class Body extends React.Component {
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
        <StoryCarousel stories={fakeStories} />
        <AboutUs />
      </div>
    );
  }
}

export default Body;
