



var maxProfit = function(prices) {
    
    let answer=0;
    for(let i=0;i<prices.length;i++){
        for(let j=i+1;prices.length;j++){
            if(prices[i]-prices[j]>answer){
                answer=prices[i]-prices[j];
                
            }
 
        }
    }
    return answer;


};

console.log(maxProfit([7,1,5,3,6,4]));