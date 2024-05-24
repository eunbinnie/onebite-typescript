// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이은빈",
  nickname: "eunbinnie",
  birth: "1999.05.04",
  bio: "안녕하세요",
  location: "수원시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "hoi",
  birth: "1997.11.24",
  bio: "안녕하세요",
  location: "인천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  Korea: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
