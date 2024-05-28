/**
 * unknown 타입
 */
function unknownExam() {
    let a = 1;
    let b = "hello";
    let c = true;
    let d = null;
    let e = undefined;
    let unknownVar;
    // let num: number = unknownVar;   // error
    // let str: string = unknownVar;   // error
    // let bool: boolean = unknownVar; // error
}
/**
 * never 타입
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    let bool = neverFunc();
    // let never1: never = 10;
    // let never2: never = 'string';
    // let never3: never = true;
}
/**
 * void 타입
 */
function voidExam() {
    function voidFunc() {
        console.log("hi");
        return undefined; // 가능
    }
    let voidVar = undefined;
}
/**
 * any 타입
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar; // error (never 타입은 공집합이어서)
}
export {};
