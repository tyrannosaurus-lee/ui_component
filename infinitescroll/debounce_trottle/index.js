import "./style.css";
import renderList from "./listRenderer";
import { debounce } from "./util";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = e => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;
  console.log(`${scrollTop} \n스크롤하는 동안에 안나오다가 놓은 다음 0.3초 뒤에 나옴`);
  if (scrollTop + clientHeight === scrollHeight){
    fetchMore();
  }
};

document.addEventListener("scroll", debounce(onScroll, 300));
fetchMore();
