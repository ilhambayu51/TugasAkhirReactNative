/* eslint-disable eqeqeq */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';

export default class Ujian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedAnswer: '',
      answers: ['manuk', 'menclok', 'nang', 'katok'],
    };
  }
  _checkAnswer(data) {
    this.setState({savedAnswer: data});
  }
  render() {
    return (
      <View style={styles.View}>
        <Text style={styles.text1}>
          Karya seni lukis merupakan kegiatan rohani yang direfleksikan pada
          jasmani dan mempunyai daya yang bisa membangkitkan jiwa. Adalah
          perngertian dari
        </Text>
        {this.state.answers.map(data => (
          <View style={styles.answerContainer}>
            <TouchableOpacity
              style={
                data == this.state.savedAnswer
                  ? styles.choicePressed
                  : styles.choice
              }
              onPress={() => this._checkAnswer(data)}>
              <Text style={styles.text3}>{data}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.view2}>
          <Button style={styles.Button}>
            <Text style={styles.text2}>Kembali</Text>
          </Button>
          <Button style={styles.Button}>
            <Text style={styles.text2}>Lanjut</Text>
          </Button>
        </View>
      </View>
    );
  }
}
