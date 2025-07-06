let obj: any = {x:0}

// obj.foo(); //TypeError: obj.foo is not a function(런타임시에 발생)
// obj();
// obj.bar = 100;
// obj = "hello";
// const n :number = obj;

//위의 코드는 컴파일 당시에 에러를 뱉지 않는다.
// obj의 타입이 any이므로 어떤 타입이든 사용이 가능하다.
//foo를 호출하기도하고 bar를 호출하기도고..

// 다만, obj.foo();에서부터 런타임 에러가 발생한다. 메서드가 존재하지 않기 때문에.


function printCode(pt: {x:number; y:number}){
  console.log("the coordinate's x value is" + pt.x);
  console.log("the coordinate's y value is" + pt.y);
}
printCode({x:3, y:7});


type Point = {
  x: number;
  y: number;
}

function printCode2(pt:Point){
  console.log("the coordinate's x value is" + pt.x);
  console.log("the coordinate's y value is" + pt.y);
}
printCode2({x:3, y:7});



//인터페이스(확장가능)
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

// const bear = getBear();
// bear.name
// bear.honey

interface Window {
  title: string
}

interface Window {
  ts: string
}

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});


// BigInt 함수를 통하여 bigint 값을 생성
// const oneHundred: bigint = BigInt(100); //ES2020이후
 
// 리터럴 구문을 통하여 bigint 값을 생성
// const anotherHundred: bigint = 100n; //ES2020이후

