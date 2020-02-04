/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';

export default class Sejarah extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.title}>Zaman Prasejarah</Text>
        <Text style={styles.content}>
          Secara historis, seni lukis sangat terkait dengan gambar. Peninggalan
          prasejarah memperlihatkan bahwa ribuan tahun lalu, nenek moyang
          manusia telah mulai mengenal lukisan atau gambar, seperti pada
          dinding-dinding gua. Lukisan atau gambar bisa dibuat hanya dengan
          arang, kapur, atau bahan lainnya.
        </Text>
        <Text style={styles.content}>
          Teknik terkenal gambar prasejarah yang dilakukan orang-orang gua
          adalah dengan menempelkan tangan di dinding gua, lalu meyemburnya
          dengan kunyahan dedaunan atau batu mineral berwarna.
        </Text>
        <Text style={styles.title}>Seni Lukis Zaman Klasik</Text>
        <Text style={styles.content}>
          Kebanyakan dimaksudkan untuk tujuan :
        </Text>
        <Text style={styles.content}>
          - Mistisme (sebagai akibat belum berkembangnya agama)
        </Text>
        <Text style={styles.content}>
          - Propaganda (sebagai contoh grafiti di reruntuhan kota Pompeii),
        </Text>
        <Text style={styles.content}>
          Di zaman ini lukisan dimaksudkan untuk meniru semirip mungkin
          bentuk-bentuk yang ada di alam. Hal ini sebagai akibat berkembangnya
          ilmu pengetahuan dan dimulainya kesadaran bahwa seni lukis mampu
          berkomunikasi lebih baik daripada kata-kata dalam banyak hal.
        </Text>
        <Text style={styles.title}>Seni Lukis Zaman Pertengahan</Text>
        <Text style={styles.content}>
          Karena terlalu kuatnya pengaruh agama pada zaman pertengahan, seni
          lukis mengalami penjauhan dari ilmu pengetahuan. Ilmu pengetahuan
          dianggap sebagai sihir yang bisa menjauhkan manusia dari pengabdian
          kepada Tuhan.
        </Text>
        <Text style={styles.content}>
          Kebanyakan lukisan pada zaman ini lebih berupa simbolisme, bukan
          realisme. Sehingga sulit sekali untuk menemukan lukisan yang bisa
          dikategorikan "bagus".
        </Text>
        <Text style={styles.content}>
          Lukisan pada masa ini digunakan untuk alat propaganda dan religi.
          Beberapa agama yang melarang penggambaran hewan dan manusia mendorong
          perkembangan abstrakisme (pemisahan unsur bentuk yang "benar" dari
          benda).
        </Text>
        <Text style={styles.title}>Seni lukis zaman Renaissance</Text>
        <Text style={styles.content}>
          Berawal dari kota Firenze. Setelah kekalahan dari Turki, banyak sekali
          ilmuwan dan budayawan (termasuk pelukis) yang menyingkir dari
          Bizantium menuju daerah semenanjung Italia sekarang. Dukungan dari
          keluarga deMedici yang menguasai kota Firenze terhadap ilmu
          pengetahuan modern dan seni membuat sinergi keduanya menghasilkan
          banyak sumbangan terhadap kebudayaan baru Eropa. Seni rupa menemukan
          jiwa barunya dalam kelahiran kembali seni zaman klasik. Sains di kota
          ini tidak lagi dianggap sihir, namun sebagai alat baru untuk merebut
          kembali kekuasaan yang dirampas oleh Turki. Pada akhirnya, pengaruh
          seni di kota Firenze menyebar ke seluruh Eropa hingga Eropa Timur.
        </Text>
        <Text style={styles.title}>
          Tokoh yang banyak dikenal dari masa ini adalah :
        </Text>
        <Text style={styles.content}>- Tomassi </Text>
        <Text style={styles.content}>- Donatello</Text>
        <Text style={styles.content}>- Leonardo da Vinci</Text>
        <Text style={styles.content}>- Michaelangelo</Text>
        <Text style={styles.content}>- Raphael</Text>
        <Text style={styles.title}>Seni Lukis di Indonesia</Text>
        <Text style={styles.content}>
          Seni lukis modern mulai dikenal sejak masuknya penjajahan Belanda di
          Indonesia. kecenderungan seni rupa dari Eropa Barat saat itu adalah
          aliran romantisme yang diikuti juga oleh para pelukis Indonesia.
        </Text>
      </ScrollView>
    );
  }
}
