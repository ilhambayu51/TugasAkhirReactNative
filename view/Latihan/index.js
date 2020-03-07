/* eslint-disable eqeqeq */
import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import styles from './styles';
import quiz from '../../data/Quiz';

export default class Ujian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: quiz,
      savedAnswer: '',
      answers: quiz,
    };
  }
  _checkAnswer(data) {
    this.setState({savedAnswer: data});
  }
  render() {
    const dataQuestion = this.state.bank;
    const dataAnswer = this.state.bank;
    return (
      <ScrollView style={styles.View}>
        <Text style={styles.text1}>{dataQuestion.question}</Text>
        {dataAnswer.answers.map(data => (
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
      </ScrollView>
    );
  }
}
