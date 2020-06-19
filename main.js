let documentBody = document.querySelector("body")

const parentElement = document.querySelector(".katas-list")

//Kata 1//
let Kata1Div = document.createElement("div");
Kata1Div.classList.add("KataDiv")
documentBody.append(Kata1Div)
let KataTitle = document.createElement("h1")
KataTitle.classList.add("KataTitle")
KataTitle.append("Kata #1")
Kata1Div.append(KataTitle)

//Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
for (let index1 = 1; index1 <= 20; index1++) {
    let currentNumber = index1;
    //  Kata1Div.append(`${currentNumber}, `)
    Kata1Div.append(currentNumber + ", ")
}

//#2
let Kata2Div = document.createElement(`div`);
Kata2Div.classList.add(`KataDiv`)
documentBody.append(Kata2Div)
let Kata2Title = document.createElement(`h1`);
Kata2Title.classList.add(`KataTitle`)
Kata2Title.append("Kata #2")
Kata2Div.append(Kata2Title)

for (let index2 = 2; index2 <= 20; index2 += 2) {
    let currentNumber = index2;
    Kata2Div.append(`${currentNumber}, `)
}

//#3
let Kata3Div = document.createElement(`div`);
Kata3Div.classList.add(`KataDiv`)
documentBody.append(Kata3Div)
let Kata3Title = document.createElement(`h1`);
Kata3Title.classList.add(`KataTitle`)
Kata3Title.append("Kata #3")
Kata3Div.append(Kata3Title)

for (let index3 = 1; index3 <= 20; index3 += 2) {
    let currentNumber = index3;
    Kata3Div.append(`${currentNumber}, `)
}

//#4
let Kata4Div = document.createElement(`div`);
Kata4Div.classList.add(`KataDiv`)
documentBody.append(Kata4Div)
let Kata4Title = document.createElement(`h1`);
Kata4Title.append("Kata #4")
Kata4Title.classList.add(`KataTitle`)
Kata4Div.append(Kata4Title)

for (let index4 = 5; index4 <= 100; index4 += 5) {
    let currentNumber = index4;
    Kata4Div.append(`${currentNumber}, `)
}

//#5
let Kata5Div = document.createElement(`div`);
Kata5Div.classList.add(`KataDiv`)
documentBody.append(Kata5Div)
let Kata5Title = document.createElement(`h1`);
Kata5Title.classList.add(`KataTitle`)
Kata5Title.append("Kata #5")
Kata5Div.append(Kata5Title)

for (let index5 = 1; index5 <= 10; index5++) {
    let currentSquare = index5 * index5;
    Kata5Div.append(`${currentSquare}, `)
}

//#6Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let Kata6Div = document.createElement(`div`);
Kata6Div.classList.add(`KataDiv`)
documentBody.append(Kata6Div)
let Kata6Title = document.createElement(`h1`);
Kata6Title.classList.add(`KataTitle`)
Kata6Title.append("Kata #6")
Kata6Div.append(Kata6Title)

for (let currentNum = 20; currentNum >= 1; currentNum--) {
    let backNum = currentNum;
    //  Kata6Div.append(`${backNum}, `)
    Kata6Div.append(backNum + ", ")
}

//#7 Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let Kata7Div = document.createElement(`div`);
Kata7Div.classList.add(`KataDiv`)
documentBody.append(Kata7Div)
let Kata7Title = document.createElement(`h1`);
Kata7Title.classList.add(`KataTitle`)
Kata7Title.append("Kata #7")
Kata7Div.append(Kata7Title)

for (let counteven = 20; counteven >= 2; counteven -= 2) {
    let evenNum = counteven;
    Kata7Div.append(evenNum + ", ")
}

//#8 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let Kata8Div = document.createElement(`div`);
Kata8Div.classList.add(`KataDiv`)
documentBody.append(Kata8Div)
let Kata8Title = document.createElement(`h1`);
Kata8Title.classList.add(`KataTitle`)
Kata8Title.append("Kata #8")
Kata8Div.append(Kata8Title)

