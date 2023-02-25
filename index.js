/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZDEN EMİN OLUNUZ (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığınız kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanızı öneririz.
Bunu sağlamak için cevabı direk console'a loglayın veya çağırdığınız fonksiyondan dönen değeri console'a loglayın.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. surucuYasi isimli bir değişken yaratın ve bir sayı atayın.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let surucuYasi = 15;
if (surucuYasi >= 18 ) {
  console.log('true');
}  else {
  console.log('false')
}



/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yapınız:   
   1. 2 değişken tanımlayın ve bunlara değerler atayın (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let birinci_deger = 12;
let ikinci_deger = 27;

if (birinci_deger > ikinci_deger){
 console.log('true');
} else {
 console.log('Birinci Değer 30 olarak değiştiriliyor.');
 birinci_deger = 30; 
 console.log ('Birinci Değer = ', birinci_deger );
}



/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yapın:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/

let string = "1999";
const numberSayi = Number(string)
console.log(numberSayi);


/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamlayın:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsiniz)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığınız fonsiyonu test edin. Console'da sonucu 28 olarak görmelisiniz.
*/

function carpma(a, b){
  return a*b ;
}
console.log(carpma(7,4))



/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yapın:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımlayın.
 2. Gelen değeri kullanarak köpeğin yaşını hesaplayın (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(sene){
  let kopekyas = sene * 7;
  return kopekyas ;
}
console.log(kopeginYasi(2))


/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yapın.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar){
  if (oyuncu === "Taş" && bilgisayar === "Kağıt"){
    return ("Kaybettin!");
  } else if (oyuncu === "Taş" && bilgisayar === "Makas"){
    return ("Kazandın!");
  }  else if (oyuncu === "Taş" && bilgisayar === "Taş"){
    return ("Beraberlik");
  }  else if (oyuncu === "Kağıt" && bilgisayar === "Taş"){
    return ("Kazandın!");
  }  else if (oyuncu === "Kağıt" && bilgisayar === "Makas"){
    return ("Kaybettin!");
  }  else if (oyuncu === "Kağıt" && bilgisayar === "Kağıt"){
    return ("Beraberlik");
  }  else if (oyuncu === "Makas" && bilgisayar === "Makas"){
    return ("Beraberlik");
  }  else if (oyuncu === "Makas" && bilgisayar === "Kağıt"){
    return ("Kazandın!");
  }  else if (oyuncu === "Makas" && bilgisayar === "Taş"){
    return ("Kaybettin!");
  }
}

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yapın:
1. Bilgisayarın seçimini rastgele oluşturacağımız bir fonksiyon tanımlayın. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımlayın
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğiniz bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığınız oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/
//Güncelleme
function bilgisayarinSecimi(secim) {
  secim = Math.floor(Math.random()*2);
  if(secim < 1){
     return "Taş";
  }  else if (secim < 2){
    return "Kağıt";
  } else {
   return "Makas";
  }
}

console.log(oyun("Makas",bilgisayarinSecimi()));


//Eski yaptığım
/*function bilgisayarinSecimi() {
  let pcsecim = Math.random()*3;
  if (pcsecim < 1) {
    return "Taş";
} else if (pcsecim < 2){
      return "Kağıt";
} else {
    return "Makas";
}
}

console.log(oyun("Makas", bilgisayarinSecimi()));*/



/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamlayın:
1. Kilometre değerini argüman olarak alın.
2. Aldığınız bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km){
  return  km * 0.621371;
}



//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yapın:
1. Santimetre değerini argüman olarak alın.
2. Aldığınız bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(cm){
  return cm / 30.48;
}



/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımızı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yapın:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

let maymunsayisi = 5
function cocukSarkisi(maymunsayisi){
  return maymunsayisi + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!";
}

for(maymunsayisi = maymunsayisi ; maymunsayisi > 0 ; maymunsayisi--){
  console.log(cocukSarkisi(maymunsayisi));
}
      


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yapın.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(not){
  
  let a = "A aldın";
  let b = "B aldın";
  let c = "C aldın";
  let d = "D aldın";
  let f = "F aldın";

if (not <= 100 && not >= 90){
  return (a);
} else if (not <= 89 && not >= 80){
  return (b);
} else if (not <= 79 && not >= 70){
  return (c);
}  else if (not <= 69 && not >= 60){
  return (d);
} else {
  return (f);
}
}




/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yapın.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/


function sesliHarfSayaci(str) {
  return str.match(/[aeıioöuü]/gi).length
}
 let cümle = "Ali Ayşe`ye topu at."
 console.log( cümle + " cümlesinde " + sesliHarfSayaci(cümle) + " tane sesli harf var.")



/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa(){
  console.log('Kodlar çalışıyor');
  return 'as';
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla
}
