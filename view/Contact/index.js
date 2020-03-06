/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Right,
  Button,
  Text,
  Icon,
  Left,
} from 'native-base';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';
export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('First')}>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Kontak Kami</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/images/kontak.png')}
              resizeMode="contain"
              style={styles.frame}
            />
            {/* <Image
              source={require('../../assets/images/hanif.png')}
              resizeMode="contain"
              style={styles.frame}
            />
            <Image
              source={require('../../assets/images/adel.jpg')}
              resizeMode="contain"
              style={styles.frame}
            />
            <Image
              source={require('../../assets/images/farah.png')}
              resizeMode="contain"
              style={styles.frame}
            />
            <Image
              source={require('../../assets/images/grace.png')}
              resizeMode="contain"
              style={styles.frame}
            /> */}
          </View>
        </ScrollView>
      </Container>
    );
  }
}