for (let count1 = 19; count1 >= 1; count1 -= 2) {
    let oddNum = count1;
    Kata8Div.append(oddNum + ", ")
}
//#9 Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let Kata9Div = document.createElement(`div`);
Kata9Div.classList.add(`KataDiv`)
documentBody.append(Kata9Div)
let Kata9Title = document.createElement(`h1`);
Kata9Title.classList.add(`KataTitle`)
Kata9Title.append("Kata #9")
Kata9Div.append(Kata9Title)
for (let count9 = 100; count9 >= 5; count9 -= 5) {
    let countBy5 = count9;
    Kata9Div.append(countBy5 + ", ")
}


//#10  Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let Kata10Div = document.createElement(`div`);
Kata10Div.classList.add(`KataDiv`)
documentBody.append(Kata10Div)
let Kata10Title = document.createElement(`h1`);
Kata10Title.classList.add(`KataTitle`)
Kata10Title.append("Kata #10")
Kata10Div.append(Kata10Title)

for (let count10 = 10; count10 >= 1; count10 -= 1) {
    let squareBack = count10 * count10;
    Kata10Div.append(squareBack + ", ")
}



//#11  Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let Kata11Div = document.createElement(`div`);
Kata11Div.classList.add(`KataDiv`)
documentBody.append(Kata11Div)
let Kata11Title = document.createElement(`h1`);
Kata11Title.classList.add(`KataTitle`)
Kata11Title.append("Kata #11")
Kata11Div.append(Kata11Title)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
Kata11Div.append(sampleArray + " ,")


//#12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let Kata12Div = document.createElement(`div`);
Kata12Div.classList.add(`KataDiv`)
documentBody.append(Kata12Div)
let Kata12Title = document.createElement(`h1`);
Kata12Title.classList.add(`KataTitle`)
Kata12Title.append("Kata #12")
Kata12Div.append(Kata12Title)

for (let index12 = 0; index12 <= sampleArray.length; index12++) {
    if (sampleArray[index12] % 2 === 0) {
        Kata12Div.append(sampleArray[index12] + " ,")
    }
}

//#13  Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let Kata13Div = document.createElement(`div`);
Kata13Div.classList.add(`KataDiv`)
documentBody.append(Kata13Div)
let Kata13Title = document.createElement(`h1`);
Kata13Title.classList.add(`KataTitle`)
Kata13Title.append("Kata #13")
Kata13Div.append(Kata13Title)

for (let index13 = 0; index13 <= sampleArray.length - 1; index13++) {
    if (sampleArray[index13] % 2 != 0) {
        Kata13Div.append(sampleArray[index13] + " ,")
    }
}

//#14  Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let Kata14Div = document.createElement(`div`);
Kata14Div.classList.add(`KataDiv`)
documentBody.append(Kata14Div)
let Kata14Title = document.createElement(`h1`);
Kata14Title.classList.add(`KataTitle`)
Kata14Title.append("Kata #14")
Kata14Div.append(Kata14Title)

for (let index14 = 0; index14 <= sampleArray.length - 1; index14++) {
    let finalsampleArray = sampleArray[index14] * sampleArray[index14]
    Kata14Div.append(finalsampleArray + " ,")
}


//#15  Display the sum of all the numbers from 1 to 20.
let Kata15Div = document.createElement(`div`);
Kata15Div.classList.add(`KataDiv`)
documentBody.append(Kata15Div)
let Kata15Title = document.createElement(`h1`);
Kata15Title.classList.add(`KataTitle`)
Kata15Title.append("Kata #15")
Kata15Div.append(Kata15Title)

let currentsumNumber = 0
for (let index20 = 1; index20 <= 20; index20++) {
    currentsumNumber = currentsumNumber + index20
}
// Kata1Div.append(`${currentNumber}, `)
Kata15Div.append(currentsumNumber)



//#16  Display the sum of all the elements in sampleArray.
let Kata16Div = document.createElement(`div`);
Kata16Div.classList.add(`KataDiv`)
documentBody.append(Kata16Div)
let Kata16Title = document.createElement(`h1`);
Kata16Title.classList.add(`KataTitle`)
Kata16Title.append("Kata #16")
Kata16Div.append(Kata16Title)

let sumofallElement = 0
for (let index16 = 0; index16 <= sampleArray.length - 1; index16++) {
    let sumArray = sampleArray[index16]
    sumofallElement = sumArray + sumofallElement
}
Kata16Div.append(sumofallElement)





