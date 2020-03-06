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
import {View} from 'react-native';
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
      .post('http://192.168.1.4:3001192.168.17.54/api/user', payload)
      .then(async value => {
        await AsyncStorage.setItem('access_token', value.data.access_token);
        ToastAndroid.show('Success', ToastAndroid.SHORT);
        this.props.navigation.dispatch(
          SwitchActions.jumpTo({routeName: 'Home'}),
        );
      })
      .catch(err => {
        ToastAndroid.show('Error', ToastAndroid.SHORT);
        console.log(err);
      });
  };
  render() {
    const {email, password, text} = this.state;
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
            <Title style={styles.title}>Daftar</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lengkapi data diri kamu sekarang yuk !
            </Text>
          </View>
          <Form>
            <Text style={styles.textform}>Nama Lengkap</Text>
            <Item>
              <Input
                style={styles.input}
                value={text}
                onChangeText={value => this.setState({text: value})}
              />
            </Item>
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
