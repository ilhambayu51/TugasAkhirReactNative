/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import styles from './styles';

export default class Unsur extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <Text style={styles.title}>Unsur</Text>
        <Text style={styles.content}>
          Unsur yang mendukung seni lukis adalah unsur visual dan unsur non
          visual. Unsur visual adalah unsur yang mengandung material visual
          serta bisa dilihat maupun dibuat oleh sang pelukis sesuai dengan
          keinginannya. Unsur visual bisa dipelajari. Nah, bentuk dari unsur
          visual itu sendiri adalah:
        </Text>
        <Text style={styles.title}>a. Line atau garis</Text>
        <Text style={styles.content}>
          elemen ini adalah elemen dasar dimana garis dapat dibentuk dari dua
          titik berjauhan serta diisikan gambar maupun diberi gambar diantara
          kedua titik itu. garis berfungsi untuk menjadi pembatas beberapa jenis
          ataupun bentuk gambar. Garis dibagi jadi dua yaitu buatan dan alamiah.
          Garis alamiah ada pada gambar yang realita objeknya berbatas seperti
          pantai, gunung, langit, atau laut. Sedangkan garis buatan seperti
          kontur wajah, bentuk bujur sangkar sebuah rumah, dan sebagainya.
        </Text>
        <Text style={styles.title}>b. Field atau bidang</Text>
        <Text style={styles.content}>
          elemen ini menggunakan lebih dari dua sisi dengan sisi lebar dan
          panjang. Bentuknya dianggap sebagai teknik dasar bagi pelukis yang
          ingin membuat objeknya terlihat lebih hidup.
        </Text>
        <Text style={styles.title}>c. Space atau ruang</Text>
        <Text style={styles.content}>
          elemen space adalah yang tertinggi pada teknik pelukisan. Ruang akan
          memberi kesan hidup pada objek lukisan. Ruang akan memperlihatkan sisi
          ataupun ruang hampa. Ruang dapat digunakan sebagai gambar objek alam,
          benda timbul, ataupun benda lain yang memiliki 3 atau 4 dimensi.
        </Text>
        <Text style={styles.title}>d. Color atau warna</Text>
        <Text style={styles.content}>
          ada beberapa jenis warna dalam teknik seni lukis, yaitu warna primer
          (warna dasar) meliputi putih, biru, dan merah. Sedangkan warna
          sekunder terdiri dari hijau, ungu dan jingga. Jenis warna yang lain
          adalah analogis seperti gradasi kuning ke hijau, ataupun warna
          komplementer dengan gradasi warna yang sedikit lebih jauh misalnya
          ungu ke kuning lalu beralih ke merah.
        </Text>

        <Text style={styles.content}>
          Selain unsur visual ada juga unsur non visual. Unsur ini merupakan
          pengembangan dari seorang pelukis. Unsur non visual terdiri dari:
        </Text>
        <Text style={styles.title}>a. Pandangan hidup serta pengalaman</Text>
        <Text style={styles.content}>
          meskipun ada dalam satu aliran, tapi terkadang cara penggambarannya
          berbeda. hal ini dikarenakan pandangan hidup dari pelukis itu serta
          pengalamannya. Objek yang sama akan terlihat berbeda jika dilukis oleh
          dua orang yang berbeda. sebab, ada banyak sisi yang bisa digunakan
          untuk menggambarkannya.
        </Text>
        <Text style={styles.title}>b. Imajinasi</Text>
        <Text style={styles.content}>
          lukis adalah gambar yang direalisasikan dalam media yang lebih kecil.
          Tidak hanya objek saja yang dibutuhkan, tetapi imajinasi. Setiap orang
          memiliki pengembangan imajinasi yang berbeda. Imajinasi adalah
          khayalan atau gambaran yang dibuat oleh pikiran baik yang sudah pernah
          dilihat atau belum pernah dilihat oleh si pelukis. Imajinasi adalah
          hal yang penting serta mahal jika sudah ditumpahkan dalam sebuah
          lukisan.
        </Text>
        <Text style={styles.title}>c. Sikap artistik dan estetik</Text>
        <Text style={styles.content}>
          sikap ini tidak dimiliki oleh semua orang. sebab, seni akan bernilai
          jika sudah menjadi sebuah karya. Beberapa pelukis terkadang tidak
          dikagumi karyanya karena tidak disertai dengan pandangan yang
          menunjukkan bahwa seni itu indah.
        </Text>
        <Text style={styles.title}>d. Konsep lukisan</Text>
        <Text style={styles.content}>
          konsep adalah sketsa awal atau bisa dibilang sebagai peta awal ketika
          akan menggambarkan lukisan dalam media lukis. Ada beberapa pelukis
          yang tidak punya konsep, hanya menggambarkannya secara spontan. Akan
          tetapi, jika aliran yang diikuti jelas, objeknya juga jelas, maka
          menggunakan konsep akan membuat hasil lukisan menjadi lebih matang.
        </Text>
      </ScrollView>
    );
  }
}
