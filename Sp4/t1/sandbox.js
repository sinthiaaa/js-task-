//part2

/*let age = 25;
let year = 2019;
// logs things to console
console.log(age,year);
//comment 
age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

//Strings
console.log("Hello world");
let email = "sss120@diu.edu"
console.log(email);

//string concatenation

let firstName = 'ttpp';
let secondName = 'jjikf';

let fullName = firstName + " " + secondName;
console.log(fullName)

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//stirng methods
console.log(fullName.toUpperCase());
let result = fullName.toUpperCase();
console.log(result , fullName);

let index = email.indexOf("@")
console.log(index);

//common string methods

 email = 'sadiasnfdf@gmkf';

 let res = email.replace('k','w');
 console.log(res);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operator + , -,/,**,%
console.log(10/20);
let re = radius % 3;
let r = pi * radius **2;
console.log(re);
console.log(r);

//order of operators - B I D M A S
let g = 5*(10-3)**2;
console.log(g);
let likes=10;

//likes = likes +1;
//likes++;
// likes--;
//likes +=10;
//likes -=5;
//likes /=2;
console.log(likes);
//NaN - not a number

//templete strings
const title = 'best reads of 2019';
const author = 'Mario';
const like = 30;

//concatenation way 
let b = 'the blocked called'+title+'by'+author+'has'+like+'likes';
console.log(b);

//template string way
let rrr = `The blog called ${title} by ${author} has ${like}likes`;
console.log(rrr);

//creating html templetes
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog us ${likes}</span>
`;
console.log(html);

//Array
let ninjas = ['sinthia','ry','hh'];
console.log(ninjas);
console.log(ninjas[2]);
ninjas[1]= 'pepsi'
console.log(ninjas);
let ages=[10,25,1000,369]
console.log(ages);
let haha = [10,'ry']
console.log(haha);
console.log(ninjas.length);


//Array method
let met = ninjas.join('.');
console.log(met);
let ind = ninjas.indexOf('hh');
console.log(ind);
let con = ninjas.concat(['joey']);
console.log(con);
let pt = ninjas.push('ken');
console.log(ninjas);
let pop = ninjas.pop();
console.log(ninjas);

//undefinied
let gogo ;
console.log(gogo , gogo+3 , `the age is ${gogo}`);

//Null
let gogoo = null;
console.log(gogoo , gogoo+3 , `the age is ${gogoo}`);

//booleans
console.log(true,false,'true','false');

//method can return 
let em = 'dfhfh@.co.uk';
let dfj = ['fy','yu','uiy'];
let gg = dfj.includes("hu");
let fdd = em.includes('@');
console.log(fdd);
console.log(gg);

//comparisn operators 
let a = 20;
console.log(a ==25);
console.log(a==30);
console.log(a!=25);
console.log(a>25);
console.log(a<25);
console.log(a>=25);
console.log(a<=25);

let u = 'shaun';
console.log(u == 'shaun');
console.log(u== 'Shaun');
console.log(u > 'crystal');




//part 3

const naes = ['shaun','mario','luigi'];
for(let i=0;i<naes.length;i++){
    //console.log(names[i]);
    let html = `<div>${naes[i]}</div>`;
    console.log(html);
}
 
 
//while loop
 
const names=['shaun','mario','luigi'];
 
let i=0;
while(i<5){
   console.log('in loop',i);
      i++;
}
let i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}
 
//do while loop
 
let i=4;
do{
    console.log('value of i is ',i);
    i++;
}while(i<5);
 
//if statement
 
const age=25;
if(age>20){
    console.log('you are over 20 yerars of age');
}
const ninjas=['saymon','ikram'.'muaj','sinthia'];
if (ninjas.length>3){
    console.log('that\'s a lot of ninjas');
}
const password='password12345';
if(password.length>=12){
    console.log('that password is mighty strong');
}else if(password.length>=8){
    console.log('that password is long enough');
}else{
    console.log('password is not long enough')
}
 
 
 
//logical operators -OR || AND &&
const password='p@ssword12345';
if(password.length>=12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password.length>=8 || password.includes('@') && password.length>=5){
    console.log('that password is strong enough');
}else{
    console.log('password is not strong enough')
}
 
 
//logical NOT(!)
let user = false;
if(!user){
    console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);
 
 
//break and continue
const scores = [50,25,0,30,100,20,10];
for(let i=0;i<scores.length;i++){
 
    if(scores[i]===0){
        continue;
    }
 
    console.log('your score: ',scores[i]);
    if(scores[i]===100){
        console.log('congrates!you got the top score.');
        break;
    }
}
 
 
//switch statements
 
const grade='D';
switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
                break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade.');
}
 
 
 
//variable &block scope
let age=30;
let name='Sam';
if(true){
    age=40;
    let name='Shaun';
    console.log('inside 1st code block: ',age,name);
    if(true){
        let age=50;
        console.log('inside the 2nd block: ',age);
    }
}
console.log('outside 1st code block: ',age,name);
*/


