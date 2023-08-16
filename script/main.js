//첫단계 : 변수할당하기, 동작을 적용할 요소를 담기
const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

for(let el of articles){

    el.addEventListener("mouseenter",(e)=>{
        e.currentTarget.querySelector("video").play();
        //e.currentTarge은 이벤트 리스너가 붙은 대상을 의미합니다.
        //여기서는 마우스를 올린 article이 됩니다.
        //해당 article에서 video 태그를 quertSelector로 찾아서
        //그 비디오를 play()합니다.
    });
    el.addEventListener("mouseleave",(e)=>{
        e.currentTarget.querySelector("video").pause();
    });

    el.addEventListener("click",(e)=>{

        //클릭한 article(===e.currentTarget)의 내용을 변수에 담는다.
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vid = e.currentTarget.querySelector("video").getAttribute("src");

        // console.log(vid);
        // console.log(tit);
        // console.log(txt);

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src",vid);
        //setAttribute("무엇을",무엇으로) 속성값 교체하는 메소드

        aside.classList.add("on");
        //classList하는 객체는 class에 관련된 모든 메소드들이 담긴 객체입니다.
        aside.querySelector("video").play();
        
    });
}
close.addEventListener("click",()=>{
    aside.classList.remove("on");
    aside.querySelector("video").pause();
});