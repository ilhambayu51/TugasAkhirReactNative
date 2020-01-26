import React, {Component} from 'react';
import {ScrollView, Text, Image} from 'react-native';
import Styles from './styles';

export default class Aliran extends Component {
  _onPressButton = () => {
    this.props.navigation.navigate('Unsur');
  };
  render() {
    return (
      <ScrollView>
        <Text style={Styles.title} onPress={this._onPressButton}>
          1. Klasisme
        </Text>
        <Image />
        <Text style={Styles.content}>
          Aliran Klasisme ini adalah bercorak klasik Yunani dan Romawi dengan
          wujud gambar yang realistis. Bumbu-bumbu realistis ini adalah wujud
          tampilan lukisan yang dibuat semirip-miripnya dengan wujud aslinya di
          dunia nyata.
        </Text>
        <Text style={Styles.title}>2. Romantisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran ini berusaha untuk menunjukkan lukisan dengan fantastis dan
          nuansa keindahan serta ketenangan. Penggunaan aliran ini untuk
          menggambarkan kejadian yang romantis, sejarah ataupun tragedi.
          Ciri-ciri aliran romantisme adalah mempunyai kandungan makna emosional
          tinggi, lebih dinamis, mempunyai warna meriah dan kontras, pengaturan
          komposisi pendukung memberi kesan dinamis, maknanya menyentuh
          perasaan, terkesan lebih mewah dari kenyataan. Beberapa tokoh yang
          mempopulerkan aliran ini adalah Theodore Gercault, Eugene Delacroi,
          Raden Saleh, dan Jean Baptiste.
        </Text>
        <Text style={Styles.title}>3. Realisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran realisme merupakan aliran seni lukis yang menyampaikan karya
          seni lukis dengan apa adanya di dalam kehidupan nyata. Aliran ini
          dibuat sebagaimana keadaan asli tanpa penambahan unsur lainnya.
          Ciri-ciri dari aliran ini adalah melukiskan aktivitas sehari-hari,
          lukisan lebih menyatu dengan objek, serta terlihat nyata. Tokoh-tokoh
          aliran realisme yang paling terkenal di dunia adalah Gastove Cobert,
          Honore Umier, serta Fransisco de Goya.
        </Text>
        <Text style={Styles.title}>4. Naturalisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran naturalistik merupakan aliran yang menampilkan gambaran objek
          alami. Ada sedikit persamaan dengan realisme, hanya saja pada aliran
          ini ditambahkan dengan sentuhan tertentu untuk membuat lukisan menjadi
          lebih indah. Ciri-ciri dari aliran ini adalah lukisan biasanya
          bertemakan alam, memiliki gradasi warna yang beragam, perbandingan
          susunannya sangat kompleks, mulai dari tekstur, perspektif, pewarna,
          serta gelap terang. Tokoh-tokoh yang terkenal dalam aliran seni lukis
          naturalistik adalah Raden Saleh, Gambir Anom, Abdullah Sudiro Subroto,
          Trubus, dan sebagainya.
        </Text>
        <Text style={Styles.title}>5. Ekspresionisme</Text>
        <Image />
        <Text style={Styles.content}>
          Seni lukis aliran ekspresionisme memberi kebebasan pada distorsi warna
          dan bentuk untuk membuat emosi dari berbagai kejadian untuk
          menampilkan sensasi mendalam. Ciri-ciri aliran ini adalah dapat
          mengungkap emosional dari seniman, mengungkap perasaan seseorang,
          serta mengungkap angan-angan pelukis. Tokoh-tokohnya meliputi Vincent
          Van Gogh, Ernast Ludwig, Paul Gaugiuin, Zaini, Affandi, dan Popo
          Iskandar.
        </Text>
        <Text style={Styles.title}>6. Surealisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran surealisme berarti aliran yang sangat dekat dan erat dengan
          dunia fantasi atau imajinasi. Penampilannya seolah ada di alam mimpi.
          Bentuknya biasanya aneh dan tidak logis seperti khayalan. Ciri-ciri
          aliran surealisme adalah lukisan terkesan aneh, pembuatan gambar penuh
          imajinasi dan sangat unik. Beberapa tokoh yang mempopulerkan aliran
          surealisme adalah Joan Miro, Salvador Dalli. Andre Masson, Amang
          Rahman dan Sudiarjo.
        </Text>
        <Text style={Styles.title}>7. Abstraksionisme</Text>
        <Image />
        <Text style={Styles.content}>
          Jenis aliran abstrak merupakan lukisan dengan bentuk penyampaian makna
          secara tidak langsung. Aliran ini tidak menggambarkan obyek dalam
          bentuk aslinya, tetapi gambar yang samar dan membuat pengunjung
          berpikir apa lukisan itu. Ciri-cirinya adalah mempunyai bentuk yang
          tak terbatas pada bentuk yang ada, menggunakan garis, warna, dan
          bentuk yang tidak mengindahkan objek aslinya, serta memiliki perpaduan
          warna yang perspektif. Tokoh yang mempopulerkan aliran abstraksionisme
          diantaranya Clyfford Stil, Mark Rothko, Adolf Git Lieb, Bornet Newman,
          dan Robert Montherwell.
        </Text>
        <Text style={Styles.title}>8. Gotik</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran seni lukis ini menekankan obyek berupa tokoh-tokoh suci, raja,
          ratu, tempat ibadah, istana, atau obyek-obyek lain yang berhubungan
          dengan dinasti. Ciri khas penggambarannya adalah berupa garis tebal
          dan warna yang dipertegas.
        </Text>
        <Text style={Styles.title}>9. Futurisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran ini cenderung menekankan pada gerak yang indah dan
          memperlihatkan obyek lukisan yang digambar seakan-akan bergerak. Unsur
          yang kuat adalah kedinamisan, ekspresi kecepatan, dan ekspresi
          kesamaan waktu yang kuat.
        </Text>
        <Text style={Styles.title}>10. Konstruktivisme</Text>
        <Image />
        <Text style={Styles.content}>
          Jenis aliran konstruktivisme adalah aliran yang melukiskan wujud
          konstruksi bangunan disertai dengan penekanan fokus pada sebuah
          bangunan. Obyek yang digambar dapat berupa bangunan model klasik,
          modern, atau bangunan yang lain.
        </Text>
        <Text style={Styles.title}>11. Impresionisme</Text>
        <Image />
        <Text style={Styles.content}>
          Seni lukis beraliran Impresionisme berusaha untuk menampilkan kesan
          atau pesan yang dapat ditangkap objek, biasanya dalam penggambarannya
          sedikit kabur serta kurang mendetail. Ciri-ciri dari aliran ini adalah
          penggoresan cat dari kuas tebal dan pendek mirip dengan gaya
          menggambar sketsa, penulis lebih mudah menangkap esensi subjek
          ketimbang detailnya, warna didapat dari campuran beberapa pigmen cat,
          proses pelukisannya tidak menunggu hingga cat mengering, pelukis
          memperhatikan gradasi cahaya serta sifat cahaya yang dimasukkan
          menambah keindahan lukisan. Tokoh terkenal yang mempopulerkan aliran
          ini diantaranya Aguste Renoir, Claude Monet, Sisley, Casmile Pissaro
          dan Mary Cassat.
        </Text>
        <Text style={Styles.title}>12. Kubisme</Text>
        <Image />
        <Text style={Styles.content}>
          Lukisan yang dihasilkan oleh aliran kubisme cukup unik. Pasalnya,
          aliran ini mempunyai bentuk geometris seperti lingkaran, segitiga,
          silinder, persegi, dan sebagainya. hingga akhirnya membentuk lukisan
          indah dengan gradasi warna serta pola lukisan yang cantik. Ciri-ciri
          aliran ini adalah berbentuk geometri, memadukan warna yang perspektif.
          Tokoh-tokoh yang mempopulerkan aliran ini diantaranya Robert Delaunay,
          Albert Glazes, Braque, Fernand Lager, Mezinger, Pablo Picasso dan
          Gezanne.
        </Text>
        <Text style={Styles.title}>13. Dadaisme</Text>
        <Image />
        <Text style={Styles.content}>
          Aliran ini menyampaikan seni artistik dengan bentuk yang mengerikan,
          aneh, menyeramkan, magis, tapi kekanak-kanakan. Ciri-ciri dari lukisan
          beraliran dadaisme adalah memiliki warna yang kontras, pewarnaannya
          tajam, karakternya aneh. Tokoh seniman yang mempopulerkan aliran ini
          diantaranya Roull Haussman, Duchamp dan Hans Arp.
        </Text>
      </ScrollView>
    );
  }
}
