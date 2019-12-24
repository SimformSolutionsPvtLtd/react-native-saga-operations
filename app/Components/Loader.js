import LottieView from 'lottie-react-native';
import React from 'react';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';
import styles from './styles/LoaderStyles';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      loading: false,
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
      }),
    ).start();
  }

  renderLoading() {
    const { source, style } = this.props;
    return (
      <LottieView
        style={[styles.container, style]}
        source={source}
        progress={this.state.progress}
      />
    );
  }

  render() {
    return <>{this.renderLoading()}</>;
  }
}

export default Loader;
