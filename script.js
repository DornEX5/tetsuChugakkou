// ブラウザがMicrosoft Edgeかどうかを判別
const isMicrosoftEdge = /Edge\/\d+/.test(navigator.userAgent);



function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

if (isMicrosoftEdge){

  const glElement = document.getElementById("GL");
  if (glElement) {
    glElement.remove(); // IDが「GL」の要素を削除
  }

  const helloElements = document.querySelectorAll(".hello");
  helloElements.forEach(element => {
    element.remove(); // クラスが「hello」の要素を削除
  });
}

function scrollToElement(element){
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + window.scrollY;
    const elementBottom = elementRect.bottom + window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (elementTop < window.scrollY || elementBottom > window.scrollY + windowHeight) {
      const scrollToY = elementTop - (windowHeight - elementRect.height) / 2;
      window.scrollTo({ top: scrollToY, behavior: 'smooth' });
    }
}
  

function showPoint(i,itemCount,different){
    let classTarget = ' .sum' + i;
    document.querySelector(classTarget).textContent = (itemCount + "個×" + different + "=" + itemCount*different + "点");
}

function itemSum(i,itemCount){
    let different = [0,10,100,0,100,50,1000,5000,200,0,1000];
    let answer;
    answer = itemCount*different[i];
    showPoint(i,itemCount,different[i]);
    return answer;
}

function cal() {
    let sumMain = 0;
    let sumSub = [];
    let element = document.querySelector('.back');
    let scrollElement = document.querySelector('.back .line h3');
    let reasonElement = document.querySelector('.reason');
    let topName = document.querySelector('.sumName');
    let itemCount = [];
    for (let i = 1; i <= 10; i++) {
        let classTarget = ' .num' + i + ' input[name="pointCal"]';
        
        let inputElement = document.querySelector(classTarget);
    
        if (inputElement) {
            let inputValue = parseFloat(inputElement.value) || 0;
            itemCount[i] = inputValue;
            sumSub[i] = itemSum(i,itemCount[i]);
        } else {
            console.log("Input element not found for num" + i);
        }
        sumMain+=sumSub[i];
    }
    console.log(sumMain);
    document.querySelector('.back .line h3').textContent = sumMain;

    let nameInput = document.querySelector('.name .nameContents input[name="studentName"]');
    let name = nameInput.value;
    document.querySelector('.back .sumName').textContent = name;

    let notFlower = false;
    let notSword = false;

    if(itemCount[3]>=1){
        console.log('[' + name + ']鉄の剣は作成済み。');
        notSword = false;
    }else{
        console.log('[' + name + ']鉄の剣は作成していない');
        notSword = true;
    }

    if(itemCount[9]>=3){
        console.log('[' + name + ']花は三種類集めている。');
        notFlower = false;
    }else{
        console.log('[' + name + ']花は三種類集めていない。');
        notFlower = true;
    }

    if(notFlower==true || notSword==true){
        reasonElement.style.display = 'block';
    }else if (notFlower==false && notSword==false){
        element.style.height = '200px';
        reasonElement.style.display = 'none';
        topName.style.top = '-25%';
    }

    if(notFlower==true && notSword==true){
        reasonElement.textContent = ('花も3種類ないし、鉄の剣も作っていないので退学');
        element.style.height = '300px';
        topName.style.top = '-10%';
    }else if(notFlower == true){
        reasonElement.textContent = ('花が3種類ないので退学');
    }else if(notSword == true){
        reasonElement.textContent = ('鉄の剣を作ってないので退学');
    }

    element.style.display = 'block';
    scrollToElement(scrollElement);
    if(itemCount[1]== 1 && itemCount[2]== 1 && itemCount[3]== 4 && itemCount[4]== 5 && itemCount[5]== 1 && itemCount[6]== 4 && itemCount[7]== 1 && itemCount[8]== 9 && itemCount[9]== 1 && itemCount[10]== 9){
        alert('真面目に入力して下さいね');
    }
}


function videoChange(){
  const reimeiVideoImgs =  ["hqdefault.webp", "hqdefault (1).webp", "hqdefault (2).webp","hqdefault (3).webp","hqdefault (4).webp","hqdefault (5).webp","hqdefault (6).webp","hqdefault (7).webp"];
  const reimeiVideos =  ["https://www.youtube.com/watch?v=5FuT6ArTswM", "https://www.youtube.com/watch?v=hBMa5uO0F3k", "https://www.youtube.com/watch?v=u6CtYuqSifk","https://www.youtube.com/watch?v=wVTyxIN0Kt0","https://www.youtube.com/watch?v=AqQKniqVitI","https://www.youtube.com/watch?v=kxa_6EzGEwI","https://www.youtube.com/watch?v=Z6cLMAF71W4","https://www.youtube.com/watch?v=Qh5iCGdhGww","https://www.youtube.com/watch?v=kQfDKRxrhQE"];

      // n1にランダムな値を代入
  let n1 = getRandomNumber(8);
  
  // n2にn1とは異なるランダムな値を代入
  let n2;
  do {
    n2 = getRandomNumber(8);
  } while (n2 === n1);
  
  // n3にn1とn2とは異なるランダムな値を代入
  let n3;
  do {
    n3 = getRandomNumber(8);
  } while (n3 === n1 || n3 === n2);
  
  let imgElement1 = document.querySelector('#video1 img');
  imgElement1.src = reimeiVideoImgs[n1];
  let imgElement2 = document.querySelector('#video2 img');
  imgElement2.src = reimeiVideoImgs[n2];
  let imgElement3 = document.querySelector('#video3 img');
  imgElement3.src = reimeiVideoImgs[n3];

  let linkElement1 = document.querySelector('#video1');
  linkElement1.href = reimeiVideos[n1];
  let linkElement2 = document.querySelector('#video2');
  linkElement2.href = reimeiVideos[n2];
  let linkElement3 = document.querySelector('#video3');
  linkElement3.href = reimeiVideos[n3];

}

document.addEventListener("DOMContentLoaded", function() {
    videoChange(); // 初回実行
    setInterval(videoChange, 10000);
});

let styleChange = 5000;

function styleDark() {
    let stylesheet = document.getElementById("stylesheet");
    if(styleChange % 2 == 0){
        stylesheet.href = "styleChanged.css";
    }else{
        stylesheet.href = "style.css";
    }
    styleChange++;
}