// object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이은빈",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
