const currentPrice = document.querySelector("#currentPrice");
const initialPrice = document.querySelector("#initialPrice");
const NumOfStocks = document.querySelector("#NumOfStocks");

const TellMeBtn = document.querySelector("#checkBtn");

const output = document.querySelector("#output");
console.log(output)


TellMeBtn.addEventListener("click",()=>{
    calculateLossOrProfit(initialPrice.value,NumOfStocks.value,currentPrice.value
    )})


function calculateLossOrProfit(initial, quantity, current) {

    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentAge = (loss / initial) * 100;
        output.innerText=`Your loss is ${loss} rupees and your loss percentage is ${lossPercentAge}%`
        


    }
    else if (initial < current) {
        let profit = (current - initial) * quantity;
        let profitPercentAge = (profit / initial) * 100;
       output.innerText=`Your profit is ${profit} and your profit percentage is ${profitPercentAge}%`
    }
    else {
    output.innerText=`No pain no gain,embrace risk gain money!!`

    }

}


