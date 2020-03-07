import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  View: {
    backgroundColor: '#ffffff',
  },
  answerContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    marginLeft: '7%',
    marginRight: '7%',
    textAlign: 'justify',
    marginTop: '5%',
    marginBottom: '6%',
  },
  text2: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
  },
  text3: {
    fontSize: 22,
    marginLeft: '5%',
    textAlign: 'justify',
    marginTop: '5%',
    marginBottom: '5%',
  },
  choice: {
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: '5%',
    width: '85%',
  },
  choicePressed: {
    backgroundColor: '#CDCDCD',
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: '5%',
    width: '85%',
  },
  Button: {
    backgroundColor: '#1CB0F6',
    marginRight: '10%',
    marginLeft: '7%',
    width: '34%',
    height: '9%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flexDirection: 'row',
    marginTop: '6%',
    width: '100%',
    height: '100%',
  },
});

export default styles;
