//const myHeading=document.querySelector("h1");/*querySelector:見出しの参照の関数*/
//myHeading.textContent="Hello world!";
//document.querySelector("html").addEventListener("click",function(){
//    alert("っっ　つつかないで");//function():無名関数 アロー関数()=>で代用可能
    
//});
const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/firefox.jpg"){
        myImage.setAttribute("src","images/firefox2.png");
    }else{
        myImage.setAttribute("src","images/firefox.jpg");
    }
};
let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName(){
    const myName=prompt("あなたの名前を入力してください。");//prompt():ユーザにデータを入力するよう求める
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem=("name",myName);//ブラウザにnameというデータを作成しMynameを格納
        myHeading.textContent=`${myName}さん，Mozilaはかっこいいよ。`;//$()を使うときは``で囲む
        alert(myName);
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`Mozillaはかっこいいよ，${storedName}`;
}
myButton.onclick=()=>{
    setUserName();
};