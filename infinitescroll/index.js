import "./style.css";
import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const loadMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

// onScroll : 성능저하 요인 해결책으로 throttle, debounce
// debounce : 일정간격으로 한번씩 실행
// debounce : 마지막 한 번만 실행
/*
const onScroll = e => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;
  if (scrollTop + clientHeight === scrollHeight){
    leadMore();
  }
};

// onScroll -> debounce로 바꾸기
// document.addEventListener("scroll", onScroll);
document.addEventListener("scroll", debounce(onScroll, 300));
*/

// javascript가 개입하지 않을 다른 방법이 있다면 그 방법을 고민하는것이 더 좋다.
// IntersectionObserver : 화면에 보여지는지 여부를 판단해서 
// 그때 감시하고자 하는 요소가 viewport에 들어가거나 나갈때 
// 들어왔는지 나갔는지 여부를 판단해주는 교차 영역 관리를 최적화 하는 API.
// IntersectionObserver는 자바스크립트 메인 쓰레드에서 실행되는 Event Listener가 아닌 
// 브라우저에서 별도로 마련한 API이므로 성능 저하의 우려가 적다.
const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) loadMore();
});

fetchMoreObserver.observe(fetchMoreTrigger);

loadMore();
