

// 01.radianToDegree

function radianToDegree(radian){
    if (typeof radian === 'number'){
        let degree = radian * (180 / Math.PI);
        return degree.toFixed(2);
    } else {
        return "invalid input";
    }
}

// const degree = radianToDegree(10);
// console.log(degree);

// 02.isJavaScriptFile

function isJavaScriptFile(fileName){
    if (typeof fileName === 'string'){
        if(fileName.endsWith('.js')){
            return true;
        } else {
            return false;
        }
    }else {
        return "invalid file name";
    }
}

// const javaScriptFile =isJavaScriptFile('index.js');
// console.log(javaScriptFile);

// 03.oilPrice

function oilPrice(diesel, petrol, octane){
    if ( typeof diesel === 'number' && typeof petrol === 'number' && typeof octane === 'number'){
        const dieselPrice =diesel * 114;
        const petrolPrice =petrol * 130;
        const octanePrice =octane * 135;
        const total = dieselPrice + petrolPrice + octanePrice;
        return total;
    }else{
        return "invalid inputs";
    }
}
// const totalOilPrice = oilPrice(1, 0, 2);
// console.log(totalOilPrice);

// 04.publicBusFare

function publicBusFare(members){
    if (typeof members === 'number'){
        const busCapacity = members % 50;
        const restPeople = busCapacity % 11;
        const localBusPrice = restPeople * 250;
        return localBusPrice;
    }else{
        return "please input number";
    }
}
// const totalCost = publicBusFare(365);
// console.log(totalCost);

// 05.isBestFriend

function isBestFriend(friend1, friend2){
    if ( typeof friend1.name === 'string' && typeof friend2.name === 'string' && typeof friend1.friend === 'string' && typeof friend2.friend === 'string'){
        if(friend1.name === friend2.friend && friend2.name === friend1.friend){
            return true;
        } else{
            return false;
        }
    } else{
        return "please input valid name.";
    }
}

// const friend1 =  {
//     name : 'abid',
//     friend :'kamal'
// }
// const friend2 =  {
//     name : 'kamal',
//     friend : 'abid'
// }
// const checkBestFriend = isBestFriend(friend1, friend2);
// console.log(checkBestFriend);