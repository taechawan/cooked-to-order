function showname(value)
{
    document.getElementById("nameC").innerHTML = "คุณ "+value
}

function order(numkapow,numgarlic,numkhaopad,numpadthai,money)
{
    let kapow = 0
    let khaopad = 0
    let padthai = 0
    let garlic =0
    let sum = 0
    let change = 0

    for(var i =0; i<numkapow ;i++){
        kapow = kapow +45
    }
    for(var i =0; i<numgarlic ;i++){
        garlic = garlic +45
    }
    for(var i =0; i<numkhaopad ;i++){
        khaopad = khaopad +50
    }
    for(var i =0; i<numpadthai ;i++){
        padthai = padthai +55
    }

    if(numkapow > 0){
        document.getElementById("finalKP").innerHTML = "ข้าวผัดกะเพรา " +numkapow+" จาน : " + kapow +" บาท"
    }else if(numkapow <= 0){
        document.getElementById("finalKP").innerHTML = numkapow
    }
    if(numgarlic>0){
        document.getElementById("finalGL").innerHTML = "ข้าวหมูทอดกระเทียม " +numgarlic+" จาน : " +garlic+" บาท"
    }else if(numgarlic <= 0){
        document.getElementById("finalGL").innerHTML = numgarlic
    }
    if(numkhaopad>0){
        document.getElementById("finalKHP").innerHTML = "ข้าวผัดกุ้ง " +numkhaopad+" จาน : " +khaopad+" บาท"
    }else if(numkhaopad <= 0){
        document.getElementById("finalKHP").innerHTML = numkhaopad
    }
    if(numpadthai>0){
        document.getElementById("finalPT").innerHTML = "ข้าวผัดกุ้ง " +numpadthai+" จาน : " +padthai+" บาท"
    }else if(numpadthai <= 0){
        document.getElementById("finalPT").innerHTML = numpadthai
    }

    sum = kapow+garlic+khaopad+padthai
    change = money - sum
    document.getElementById("sumOrder").innerHTML = "รวมเป็น "+sum +" บาท"
    document.getElementById("change").innerHTML = "เงินทอน "+change +" บาท"
    console.log(change)
}