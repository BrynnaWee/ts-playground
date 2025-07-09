/**
 * type alias : 함수 또한 타입 별칭으로 지정 가능
 * */

//함수의 일반적인 타입 지정
type GreetFunction = (param: string) => void;


//간단한 함수에서는 타입추론을 통해 리턴 타입이 정해지므로 따로 명시하지 않은 것임.
function greeter (fn: GreetFunction) {
  fn('hello');
}



/**
 * Call Signatures
 */

//In JavaScript, functions can have properties in addition to being callable.
//함수는 호출기능 이외에도, 프로퍼티를 가질 수 있다.
//함수는 일급 객체(first-class object) 이기 때문.

type ArgsFnType = {
  description: string;
  (args: number): boolean; //object내부에서 메서드 타입 형태
}

function foo(fn: ArgsFnType) {
  console.log( fn.description + ":" + fn(6));
}


function myFunc (param: number) {
  return param > 3;
}

myFunc.description = 'default description';

foo(myFunc); //실행결과 'default description:true'



// Function Type Expression
type Handler1 = (event: Event) => void;

// Call Signature(case1.타입객체 자체가 callable )
type Handler2 = {
  (event: Event): void;
}
type Handler3 = {
  (text: string): void;
}

// Call Signature(case2. 메서드만 callable )
type Handler4 = { 
  prop: string,
  (event: Event): void;
}


//(case1.타입객체 자체가 callable )
//type이든 interface이든 객체 안에 메서드 하나만 정의되어 있으면,
//Handler2가 callable이 된다.
//그러므로 아래와 같이 사용가능

const newFunc01:Handler2 = (ev) => {
  if(!ev) return;

  switch(ev.type){
    case 'EV_NAME01':
      console.log('이벤트1');
      break;
    default : 
      console.log('유효한 이벤트가 아닙니다.')
  }
}

const EV_TEST = new CustomEvent('EV_NAME01');
newFunc01(EV_TEST); 

//혹은 아래와 같이 타입단언으로 사용 가능
const newFunc01_2 = ((ev) => {
   if(!ev) return;

  switch(ev.type){
    case 'EV_NAME01':
      console.log('이벤트1');
      break;
    default : 
      console.log('유효한 이벤트가 아닙니다.')
  }
}) as Handler2;


//(case2. 메서드만 callable )
//다른 파일이나 모듈,라이브러리, 런타임에 할당하는 함수에 타입 지정
declare const newFunc03:Handler3;

(window as any).newFunc03 = (text: string) => {
  console.log(text);
};


//외부 라이브러리를 가져와 사용할 때 
declare const gtag: (command: string, ...args: any[]) => void;

gtag('config', 'GA_MEASUREMENT_ID');



/**
 * Construct Signatures (구성자 시그니처)
 */



