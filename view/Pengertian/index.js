import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import Styles from './styles';

export default class Pengertian extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={Styles.content3}>
          Menurut Wikipedia, seni lukis merupakan salah satu cabang seni rupa.
          Dasar pengertiannya sama, yaitu sebuah pengembangan yang lebih utuh
          lebih utuh dari seni menggambar.
        </Text>
        <Text style={Styles.content2}>Menurut para ahli:</Text>
        <Text style={Styles.title}> Soedarso SP</Text>
        <Text style={Styles.content}>
          Sebuah karya lukis ialah sebuah karya manusia yang mengkomunikasikan
          pengalaman batiniahnya. Pengalaman batin disajikan secara indah serta
          menarik sehingga merangsang timbulnya pengalaman batin manusia saat
          menghayati karya tersebut.
        </Text>
        <Text style={Styles.title}> Herbert Read</Text>
        <Text style={Styles.content}>
          Karya seni lukis merupakan kegiatan rohani yang direfleksikan pada
          jasmani dan mempunyai daya yang bisa membangkitkan jiwa.
        </Text>
        <Text style={Styles.title}> Soni Ade & Imam R</Text>
        <Text style={Styles.content}>
          Menurut Soni Ade dan Imam R, lukis merupakan kekuatan peradaban
          manusia, kekuatan budaya, sebab dalam melakukan kegiatan ini,
          seseorang dilatih jeli, cermat, serta teliti saat mengamati berbagai
          kejadian alam serta kehidupan.
        </Text>
        <Text style={Styles.title}> Jim Supangat</Text>
        <Text style={Styles.content}>
          Seni lukis ialah suatu upaya menegaskan kembali pengalaman di masa
          lalu dalam konteks sekarang.
        </Text>
        <Text style={Styles.title}> Aristoteles</Text>
        <Text style={Styles.content}>
          Seni lukis adalah sesuatu yang selain baik tapi juga menyenangkan.
        </Text>
      </ScrollView>
    );
  }
}
