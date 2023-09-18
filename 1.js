// 1. 가장 큰 값 구하기
// 함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다.
// 배열로 전달받은 숫자 중 가장 큰 숫자와숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.

const maxValue = [1, 2, 3, 4, 5];

maxValue.sort(function (a, b) {
  return b - a;
});

console.log(`maxValue:${maxValue[0]}`);
console.log(`sortArr=${maxValue}`);
