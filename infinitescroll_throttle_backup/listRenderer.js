import getList from "./listBuilder";
import { dummyFetcher } from "./util";

const listElem = document.querySelector("#list");

const renderItem = ({ id, no, text }) => {
  const li = document.createElement("li");
  li.insertAdjacentHTML(
    "beforeend",
    `
      <div class="no">${no}</div>
      <div class="content">
        <div class="_id">${id}</div>
        <div class="text">${text}</div>
      </div>
    `
  );
  return li;
};

const renderList = async (page) => {
  const list = await dummyFetcher(getList, page);

  // DocumentFragment는 다른 노드를 담는 임시 컨테이너 역할을 하는 특수 목적의 노드이다. 
  // 가상의 노드 객체로서, 메모리상에서만 존재하는 비 문서 탬플릿으로 생각하면 된다. 
  // parentNode 프로퍼티는 항상 null이다. 
  const frag = document.createDocumentFragment();
  list.forEach((item) => frag.appendChild(renderItem(item)));
  listElem.appendChild(frag);
};

export default renderList;
