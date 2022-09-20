"use srict";

// -----FOOR-LOOP ----

// for(i=0; i<40; i++)

// console.log('baxa');

// const names=['baxa', 'sardor', 'kamol' ]

// for( let i=0; i<names.length; i++)

// console.log(names[i].toUpperCase())





//For loop- har biri uchun masalan arraylarda
// For loop - bu biron bir ish harakatni qayta va qayta bajaradi , chekarasiz lekin chegara quish kerak 

//(let i=0; i<10; i++ ) hisoblab turuvchi

// const baxa = ['ahror', 'sardor' ,'donyor']

// for(i=0; i<baxa.length ; i++){
//     console.log(baxa[i]);
// }

//------------------------------------------------------------------

//-----switch case-------

// const baho ="C"

// switch(baho){

//     case "A":
//     console.log("Sizning baxyongiz A");
//     break

//     case "B":
//     console.log("Sizning baxoyingiz B");
//     break

//     case "C":
//     console.log('Sizning baxoyingiz C');
//     break

//     case "D":
//     console.log('Sizning baxoyingiz D');
//     break

//     default:
//     console.log("Notugri javob");

// }

//-----------------------------------------------------

//--amaliyot--

// const ism=prompt('Ismingizni kiriting:')

// const yosh=+prompt('Yoshingizni kiriting:')

// const result =`Qadirli ${ism}.Siz ${2022-yosh}yilda tugulgansiz`

// alert(result)

//--------------------------------------------------------

// const ism=prompt('Ismingizni kiriting')

// const ismlar=["baxa" ,"sardor", "akmal" ,"nodir"]

// if(ismlar.includes(ism)){
// alert("ha shunday ism bor 🥳");

// }else{
//     alert("munday ism yoq 😕");
// }

//---------------------------------------------------

// const viloyatNomi = prompt('Qaysi viloyat kerak ?')

// switch (viloyatNomi) {
//   case "Farg'ona":
//     alert("Farg'ona viloyatida 2 mln aholi bar")
//     break
//   case 'Andijon':
//     alert('Andijon viloyatida 1.5 mln aholi bar')
//     break
//   case 'Namangan':
//     alert('Namangan viloyatida 1 mln aholi bar')
//     break
//   default:
//     alert(`Hozircha ba'zada ${viloyatNomi} viloyat mavjuda emas`)
// }

//--------------------------------------------------------

// const belgilar = prompt('Nimadirlar yozing...😊')

// let meyor = 20

// if (belgilar.length > meyor) {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, lekin hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdiz. Bu meyoridan ${belgilar.length - meyor}ta ko'p.`,
//   )
// } else {
//   alert(
//     `Siz ${meyor}ta belgi kiritishingiz mumkin, va hozirda siz ${
//       belgilar.length
//     }ta belgi kiritdiz. Yana ${
//       meyor - belgilar.length
//     }ta belgi kiritishiz mumkin.`,
//   )
// }

//----------------------------------------------------------------

//-----------Function-----------------------

//---function declaration

// function sayHello(){
//     console.log("Salom qalesan");
// }

// sayHello() //farqi yoq

// //---function expression

// const sayByeBye = function(){

//     console.log("hayr hayr ")
// }

// sayByeBye()//tepasida ishlamydi

// //---arrow function

// const nice = () =>{
//     console.log("this arrow function");
// }

// nice() //tepasida ishlamydi

//---------------------------------------------

// ---argumentlar va parametlar--
// const sayHello = function(name, day){
//     console.log(`Hayrli ${day} ${name} `);

// }

// sayHello('baxa' ,'tun')

//-----Arrow function-----

// const greet =function(ism){
//     return `hello ${ism}`
// }

// const greet =(ism) =>{
//     return `hello ${ism}`

// }
// const result=greet('baxa')

// console.log(result);
//--------------funtion and metods----------------------------

// const ism ="baxa"

// ///function
// const baxa =() => "hello"
// const result =baxa()
// console.log(result);

// //metods

// const res = ism.toUpperCase()
// console.log(res);

///----------

// function calcAge(birthdDay, firstName ) {

// console.log(`${firstName} siz ${aga} yoshga kirdingiz`);

// }

// const age=calcAge(2004,'baxa')
// console.log(age);

//------for each------------------

// const ismlar=['Ahror', 'Malik' , 'Sardor', 'Baxa' ];
// const newIsmlar=["baxa",'saydullo']

// ismlar.forEach(function(ism){

//   const newIsm=ism.charAt().toUpperCase() +ism.slice(1).toLowerCase() +'ake'

//   console.log(newIsm);
//   newIsmlar.push(newIsm)
// } )

// console.log(newIsmlar);

//----bu for loop edi-----
// for (let i=0; i<ismlar.length; i++){
//     console.log(ismlar[i])

// }

//-------------------------------------------------------

//-----------------object--------------

