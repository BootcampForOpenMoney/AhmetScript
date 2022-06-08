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

var myBirtday = new Date("14/3/2002");
var ageDiff = Date.now() - myBirtday.getTime();
var ageDate = new Date(ageDiff);

console.log(ageDate);

var babalarGunu = new Date();
babalarGunu.setHours(0,0,0,0);
babalarGunu.setFullYear(2022);
babalarGunu.setDate(1);
babalarGunu.setMonth(4);

while(babalarGunu.getDay() != 0 ) {
    babalarGunu.setDate(babalarGunu.getDate()+1)
}
babalarGunu.setDate(babalarGunu.getDate()+7)

console.log(babalarGunu);

// Bu kısıma bakılacak tekrardan consolda dönmüyor


// var num = 22.3231312;
// val = num.toPrecision(7); // aynı zamanda numberı string halde yazdırıyor
// console.log(val);

val = Math.PI;
val = Math.round() // yazdığım sayı durumuna göre aşşağıya ya da yukarı yuvarlar
val = Math.ceil() // Sadece yukarı yuvarlama yapar
val = Math.floor()// sadece aşşağıya yuvarlama



// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var arr = ["Bmw","Merdeces","Opel","Mazda"];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

console.log(arr);

// Dizi kaç elemanlıdır ?
console.log(arr.length)

// Dizinin ilk ve son elemanı nedir ?
console.log(arr[0])
console.log(arr[3])
console.log(arr[arr.length-1])

// "Renault" değerini dizinin sonuna ekleyin.
// arr[4] = "Renault";
arr[arr.length] = "Renault";
arr[arr.length] = "Fiat";

arr.push('Toyota');

// "Toyota" değerini dizinin başına ekleyin.
arr.unshift('Seat');

// "Seat" değerini siliniz.
arr.shift('Seat');

// "Toyota" değerini siliniz.
arr.pop('Toyota');

// Dizi elemanlarını ters çevirin
arr.reverse()

// Dizi elemanlarını alfabetik olarak sıralayın.
arr.sort();

// [1,2,5,80] dizisini sıralayın.
var numbers =[1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if (a<b) return -1;
}

console.log(numbers.sort(compare)); 

// "Opel" değeri dizinin bir elemanımıdır ?
console.log(arr);
console.log(arr.indexOf('Opel'));
console.log(arr.includes('Opel'));


// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var arr3 = arr.concat(arr2);
console.log(arr3);

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(arr3.pop());
// console.log(arr3.pop());

// console.log(arr3.splice(6,2));
console.log(arr3.slice(6,8));

console.log(arr3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

var studentA = ['Yiğit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];

var students =[studentA,studentB,studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students)



const firstName='Sena';
const age = 19;
const isStudent = false;
const school = 'university';

// if(firstName === 'Sena'){
//     console.log('Merhaba Sena');
// }

// if (age === 19){
//     console.log('yaşınız 19');
// }

// if (isStudent){
//     console.log('Merhaba öğrenci');
// }else{
//     console.log('Merhaba işler nasıl');
// }


// if (age>=18){

//     if ((school == 'university') || (school == 'high school')){
//         console.log('ehliyet alabilirsiniz');
//     } else{
//         console.log('eğitim durumunuz yetersiz');
//     }

// }else{
//     console.log('ehliyet alamazsınız');
// }


// if (age > 0  && age<12 ){
//     console.log(`${firstName} is a child`);
// }else if (age >=13 && age <=19){
//     console.log(`${firstName} is a teenager`);
// }else{
//     console.log(`${firstName} is an adult`);
// }

//undefined

if (typeof id !== 'undefined'){
    console.log('id: '+id);
}else{
    console.log('no id');
}



function yasımKac(dogumYili){
    return 2022-dogumYili 
}


function emeklilikNeZaman(dogumYili,isim) {
    let yas = yasımKac(dogumYili);
    let emeklilik  = 65 - yas;

if (emeklilik > 0) {
    console.log(`${isim} emekli olamana ${emeklilik} yıl  kaldı geçmiş olsun`);
}
else {
    console.log ("zaten emekli oldun kardeş");
 } 
}
emeklilikNeZaman(1999,"ahmet");
emeklilikNeZaman(1989,"nazlı");
emeklilikNeZaman(1949,"hüseyin");

console.log(yasımKac(2002));


let ahmeoq = 12.1231;
val = ahmeoq.toFixed()
console.log(val);