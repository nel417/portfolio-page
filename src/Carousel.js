import React, { Component } from "react";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import Card from "./Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
      items: [
        {
          id: 0,
          title: "RandomHex (React)",
          subTitle: "Find random colors offline",
          imgSrc: pic2,
          link: "https://nel417.github.io/Randomhex/",
          selected: true,
        },
        {
          id: 1,
          title: "Kanban Board (React/Redux)",
          subTitle: "Stay organized and track progress",
          imgSrc: pic1,
          link: "https://nel417.github.io/KanbanBoard/",
          selected: true,
        },
        {
          id: 2,
          title: "Twitter bot (Python)",
          subTitle: "Automation for picture uploads",
          imgSrc: pic3,
          link: "https://github.com/nel417/Twitter_bot",
          selected: true,
        },
      ],
    };
  }
  // handleClick = (id, card) => {
  //   let items = [...this.state.items];
  //   items[id].selected = items[id].selected ? false : true;

  //   items.forEach(item => {
  //     if (item.id !== id) {
  //       item.selected = false;
  //     }
  //   });
  //   this.setState({
  //     items
  //   });
  // };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          // click={e => this.handleClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