// const user = {

//     name:'Baxa',
//     age:18,
//     email:'baxrullo37@gmail.com',

//      login:function(){
//         console.log('siz bu saytga kirdingiz');

//      },

//      speak:function(){

//       console.log(this)
//       console.log('I can speak:');
//       this.langs.forEach((lang) => {
//         console.log(lang);
//       });

//     }

// }

// user.speak()

//-------object array ------

// const  kinolar=[

//     {name:'Avatar', likes:'450' },
//     {name:'Hary Poter', likes:'150' },
//     {name:'Gargamel', likes:'750' },
//     {name:'Sherlock', likes:'250' },

// ]

// kinolar.forEach((kino) =>{
//     const result =`Kino nomi ${kino.name} , likelar soni ${kino.likes}`
//     console.log(result);

// })

//------dom--------

// function btn() {
//     document.getElementById("demo").style.backgroundColor = "red";

// }

//----textContent---

// const title = document.getElementById('title')
// console.log(title.textContent);

//---textContent
// const title = document.getElementById('title')

// title.textContent += ' New text'

// const listItem = document.querySelectorAll('.list-item')

// listItem.forEach((item) =>{

//  item.textContent +=' darslari'

// })

//--innerHtml----

// const listItem = document.getElementById('title')

// listItem.innerHTML +='<i> Project</i>'

// const names =['Ahror', 'Sardor', 'Doniyor' ]

// const ol = document.querySelector('ol')

// names.forEach((name) =>{

//     ol.innerHTML +=`<li>${name}</li>`

// })

// const link =document.querySelector('a')

// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://yandex.uz/')

// link.textContent = 'Yandex'

// link.setAttribute('style' , 'color: red')

// link.style.color ="blue"

// ------add , remove , classList-------



// const content = document.querySelector("p");



// content.classList.add("success");

// content.classList.remove("success");

// content.classList.add('error')

// console.log(content.classList);


//----------------

// const para = document.querySelectorAll("p")

// para.forEach((text) => {


//     if(text.textContent.includes('success')){
//         text.classList.add('success')
//     }

//     if(text.textContent.includes('error')){
//         text.classList.add('error')
//     }


// })



// const heading = document.querySelector('h1')

// heading.classList.toggle('success')

// heading.classList.toggle('success')






//-------Parent.Children va Sibling elementlar


// const article = document.querySelector('article')

// console.log(article.children);

// Array.from(article.children).forEach((text) =>{

//     text.classList.add('article-child')
// })




// const title = document.querySelector('h2')

// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);




//-------adEventListener eventlar ---Hodisalar---


// const button = document.querySelector('button')

// button.addEventListener( 'click', () =>{

//     console.log('You are clicked me');
// })



//-------------


// const items = document.querySelectorAll('li')


// items.forEach((item) =>{
 

//     item.addEventListener('click', () => {
//         console.log("Item clicked")
//     })
// })








// //===selector plugin======

// const $ = function (selector){
//     return document.querySelector(selector)

// };


// const $a = function (selector){
//     return document.querySelectorAll(selector)

// };



// //======= Create Element ====//

// const createElement =function (tagName, className , textContent){

//     const newElement = document.createElement(tagName)
//     newElement.setAttribute('class', className)

//     newElement.innerHTML=textContent
//     return newElement  

// }

// const   ul   =document.querySelector('ul')
// const button =document.querySelector('button')
    

// button.addEventListener('click', () => {

    // ul.innerHTML +='<li>Something new text </li>' ---  //vaqtinchalik element yaratadi refresh berganda uchib ketadi



//     const li = document.createElement('li')              //js da element yaratadi
//     li.textContent = 'Something new text '      
    

//     ul.appendChild(li) //li ulning bolasi va ulga li qushilyapti . Pastidan qushiladi
    
//     ul.prepend(li) // tepasida qushadi
   
    
// })








// const button = document.querySelector('button') 


// button.addEventListener('click' , (e) =>{
//     const li = document.createElement('li')
//     li.textContent = "baxa aka qalesiz"
// })



// const items =document.querySelectorAll('li')

// items.forEach((item) =>{
//     item.addEventListener('click' , (e) =>{
//         e.target.remove()
//     })
// })


// const ul = document.querySelector('ul')

// const button = document.querySelector('button')

// button.addEventListener('click' ,()=>{
//     const li =  document.createElement('li')
//     li.textContent ='baxa aka'
//     ul.appendChild(li)
// })




// const button = document.querySelector('button')

//      ul =document.querySelector('ul')


// button.addEventListener( 'click' , ()=> {
//      const li = document.createElement('li')
//      li.textContent = 'hello evervone'

//      ul.prepend(li)
// })


// const items = document.querySelectorAll('li')

// items.forEach( (item) => {
     
 

// })\








// ----- getAttribute bu = qiymatini kurib beradi . SetAtribute bu esa urnini almshtirb qushib beradi

