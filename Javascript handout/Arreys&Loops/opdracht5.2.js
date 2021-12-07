
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
const dutchSports1 = "Hockey";
console.log(dutchSports1 === "Hockey");

for (const element of dutchSports) {
    console.log(element);// b For of loop
}

// for (dutchSports1 in dutchSports) {
//     console.log(`Dus jouw ${dutchSports1} is niet de mijne.`)
// }


// // c log 20 getallen
// let numbers = 0;
// do {
//     numbers += 1;
//     console.log(numbers);
// } while (numbers < 20);// herhaal 20 x


//d nested loop 1 tm 10
// const v = 0;
const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
// const numberList1 = [(2, 20)];

for (let numberList = 3; numberList < 11; numberList++);

//1)
for (let numberList = 1; numberList < 11; numberList++) {
    console.log(numberList);
}

//e) 2  nested loop 1 tm 20
for (let numberList1 = 2; numberList1 < 21; numberList1++) {
    console.log(numberList1);
}
// nested loop 1 tm 30
for (let numberList2 = 3; numberList2 < 31; numberList2++) {
    console.log(numberList2);
};

//f) Fibonnaci
const number = [0,1];
let number1 = 0, number2 = 1, arrayFibo;



for (let number = 1; number < 50; number ++) {
    console.log(number1);
    arrayFibo = number1 + number2;
    number1 = number2;
    number2 = arrayFibo;
}
console.log(number);

// for (let arrayFibo = 0; arrayFibo < 50; arrayFibo++) {
//     console.log()
// }

// g) Bubblesort
let arrBubleSort = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

const bubbleSort = array => {
    var length = array.length;
    console.log([bubbleSort]);
    //Number of passes
    for (var i = 0; i < length; i++) {
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                var tmp = array[j];  //Temporary variable to hold the current number
                array[j] = array[j + 1]; //Replace current number with adjacent number
                array[j + 1] = tmp; //Replace adjacent number with current number
            }
        }
    }
    return array
}
console.log(bubbleSort(arrBubleSort));