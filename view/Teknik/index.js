/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, Text, Image} from 'react-native';
import styles from './styles';

export default class Teknik extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.title2}>Teknik Seni Lukis</Text>

        <Text style={styles.title}>1. Teknik Aquarel</Text>
        <Image
          source={require('../../assets/teknik/aquarel.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Teknik Aquarel adalah jenis teknik lukis yang memanfaatkan cat air
          sebagai bahan lukis dengan cara mengoleskan warna secara tipis. Hal
          ini dilakukan agar memperoleh hasil suatu gambaran yang terlihat
          transparan.
        </Text>
        <Text style={styles.title}>2. Teknik Plakat</Text>
        <Image
          source={require('../../assets/teknik/plakat.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Teknik lukis Plakat menggunakan bahan cat air, cat akrilik, dan cat
          minyak dengan mengoleskan warna secara tebal dengan komposisi cat yang
          lebih kental. Terdapat perbedaan dengan Teknik Aquarel terkait cara
          mengoles dan komposisi catnya. Kelebihan menggunakan teknik aquarel,
          warna yang dihasilkan lebih kuat dan colorfull pada karya lukisannya.
        </Text>
        <Text style={styles.title}>3. Teknik Pointilis</Text>
        <Image
          source={require('../../assets/teknik/pointilis.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Teknik lukis ini merupakan teknik yang membutuhkan suatu kesabaran
          yang lebih dibandingkan teknik lukisnya. Hal ini dikarenakan
          Pointillis menggunakan titik-titik agar menghasilkan tampilan lukisan
          yang indah dan menawan. Biasanya pelukis memanfaatkan gradasi warna
          untuk mengatur unsur gelap dan terang pada lukisannya.
        </Text>

        <Text style={styles.title}>4. Teknik Spray</Text>
        <Image
          source={require('../../assets/teknik/spray.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Teknik jenis ini merupakan teknik lukis gaya baru dengan menyemprotkan
          cat ke papan/media lukis. Tujuan digunakannnya teknik lukisan ini
          adalah agar lukisan tampak lebih halus dan lebih visual untuk dilihat.
          Teknik spray ini sering digunakan untuk melukis grafitti di
          dinding-dinding.
        </Text>

        <Text style={styles.title}>5. Teknik Basah</Text>
        <Image
          source={require('../../assets/teknik/teknikbasah2.jpeg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Melukis dengan teknik basah dilakukan dengan cara mengencerkan cat
          minyak menggunakan bahan-bahan tertentu seperti linseed oil. Bila cat
          minyak telah diencerkan dengan kekentalan tertentu, barulah cat
          tersebut dioleskan pada media lukis. Kuas yang dipakai untuk melukis
          dengan teknik ini adalah kuas dengan bulu panjang.
        </Text>

        <Text style={styles.title}>6. Teknik Kering</Text>
        <Image
          source={require('../../assets/teknik/teknikkering.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Melukis dengan teknik kering dilakukan tanpa menggunakan cat minyak.
          Teknik ini seringkali kita gunakan dengan hanya menggunakan alat
          pensil, crayon atau spidol. Namun dalam melukis yang lebih khusus,
          digunakan kuas yang kering dan tidak berminyak.
        </Text>

        <Text style={styles.title}>7. Teknik Campuran</Text>
        <Image
          source={require('../../assets/teknik/teknikcampuran.jpg')}
          style={styles.img1}
        />
        <Text style={styles.content}>
          Melukis dengan teknik campuran adalah mengkombinasikan dua teknik atau
          lebih untuk menghasilkan suatu karya yang lebih elegan. Sebagai
          contoh, anda dapat mengkombinasikan teknik kering dan teknik basah
          dengan cara memanfaatkan teknik kering terlebih dahulu kemudian
          melapisinya dengan teknik basah. Hal ini membuat pengguna lebih
          kreatif dalam membuat lukisan baru.
        </Text>
      </ScrollView>
    );
  }
}
