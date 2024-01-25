var wastedTime1 = 0
let name
const mainText = document.getElementById("storyText")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

function startForestStory() {
    mainText.innerHTML = `Slowly your eyes open to see the sky hidden behind
        a leafy blanket created by the trees around you.
        As you sit up you find yourself in the middle of a forest.
        Something flashes in the courner of your vision,
        as you look over you find that it was the shimmering of water.
        Only a few feet from you sits a small pond, feeling
        your throat go dry you take a drink.`
    btn1.innerHTML = "Start walking"
    btn1.onclick
    btn2.innerHTML = "Inspect surroundings"
    btn2.onclick
    btn3.innerHTML = "Do nothing"
    btn3.onclick = doNothing
}

function doNothing() {
    ++wastedTime1
    switch(wastedTime1) {
        case 1:
            mainText.innerHTML = "The forest is gorgeous! Nothing like you've ever seen before."
            break
        case 2:
            mainText.innerHTML = "Taking it all in for a third time is even better!"
            break
        case 3:
            mainText.innerHTML = "Kind of boring with nothing going on though"
            break
        case 4:
            mainText.innerHTML = "Kinda sad that there is no birds chirping would have mad this perfect"
            break
        case 5:
            mainText.innerHTML = "Or any kind of wildlife would have been nice."
            break
        case 6:
            mainText.innerHTML = "Was that branch always like that?"
            break
        case 7:
            mainText.innerHTML = "You begin to feel something ominous, but you're unsure where the feeling is coming from"
            break
        case 8:
            mainText.innerHTML = "You figure out where the ominous feeling is coming from..."
            break
        case 9:
            mainText.innerHTML = "It's coming from all around you."
            break
        case 10:
            mainText.innerHTML = "Your soroundings blur. The feeling consumes you until nothing left. You become one with the forest"
            break
    }
    if (wastedTime1 < 10) {
        btn1.innerHTML = "Start walking"
        btn1.onclick
        btn2.innerHTML = "Inspect surroundings"
        btn2.onclick
        btn3.innerHTML = "Do nothing"
        btn3.onclick = doNothing
    } else {

    }
}


startForestStory()
// Endings
