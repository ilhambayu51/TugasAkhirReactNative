/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, Text, Image} from 'react-native';
import styles from './styles';

export default class Medium extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.title}>1. Media </Text>
        <Text style={styles.content}>
          Media lukisan bisa berbentuk kertas, kanvas, papan, film dalam
          fotografi, dan benda apa saja yang dapat dianggap sebagai media
          lukisan.
        </Text>
        <Text style={styles.subtitle}>a. Kertas </Text>
        <Image
          source={require('../../assets/bahan/kertas.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>b. Kanvas </Text>
        <Text style={styles.content}>
          Kanvas adalah kain yang berlapis cat campur lem, merupakan kain kanvas
          terbuat dari yang kain tipis sampai kain tebal dan kuat. Bahan ini
          dipergunakan untuk membuat layar dan terutama dasar lukisan.
        </Text>
        <Image
          source={require('../../assets/bahan/kanvas.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>c. Papan </Text>
        <Image
          source={require('../../assets/bahan/papanlukis.jpg')}
          style={styles.img1}
        />

        <Text style={styles.title}>2. Bahan </Text>
        <Text style={styles.content}>
          Bahan-bahannya meliputi cat, tinta, atau bahan apapun yang bisa
          digunakan. Jenis cat atau tinta yang kerap dipakai untuk melukis
          meliputi:
        </Text>
        <Text style={styles.subtitle}>a. Cat Air </Text>
        <Image
          source={require('../../assets/cat/catair_osama.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>b. Cat Akrilik </Text>
        <Image
          source={require('../../assets/cat/akrilik.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>c. Cat Poster </Text>
        <Image
          source={require('../../assets/cat/catPoster.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>d. Tinta Bak </Text>
        <Image
          source={require('../../assets/cat/tintabak.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>e. Cat Minyak </Text>
        <Image
          source={require('../../assets/cat/catminyak.jpg')}
          style={styles.img1}
        />
        <Text style={styles.title}>3. Alat </Text>
        <Text style={styles.content}>
          Sedangkan alat-alatnya seperti, kuas, palet, easel atau penjepit
          kanvas, pisau palet, serta pembersih kuas.
        </Text>
        <Text style={styles.subtitle}>a. Kuas </Text>
        <Text style={styles.content}>
          Kuas untuk melukis beragam macamnya bisa dikelompokkan beberapa
          kelompok menurut bentuk bulu kuas, di antaranya adalah bulat lancip,
          bulat tumpul, persegi rata, persegi lancip, besar dan ukurannya tiap
          merek tidak sama, nomor bisa sama tetapi besarnya bisa berbeda.
        </Text>
        <Image
          source={require('../../assets/kuas/kuas.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>b. Alat Pembersih Kuas </Text>
        <Image
          source={require('../../assets/kuas/alatpembersihkuas.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>c. Palet </Text>
        <Image
          source={require('../../assets/kuas/palet.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>d. Pisau Palet </Text>
        <Image
          source={require('../../assets/kuas/pisaupalet.jpg')}
          style={styles.img1}
        />
        <Text style={styles.subtitle}>e. Easel atau Penjempit Kanvas </Text>
        <Image
          source={require('../../assets/kuas/penjempitcanvas.jpg')}
          style={styles.img1}
        />
      </ScrollView>
    );
  }
}