// const link = document.querySelector('a')

// console.log(link.getAttribute('href'));// href atributini qiymatini olish uchun qavsni ichida 

// link.setAttribute('href',"https://yandex.ru") //hozir yandex saytiga uzgartirdik
   
///---------------------------------------------------------------------------------------




//for each ----  bu funksiani har bir elementni uchun bittadan ishlab chiqadi -- for loop uxshaydi 


// ismlar.forEach( (ism) =>{
//     console.log(ism.trim());        // trim - orasida bush joy qoldirmaydi
// })



// ismlar.forEach( (ism , i) =>{    /// hozir for each ichidagi colaback function hisoblanadi 
//     const newIsm =ism.charAt().toUpperCase() + ism.slice(1).toLowerCase() + ' ake' /// charArt() ---bu yani bosh harfini olib beradi kursatadi 
//     yangiIsmlar.push(newIsm)
   
//     console.log(newIsm,i); /// hozir bu yerda <- i-> yani indexni anglatadi bu yerga hoxlagan noma kiritishimiz mumkun ,, positsyasini qushib chiqaradi yani qaysi urinda turushi
// })


// console.log(yangiIsmlar); // bu function tashqarisida chiqish kerak  bulmasa har bitta harf uchum chiwarvoradi


 //                 --- object --- 


//  const user = {
//     name: 'baxa',
//     age: 18 ,
//     location:'Uzbekistan' ,
//     lang:['english', 'uzbek', 'russian'] ,
//     progammingLang:['Html', 'Css', 'JavaScript'] ,
    

//  }


//  console.log(user);

//  console.log(user.age);   // userni ichidagi age yani yoshni kursatadi

//  console.log(user['age']); //shnaqa qilib yozsa ham buladi








 ///------return --- funksiyada  ishlatiladi endi console.log urnida ishlatsak buladi .{}-- bir funksiya ochtik lkn u funksiyada skope boladi  va bizga return yordam beradi . Return bilan biz usha funksiyani boshqa narsga chaqirib olishimiz mumkun yani boshqa funksiya yoki biron bir elementga 



//  const hisobla = function(qush){
//     const hisob = 2*2*qush
//     return hisob

//  }



//  const a =hisobla(5)

//  console.log(a);




//  const button = document.querySelector('.btn')

//  const ul = document.querySelector('ul')

 


//  button.addEventListener('click', (e) => {
    
   
 
//  e.target.classList.toggle('btn')

//  body.style.color='red'



//  })

 


// const yosh =+prompt("ysohingiz nechida")

// if(yosh>18){
//    alert("Hush kelibsiz")
// }else{

//    alert("xali patsansan")
// }




//forEach - hammm elementni olib bitta qiladi 



// const baxa = function(ake){
//    const age = 2 + ake + 3
//   console.log(age);
// }

// const a = baxa(5)

// console.log(a);]


// const aka = (ism ,familya)=>{
//    return `hello ${ism} ${familya}`
// }

// const a = aka('Baxrullo', "Xalilov")

// console.log(a);



// const user = ism  =>{
//    return `Hello ${ism} `
// }

// const baxa = user('Baxrullo' , "Xalilov")

// console.log(baxa);



// const ism = "baxrullo23232"

// const regEX = /[a-zA-Z0-9]{6,12}$/  // 

// // --- /^ $/ qatiylik belgisi . {} -- qiymat uchun masalan {6,12} minimali oltita , maximal 12 ta 

// const result=regEX.test(ism)

// console.log(result);`






   ///  --- Submit -------


//    const singupForm = document.querySelector('#signup-form')

//    const username =document.querySelector("#username")   


//    singupForm.addEventListener('submit', (e)=>{
//     e.preventDefault()    // Submit buganda sahifa yangilanip ketmaydi



//     console.log(username.value);  // hozir usernamni valuesiga tenglayapmiz
//    })



// const signUp =document.querySelector('#signup-form')

// const username = document.querySelector('#username')

// const ul = document.querySelector('ul')


// signUp.addEventListener("submit" , (e) =>{
//     e.preventDefault()
 

// ul.innerHTML+=username.value
    

      

// })



// const ism = 'Baxa'
// const age = "18"

// localStorage.setItem('name' , 'ism');

// localStorage.setItem('yosh' , 'age ')






// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(json =>console.log(json))\





// const ism = 'baxa'
// localStorage.setItem('name' , ism)  //bu local storage





// =------regEx----------- 


const ism = 'baxa19'

const regEX= /^[a-zA-Z0-9]{6,12}$/      // a-z gacaha , A-Z gacaha , 0-9 gacha , {6,12} minimal 6ta bulsin yani  6 harfdan ortiq bolsin  12maximal 12tadan oshmasin 

const result = regEX.test(ism)  //  test -- tekshirib beradi 

console.log(result);