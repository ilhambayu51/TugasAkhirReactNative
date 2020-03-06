import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import computerQuestions from '../../data/Quiz';
import {RowItem} from '../components/RowItem';

export default ({navigation}) => (
  <ScrollView>
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Computers',
          questions: computerQuestions,
          color: '#49475B',
        })
      }
    />
  </ScrollView>
);
