const bigPic = document.querySelector("#cup");
const smallPic = document.querySelectorAll(".small");
let isOpen = false;

for(let i=0; i<smallPic.length; i++){
    // 작은 이미지 노드리스트들을 클릭을 하면  changePic()가 호출이 된다.
    smallPic[i].addEventListener("click", changePic);
}

function changePic(){
    // click이벤트가 발생한 대상(this)의 src속성을 newPic에 저장
    let newPic = this.src;
    // newPic의 값을 큰 이미지의 src속성으로 대입이 되어 큰 이미지로 나타남
    bigPic.setAttribute("src", newPic);
}

const pic = document.querySelector("#pic");
// id선택자인 pic에게 마우스가 올라가면 changePic()를 호출하고, false는 버블링을 하지 않겠다는 뜻
// 버블링이란 이벤트가 하위요소에서 발생하면 이게 상위요소까지 전파되는 형태
pic.addEventListener("mouseover", changePic, false);
pic.addEventListener("mouseout", originPic, false);

function changePic(){
    pic.src = "img/boy.png";
}

function originPic(){
    pic.src = "img/girl.png";
}

const view = document.querySelector("#view");
view.addEventListener("click", function(){
    // 상세 정보가 감춰져 있다면
    if(isOpen == false){
        // 상세 정보를 보이기
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    }else{
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
})

/* 도형의 변환 */
const mRect = document.querySelector("#rect");
mRect.addEventListener("mouseover", function(){
    mRect.style.background = "red";
    mRect.style.borderRadius = "50%";
});

mRect.addEventListener("mouseout", function(){
    mRect.style.background = "";
    mRect.style.borderRadius = "";
})
/* //도형의 변환 */