/*







//part 4 
/function declaration
function greet() {
    console.log('helo there')
}

greet();

// function expressions
const speak = function() {
    console.log('good day!')
};
speak();

//arguments and parameters

const speak = function(name) {
    console.log('good day ${name}')
};
speak('mario')

// passing different parameter/arguments
const speak = function(name, time) {
    console.log('good ${time} ${name}')
};
speak('mario', 'morning');

// give this parameters some different values
const speak = function(name = 'luigi', time = 'night') {
    console.log('good ${time} ${name}')
};
speak();

//returning values
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log(area);

//regular function
const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};

//arrow function
const calcarea = radius => 3.14 * radius ** 2;
//two parameters we have to use parenthesis

const area = calcArea(5);
console.log('area is :', area);

//practise arrow function
const greet = function() {
    return 'hello,world';
};
const greet = () => 'hello,world';
const result = greet();
console.log(result);

// practise arrow function 
const bill = function(products, taxs) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * taxs;
    }
    return total;
}
const bill = (products, taxs) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * taxs;
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));

//method and function 
const name = 'shaun'

//function 
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);



// method
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// callbacks & foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
myFunc(value => {
    //do something
    console.log(value);
});
// foreach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(person => {
    console.log(person)
});
//using index in second argument in arrow function

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(person, index) => {
console.log(index, person)
});
// callbacks and foreach together 
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {

    console.log('${index} - hello $ {person}');
};
people.forEach(logPerson);


// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ' ';
people.forEach(person => {
    // create html template
    html += '<li style="color: purple">${person}</li>';
});

console.log(html);
ul.innerHTML = html;







//part5

// const blogs=[
//     {title: 'why mac & cheese rules', likes:30},
//     {title: '10 things to make with marmite',likes:50}
// ],

// console.log(blogs);



let user={
    name: 'crysta',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'berlin',
    //blogs: ['why mac & cheese rules','10 things to make with marmite'],
    blogs=[
        {title: 'why mac & cheese rules', likes:30},
        {title: '10 things to make with marmite',likes:50}
    ],

    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user loged out');
    },
    
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
        })
    }

};

// console.log(user);
// console.log(user.name);

// //user.age=35
// console.log(user.age);

// const key = 'location';

// console.group(user[key]); user['location']
// user['name']='chun-li';
// console.log(user['name']);

// console.log(typeof user);

//--------------------------------------------------------

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

//--------------------------------------------------------

user.logBlogs();
console.log(this);
//math object

console.log(Math);
console.log(Math.Pi);
console.log(Math.E);

const area= 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.cell(area));
console.log(Math.trunc(area));


//random numbers

const random =Math.random();

console.log(random);
console.log(Math.round(random*100));

//primitive values

let scoreOne=50;
let scoreTwo = scoreOne;

console.log('scoreOne:${scoreOne}','scoreTwo: $(scoreTwo}');

scoreOne = 100;
console.log('scoreOne: ${scoreOne}','scoreTwo: ${scoreTwo}');

//refernce values

const userOne ={ name:'ryu',age:30};
const userTwo= userOne;
console.log(userOne, usertwo);

userOne.age =40;
console.log(userOne, userTwo);




















//part 6
// get an element by ID
//const tittle = document.getElementById('para-tittle');
//console.log(tittle);
// get elements by their class name
//const errors = document.getElementsByclassNmae('error');
//console.log(errors)
//const para = document.querySeclector('body > h1');
//console.log(para);
// get element by their tag name
//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[1]);
//const para = document.querySelector('p');
//consle.log(para.innerText);
// para.innerText ='ninjas are wesome'
//const paras = document.querySelectorAll('p');
//paras.forEach(para =>){
   // console.log(para.innerText);
   // para.innerText += 'new text';

//}}
//const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '>h2< THIS IS A NEW HTML H2</h2>'
//const people = ['hulu','lungi','jamai'];
//people.forEach(person =>){
    //content.innerHTML +='<p>${person}</p>';
//}};
//const content = document.querySelector('p');
//parseFloat.forEach()
//console.log(content.classlist);
//const link = document.querySelector('a');
//console.log(link.getAttribute('href'));
//link.setAttribute('href','http://www.thenetninja.co.uk');
//const mssg = document.querySelector('p');
//console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class','success');
//mssg.setAttribute('style','color: green;');
//const tittle = document.querySelector('h1');
//tittle.setAttribute('style','margin : 50px');
//console.log(tittle.style);
//console.log(tittle.style.color);
//tittle.style.margin = '50px';
//tittle.style.color = 'crimsom';
//tittle.style.frontSize ='60px';
//tittle.style.margin = '';
//const content = document.querySelector('p');
//console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('success');
const paras = document.querySelectorAll('p');
paras.forEach(p=> {
  //console.log(p.innerText);
  if(p.textContent.includes('error')){
      p.classList.add('error');
  }
  if(p.innerText.includes('success')){
      p.classList.add('success');
  }
 } );
 const tittle =document.querySelector('.tittle');
 
 tittle.classList.toggle('test');
 tittle.classList.toggle('test');
*/

