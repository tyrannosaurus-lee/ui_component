// import "./style.css";
import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

// onScroll : 성능저하 요인 해결책으로 throttle, debounce
// throttle : 일정간격으로 한번씩 실행
// debounce : 마지막 한 번만 실행
// scrollingElement : 스크롤 상태와 관련된 정보를 얻을 수 있음
const onScroll = e => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;
  console.log(`${scrollTop} \n 스크롤 할때마다 스크롤 이벤트가 나타남`);
  if (scrollTop + clientHeight === scrollHeight){
    fetchMore();
  }
};
document.addEventListener("scroll", onScroll);

fetchMore();
