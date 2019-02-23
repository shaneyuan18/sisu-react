import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './styles/StoryCarousel.css';

class StoryCarousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stories: this.props.stories,
      };
    }
  
    componentDidMount() {
        
    }
  
    render() {
      return (
        <div>
          <Carousel className={styles.storyCarousel}>
              {this.props.stories.map((story) => {
                  return (
                      <Carousel.Item className={styles.storyCarouselItem}>
                          <img
                              className="d-block w-100"
                              src={story.imageURL}
                              alt="First slide"
                          />
                          <div className={styles.storyCarouselBlur}></div>
                          <Carousel.Caption className={styles.storyCarouselCaption}>
                            <h3>HIGHLIGHT STORY</h3>
                            <h1>{story.title}</h1>
                            <p>{story.description}</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                  )  
              })}
          </Carousel>
        </div>
      );
    }
  }
  
  export default StoryCarousel;
  