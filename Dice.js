import React from "react";

const getRandomImage = () => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      imageUrl: getRandomImage(),
    };
  }

  componentDidMount() {
    const imageUrl = localStorage.getItem('imageUrl');
    if (imageUrl) {
      this.setState({ imageUrl });
    }
  }

  rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    this.setState({
      value: newValue,
    });
  };

  changeImage = () => {
    const newImage = getRandomImage();
    localStorage.setItem('imageUrl', newImage);
    this.setState({
      imageUrl: newImage,
    });
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div
        ref={(dice) => {
          this.diceElement = dice;
        }}
        className="dice"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => {
          this.rollDice();
          this.changeImage();
        }}
      ></div>
    );
  }
}

export default Dice;
