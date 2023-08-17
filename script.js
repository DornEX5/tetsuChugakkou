

function scrollToElement(element){
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop,
    });
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
    scrollToElement(element);
}
