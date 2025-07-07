//If this mostly looks like uninteresting JavaScript code, that’s sort of the point. Apart from the annotations we put in place, this TypeScript code looks like JavaScript. The idea is that TypeScript’s type system aims to make it as easy as possible to write typical JavaScript code without bending over backwards to get type safety.
//타입스크립트는 자바스크립트 코드 처럼 보이기도 하지. 이게 핵심이다.
//aims : 타입 안정성을 얻기 위해 무리하지 않고 전형적인 js코드(typical JavaScript code)를 쉽게 작성할 수 있다.
function padLeft(padding: string | number, input: string): string {

  //타입가드(type guard)
  if(typeof padding == 'number') {
    return " ".repeat(padding) + input;
  }

  return padding + input;
}

//It looks at these special checks (called type guards) and assignments, and the process of refining types to more specific types than declared is called narrowing
//타입가드와 할당을 확인하고(look at)
//선언된 것보다 더 구체적인 타입으로 정제하는 과정
//이것이 narrowing임.

function padLeft02(padding: number|string, input:string):string {

  if(typeof padding === 'number'){
    //여기서 pading은 number로 좁혀짐
    return " ".repeat(padding) + input;
  }

  //여기서 pading은 string으로 좁혀짐
  //이것이 바로 Control flow analysis(제어흐름분석)
  return padding + input 
  //padding:number타입은 if문 아래까지 도달하지 않을 것을 알기에(unreachable),
  //이 다음 구문에서는 padding이 나머지 타입인 string으로 좁혀진다(narrowing) 
}

function printAll(strs: string | string[] | null ) {
  if (typeof strs === "object") {
    for (const s of strs) { // 만약 strs에 null타입 또한 설정이 된다면, 여기서 에러발생
      //'strs' is possibly 'null'.
      // js에서는 null이 object이기 때문에 타입추론시에 null이 들어오는 케이스까지 염두해 에러메시지 제공(타입추론)
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

// printAll('테스트');


//Using type predicates 서술어 이용
//js코드만 가지고 타입 내로잉이 어려울 수 있다. 
//가끔은 직접적으로 제어할 필요가 있다. 
//코드 내에서 타입이 어떻게 변환되는지
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
  //혹은
  return 'swim' in pet; //(pet객체에 swim속성 포함 여부 반환)

  //pet의 타입을 Fish로 강제변환한다.(타입단언)
  ////타입단언을 하는 이유. 그렇지 않으면 pet.swim에서 타입에러가 발생하게 되니까.(Bird타입이 있으므로.)
  //fish타입의 pet에 swim이 존재하면 true를 반환.
  //그러니까 이 함수가 true를 반환할 때, pet is Fish가 성립됨.
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) { 
  //isFish함수가 ture라면, 함수에서 정의한 타입서술(pet is Fish)에 의해, 이 구문에서 pet은 Fish타입이 된다.
  pet.swim();
} else {
  pet.fly();
}

