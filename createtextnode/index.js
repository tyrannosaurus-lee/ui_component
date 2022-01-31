function newRegister(){
    let newP = document.createElement("p")
    const userName = document.querySelector("#userName");
    let newText = document.createTextNode(userName.value);
    newP.appendChild(newText); // p노드가 상위요소가 되고 newetxt라는 하위 요소를 연결하기

    const delBtn = document.createElement("span"); // 새로운 버튼을 추가
    let delText = document.createTextNode("X") // 새로운 텍스트 노드를 추가
    delBtn.setAttribute('class', 'del'); //버튼에 class선택자 속성을 추가
    delBtn.appendChild(delText) //텍스트 노드가 button하위요소로 연결하기
    newP.appendChild(delBtn); //delBtn을 p요소의 하위요소로 만들기

    const nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]);  //p요소를 #nameList의 맨 앞에 추가
    //nameList.appendChild(newP); // p노드가 #nameList의 하위요소가 된다.
    userName.value = "";  //텍스트 필드 지우개

    const removeBtns = document.querySelectorAll(".del");
    // removeBtns 즉, "x"의 전체를 반복한다.
    for(let i=0; i<removeBtns.length; i++){
        removeBtns[i].addEventListener('click', function(){
            // #nameList를 의미를 하게 되는 것.
            // span태그의 부모가 p이고 p의 부모가 #nameList이기 때문
            console.log('click');
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode); //p태그를 삭제함
            }
        })
    }
}