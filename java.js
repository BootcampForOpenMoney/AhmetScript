let val;

val = String(10);

val = String(new Date ().getDate());

console.log(val);
console.log(typeof val);


var order1 = 100;
var order2 = 150;
var musteriAd = "Ahmet";
var musteriSoyadi = "Arapaslan";
var musteriTckimlik = 32281371760;
var musteriSiparisToplami = order1+order2;
var musteriCinsiyeti = "Erkek";
var musteriAdresBilgisi = "İstanbul/Pendik";
var musteriHobiler = "Spor yapmak,gezmek,sinemaya gitmek";

var totalToplam = order1+order2;
console.log(musteriSiparisToplami);

var order3 = 100.7;
var orde4 = 100.2;
var totalOrder = parseInt(order3 + orde4);

console.log(totalOrder)

// Burada bir değişkene değer verip sonrasında consolda şu anki yıldan çıkarma işlemi yapıyoruz
var yearOfBirth = 1986;

console.log(new Date().getFullYear()-yearOfBirth);

// kelime için uzunluk yazdırma consola 

var dic = "Ahmet Özcan Arapaslan"

console.log(dic.length)


// Operatörler 

let vall;
const a = 10;
const b = 5;
let c = 3;
// 1- Aritmetik Operatörler 
vall = a+b;
vall = a-b;
vall = a*b;
vall = a/b;
vall = a%b;
vall = c++;
vall = ++c;
vall = --c;
vall = c--;
console.log(c);

//2- Atama Operatörleri 
vall = a; 
vall += a; // vall = vall + a
// 3- Karşılaştırma Operatörleri 

vall = a==b;
vall = b==c; 
vall = b===c;
vall = 5 === "5";
vall = a!=b // a eşit değil mi b ye sorusu öne ünlem olunca oluyor 
 
// eşit olmaz çünkü 5 sayısının bir tanesi strign diğeri ise number 
// 3 Eşitlik olunca Hem değer kontrolü & hem de tip kontrolü yapılıyor

//4 - Mantıksal Operatörler
// && (and) kullanım olarak

vall = (a>b) && (a>c)

//   || (or )

// true || true  => true
// true || false => true 
// false || false => false

// ! (Not) 
// !true => false
//  !false => true

console.log(vall);
console.log(typeof vall);






// Ahmet Ve Sude'nin boy ve kg bilgilerini alıp daha sonra hangi
// hangi kategoride olduklarını karşılaştıracağımız bir demo uyguluma olacak operatörler ile yapılacak


// Kategoriler 

// 0-18,4 : Zayıf 
// 18,5 - 24,9 Normal 
// 25,0 - 29,9 Fazla Kilolu 
// 30,0 - 34,9 Şişman (Obez)

let indexAhmet;
let indexSude;

const kgAhmet = 88; 
const kgSude = 50;

const heightAhmet = 1.85;
const heightSude = 1.60;

indexAhmet = (kgAhmet) / (heightAhmet*heightAhmet);
indexSude = (kgSude) / (heightSude*heightSude);

console.log(indexAhmet,indexSude);

let amoiswant = indexAhmet > indexSude;

let zayif = (indexAhmet >= 0) && (indexAhmet <=18.4);
let normal = (indexAhmet >= 18.5) && (indexAhmet <=24.9);
let fazlaKilolu = (indexAhmet >= 25,0) && (indexAhmet <= 29,9); 

console.log(zayif);
console.log(normal);
console.log(fazlaKilolu);

// değişkenlere zaman atama (date)

let aa = new Date();
let birthday = new Date(2002,2,14); 
// set methods işlemlerde değişiklik yapabiliyorum  
aa.setFullYear(2020);

// get methods
console.log(aa.getDate()); // bugün ayın ne olduğunu söyler
console.log(aa.getDay());
console.log(aa.getFullYear());

console.log(aa.getFullYear()-birthday.getFullYear());
console.log(aa.getMonth()-birthday.getMonth());
console.log(aa.getDate()-birthday.getDate());

console.log(aa);
console.log(typeof aa);


// yaş hesaplama 

var myBirtday = new Date ("14/3/2002");
var ageDiff = Date.now() - myBirtday.getTime();
var ageDate = new Date(ageDiff);

console.log(ageDate);


var babalarGunu = new Date();
babalarGunu.setHours(0,0,0,0);
babalarGunu.setFullYear(2019);
babalarGunu.setDate(1);
babalarGunu.setMonth(4);

while(babalarGunu.getDay() != 0 ) {
    babalarGunu.setDate(babalarGunu.getDate()+1)
}
babalarGunu.setDate(babalarGunu.getDate()+7)

console.log(babalarGunu);








