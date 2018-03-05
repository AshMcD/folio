//declare the arrays
const myPerson = ['dog', 'best friend', 'partner', 'crush', 'granny', 'pop'];
const action = [' ate', ' caught', ' livetweeted',  ' gave my dog', ' vomitted on', ' lost', ' misplaced', ' ebayed', ' craigslisted', ' snapchatted'];
const myItem = ['Sex Tape', "Zika Virus" , "Alzheimer's Disease", 'Netflix and Chill', "Avian Influenza"];

//select a random item from the array and store it in a variable
/*let who = myPerson[Math.round(Math.random()*(myPerson.length-1))];
let did = action[Math.round(Math.random()*(action.length-1))];
let what = myItem[Math.round(Math.random()*(myItem.length-1))]; */

//turn the randomising of the array items into a reusable function
const randomIndex = (array) => {
    return array[
        Math.round(Math.random()*(array.length - 1))
    ];
}

const generateJoke = () => {
    return `My ${randomIndex(myPerson)} ${randomIndex(action)} my ${randomIndex(myItem)}.`;
}

//use Jquery included with Bootstrap to print the random variables in a sentance to the homepage
$(document).ready(function () {
    $('#generate').click(function () {
        $("#excusesComplete").text(generateJoke());
    });
});