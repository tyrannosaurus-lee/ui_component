const getRandomSeconds = () => (Math.round(Math.random() * 5) + 1) * 250;

export const randomTimer = (func, ...args) => (resolve) => {
  setTimeout(() => resolve(func(...args)), getRandomSeconds());
};

export const dummyFetcher = (method, args) =>
  new Promise(randomTimer(method, args));

// 시간지연 시켜줌

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...args) =>{
    // clearTimeout에 의해서 setTimeout으로 실행되기 전에 이미 취소가 되고 
    clearTimeout(timeoutId);
    // 다시 timeoutId이 걸린다. 취소되지 않은 마지막것만 남게 된다
    timeoutId = setTimeout(func.bind(null, ...args), delay);
  }
};
