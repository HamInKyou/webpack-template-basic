const autoprefixer = require("autoprefixer");
// autoprefixer라는 패키지를 가져와서 사용하겠다.

module.exports = {
  plugins: [autoprefixer], //여기에 넣어서 내보낸다!
};

//위 코드들을 아래와 같이 간단하게도 표현 가능
//module.exports = {
//  plugins: [require("autoprefixer")],
//};
//변수에 따로 지정하고 가져다 쓰는게 아니라 그냥 바로 갖다 쓸 수 있다
