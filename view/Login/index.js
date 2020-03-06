/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {AsyncStorage, ToastAndroid} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Body,
  Title,
  Right,
  Button,
  Text,
  Icon,
  Left,
} from 'native-base';
import {
  View,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import {SwitchActions} from 'react-navigation';
export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }
  login = async () => {
    const {email, password} = this.state;
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post('http://34.238.49.185:8080/api/users/login', payload)
      .then(async value => {
        await AsyncStorage.setItem('token', value.data.token);
        ToastAndroid.show('Success', ToastAndroid.SHORT);
        this.props.navigation.navigate('First');
      })
      .catch(err => {
        ToastAndroid.show('Error', ToastAndroid.SHORT);
        console.log(err);
      });
  };
  render() {
    const {email, password} = this.state;
    return (
      <Container>
        <StatusBar backgroundColor="#48BFF7" />
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('First')}>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Masuk</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ScrollView />
          <View style={styles.loginContainer}>
            <Image
              source={require('../../assets/images/login.png')}
              resizeMode="contain"
              style={styles.login}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Silahkan Masuk dengan Akun yang sudah terdaftar
            </Text>
          </View>
          <Form>
            <Text style={styles.textform}>Email</Text>
            <Item>
              <Input
                style={styles.input}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
            </Item>
            <Text style={styles.textform}>Password</Text>
            <Item>
              <Input
                style={styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </Item>
          </Form>
        </Content>
        <Button full style={styles.button} onPress={this.login}>
          <Text>Lanjut</Text>
        </Button>
      </Container>
    );
  }
}
