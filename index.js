

const bank = []

const odds = []

const evens = []

function addToBank(number) {
    bank.push(number);
    
}

function sort(){
const number = bank.shift()
if (number % 2 === 0) {
   evens.push(number);
}
else odds.push(number);
}
function sortOne(){
    sort();
}
function sortAll(){
    while  (bank.length <= 0) {
   sort(); }
}
render();

function numberForm() {
    

const $form = document.createElement("form");
$form.innerHTML = ` <label>
Add a number to the bank
<input type="text" name="number" type="number">
</label>
<button type="button" id="Add Number">Add Number</button>
        <button type="button" id="Sort-One">Sort 1</button>
        <button type ="button" id="Sort-All">Sort All</button>
`;
$form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData($form)
   const number = data.get("number") 

   if (number === ""){
    return;
   }
   addToBank(Number(number))
})

return $form;
}
function numberInBank(number) {
    const $span = document.createElement("span");
$span.textContent = number;
return $span}
function numberBank(label, number) {
    const $section = document.createElement("section");
$section.innerHTML = `
<h2>${label}</h2>
<output></output>
`;

const $numbers = number.map(numberInBank)

$section.querySelector("output").replaceChildren(...$numbers);
return $section
}

//button
function render (){
const $app = document.querySelector("#app");
 $app.innerHTML = `
<h1>Odds and Events</h1>
<numberForm></numberForm>
<numberBank id = "bank"></numberBank>
<numberBank id = "odds"></numberBank>
<numberBank id = "evens"></numberBank>
`;
$app.querySelector("numberForm").replaceWith(numberForm());
$app.querySelector("numberBank#bank").replaceWith(numberBank("Bank", bank));
$app.querySelector("numberBank#odds").replaceWith(numberBank("Odds", odds));
$app.querySelector("numberBank#evens").replaceWith(numberBank("Evens", evens));
}
render();