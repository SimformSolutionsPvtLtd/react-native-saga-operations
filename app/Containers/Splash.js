import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import { animatedGIF } from '../Animations';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <LottieView source={animatedGIF.splash} progress={this.state.progress} />
    );
  }
}
