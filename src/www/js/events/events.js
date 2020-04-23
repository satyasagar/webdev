// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Below, write the necessary code so that clicking any "Click Me"
// element will increment its paired counter.
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.


// Your code here.


const list = document.getElementsByTagName('li')

list[0].firstElementChild.addEventListener('click', () => { increment(list[0]) } )
list[1].firstElementChild.addEventListener('click', () => { increment(list[1]) } )

const plist = document.getElementsByTagName('p')

plist[0].firstElementChild.addEventListener('click', () => { increment(plist[0]) } )
plist[1].firstElementChild.addEventListener('click', () => { increment(plist[1]) } )
plist[2].firstElementChild.addEventListener('click', (e) => { console.log(e)
    e.preventDefault
    increment(plist[2]) } )

function increment(obj){
    val = parseInt(obj.lastElementChild).innerHTML
    console.log(val);
    obj.lastElementChild.innerHTML = (val+1).toString();
}