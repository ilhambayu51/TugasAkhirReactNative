import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('First');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2500),
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/splash.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <Text style={styles.splashtext}>LUKISEN</Text>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
