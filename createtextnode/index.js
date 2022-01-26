function newRegister(){
    let newP = document.createElement("p")
    const userName = document.querySelector("#userName");
    let text = document.createTextNode(userName.value);
    newP.appendChild(text); // p노드가 상위요소가 되고 text라는 하위 요소를 연결하기

    const nameList = document.querySelector("#nameList");
    nameList.appendChild(newP); // p노드가 #nameList의 하위요소가 된다.
    userName.value = "";  //텍스트 필드 지우개
}