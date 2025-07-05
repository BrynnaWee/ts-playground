function greet(person:string, date:Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('boski5',new Date());
//date() => string반환
//new Date() =>  객체반환