//#17  Display the smallest element in sampleArray.
let Kata17Div = document.createElement(`div`);
Kata17Div.classList.add(`KataDiv`)
documentBody.append(Kata17Div)
let Kata17Title = document.createElement(`h1`);
Kata17Title.classList.add(`KataTitle`)
Kata17Title.append("Kata #17")
Kata17Div.append(Kata17Title)

let smallestElement = sampleArray[0]
for (let index17 = 1; index17 <= sampleArray.length - 1; index17++) {
    if (smallestElement > sampleArray[index17]) {
        smallestElement = sampleArray[index17]
    }
}
Kata17Div.append(smallestElement)

//#18 Display the largest element in sampleArray.
let Kata18Div = document.createElement(`div`);
Kata18Div.classList.add(`KataDiv`)
documentBody.append(Kata18Div)
let Kata18Title = document.createElement(`h1`);
Kata18Title.classList.add(`KataTitle`)
Kata18Title.append("Kata #18")
Kata18Div.append(Kata18Title)

let largestElement = sampleArray[0]
for (let index18 = 1; index18 <= sampleArray.length - 1; index18++) {
    if (largestElement < sampleArray[index18]) {
        largestElement = sampleArray[index18]
    }
}
Kata18Div.append(largestElement)

//#19  Display 20 solid gray rectangles, each 20px high and 100px wide.

const kata19Heading = document.createElement("h3")
parentElement.append(kata19Heading)
kata19Heading.append("Kata 19:")
const kata19output = document.createElement("div")
parentElement.append(kata19output)

for (let count = 0; count < 20; count += 1) {
    const greyDiv = document.createElement("div")
    greyDiv.setAttribute('class', 'greyBlock19')
    parentElement.append(greyDiv)
}

//#20  Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
const kata20Heading = document.createElement("h3")
parentElement.append(kata20Heading)
kata20Heading.append("Kate 20:")
const kata20Output = document.createElement("div")
parentElement.append(kata20Output)
let blockwidth20 = 105;

for (counter = 0; counter < 20; counter += 1) {
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlock20");
    greyDiv.style.width = blockwidth20 + "px";
    blockwidth20 += 5;
    parentElement.append(greyDiv);
}

//#  Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.

const kata21Heading = document.createElement("h3")
parentElement.append(kata21Heading)
kata21Heading.append("Kate 21:")
const kata21Output = document.createElement("div")
parentElement.append(kata21Output);


for (let index21 = 0; index21 < sampleArray.length - 1; index21++) {
    let blockwidth21 = sampleArray[index21];
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlock21");
    greyDiv.style.width = blockwidth21 + "px";
    parentElement.append(greyDiv);
}

//#  As in #21, but alternate colors so that every other rectangle is red

const kata22Heading = document.createElement("h3")
parentElement.append(kata22Heading)
kata22Heading.append("Kate 22:")
const kata22Output = document.createElement("div")
parentElement.append(kata22Output);


for (let index22 = 0; index22 < sampleArray.length; index22++) {
    const greyDiv = document.createElement("div");
    greyDiv.setAttribute("class", "greyBlock22");
    let number = sampleArray[index22]
    greyDiv.style.width = number + "px";
    parentElement.append(greyDiv);
    if (index22 % 2 === 0) {

        greyDiv.style.backgroundColor = "red";


    }
    else {
        greyDiv.style.backgroundColor = "grey";
    }
}

// #23, as in #21 but color the rectangles with even widths red.

const kata23Heading = document.createElement("h3")
parentElement.append(kata23Heading)
kata23Heading.append("Kate 23:")
const kata23Output = document.createElement("div")
parentElement.append(kata23Output);


for (let index23 = 0; index23 < sampleArray.length - 1; index23++) {
    if (sampleArray[index23] % 2 === 0) {
        let evenWidthred = sampleArray[index23]

        const greyDiv = document.createElement("div");
        greyDiv.setAttribute("class", "greyBlock23");
        greyDiv.style.width = evenWidthred + "px";
        greyDiv.style.backgroundColor = "red";

        parentElement.append(greyDiv);
    }
}
