const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer = (func, ...args) => (resolve) => {
  setTimeout(() => resolve(func(...args)), getRandomSeconds());
};

export const dummyFetcher = (method, args) =>
  new Promise(randomTimer(method, args));

// debounce :
// 시간 지연을 걸어놓은 상태에서 시간지연 동안에 동일한 이벤트가 발생하면 
// 앞에꺼를 취소하고 마지막꺼를 실행
/*
export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  }
}
*/