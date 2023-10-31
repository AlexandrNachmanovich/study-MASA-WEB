// The final purpose: we click a button, and it's letter
//    appears in the pink div


// MISSION 1: create list of all the buttons
//            using querySelectorAll
const btnList = document.querySelectorAll('.btn');
const out = document.querySelector('.out');

// MISSION 2: Create a function which uses event and writes
//         letter of the clicked button into the pink DIV

const writeLetter = (event) => {

    out.innerText += event.target.innerText;

}

// MISSION 3: Create a listener for each button for the "click"
//            event for the same function - use forEach()

btnList.forEach(btn => btn.addEventListener('click', writeLetter))