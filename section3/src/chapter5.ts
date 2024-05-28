/**
 * 타입 추론
 */

let a = 10; // number
let b = "hello"; // string
let c = {
  id: 1,
  name: "이은빈",
  profile: {
    nickname: "eunbinnie",
  },
};

let { id, name, profile } = c;

function func(message = "hello") {
  return "hello";
}

let d; // any
d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase();

const num = 10; // number 리터럴 타입
const str = "hello"; // string 리터럴 타입

let arr = [1, "string"]; // (number | string)[]
