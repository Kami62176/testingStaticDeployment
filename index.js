let username
let pronoun
const mainText = document.getElementById("storyText")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
document.getElementById("btnStart").onclick = startGame
document.getElementById("btnRestart").onclick = restartApp
document.getElementById("btnReplay").onclick = replayGame
document.getElementById("btnVictory").onclick = restartApp


var discoveredShack = false
var discoveredLake = false
var hasPotion = false
var checkedShack = false
let killedtrees = false
let riddlerMet = false
let visitedBlueLake = false


function startGame() {
    let nameInput = document.getElementById("nameField").value
    let pronounInput = document.getElementById("pronounField").value
    if (!nameInput || !pronounInput) {
        let errorMessage = document.getElementById("errorMessage")
        errorMessage.textContent = "Please fill out both fields before playing"
        return
    }
    document.getElementById("start-screen").style.display = "none"
    document.getElementById("main-game").style.display = "block"
    username = nameInput
    pronoun = pronounInput
    startForestStory()
}

// The beginning
function startForestStory() {
    mainText.innerHTML = `Slowly your eyes open to see the sky hidden behind
        a leafy blanket created by the trees around you.
        As you sit up you find yourself in the middle of a forest.
        Something flashes in the corner of your vision,
        as you look over you find that it was the shimmering of water.
        Only a few feet from you sits a small pond, feeling
        your throat go dry you take a drink.`
    btn1.innerHTML = "Inspect surroundings"
    btn1.onclick = forestInspect
    btn2.innerHTML = "Do nothing"
    btn2.onclick = doNothing
    btn3.innerHTML = "Start walking"
    btn3.onclick = findShack
    btn4.innerHTML = ""
    btn4.onclick = null
}

// FIRST STORY LAYER
function forestInspect() {
    mainText.innerHTML = `As you begin to look around you to some clue
        as to where you are, you find that the forest is immense and 
        with no ending in sight. While trying to discern some clue from 
        your soroundings you begin to feel something. You reconize this 
        feeling as something watching you. It seems to be coming from the 
        trees. They are all watching you. Silently.`
    btn1.innerHTML = "Stare back"
    btn1.onclick = mesmerizingEyes
    btn2.innerHTML = "Attack them"
    btn2.onclick = attackTrees
    btn3.innerHTML = "Get out of there!"
    btn3.onclick = discoveredShack? shack : findShack
    btn4.innerHTML = ""
    btn4.onclick = null
}

let wastedTime1 = 0
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
        btn1.innerHTML = "Inspect surroundings"
        btn1.onclick = forestInspect
        btn2.innerHTML = "Do nothing"
        btn2.onclick = doNothing
        btn3.innerHTML = discoveredShack? "Go to Shack" : "Start walking"
        btn3.onclick = discoveredShack? shack : findShack
        btn4.innerHTML = ""
        btn4.onclick = null
    } else {
        wastedTime1 = 0
        endScreen()
    }
}

function findShack() {
    discoveredShack = true

    mainText.innerHTML = `Making your way through the forest you eventually find something different than trees. A small shack sits cosily within 
        a small clearing. The shack made entirely of wood looks old and abandoned. Moss grows on its dilapitaed walls, a mess of miscelainous items 
        lay scattered around the shack. You stop at the edge of the clearing pondering over your next actions.`
    btn1.innerHTML = "Peer through shack window."
    btn1.onclick = checkShack
    btn2.innerHTML = checkedShack? 
        (hasPotion? "" : "Sneak some Potion.") : 
        "Enter Shack."
    btn2.onclick = hasPotion? null : enterShack
    btn3.innerHTML = discoveredLake? "Go to Lake." : "Continue walking.";
    btn3.onclick = discoveredLake? lake : findLake;
    btn4.innerHTML = "Back to Trees"
    btn4.onclick = trees
}

// SECOND STORY LAYER
function findLake() {
    discoveredLake = true

    mainText.innerHTML = `After many hours of journey threw what feels 
        like an endless forest you stumble upon a huge, mesmerizing, saphire 
        blue lake. Feeling an inviting aura you walk up to the shore of the 
        lake, taking a sip. The water is warm and tastes especially sweet after 
        the long journey. Deciding to take a momentary rest you sit down and 
        rest your weary legs. You get the feeling going any farther is a bad idea.`
    btn1.innerHTML =  killedtrees ? "Play a game in your head": "" 
    btn1.onclick = killedtrees ? mindPuzzle : null
    // if you kill the trees before discovering the lake you have a chance to play a mind puzzle which will lead to 
    // an alternative ending
    btn2.innerHTML = ""
    btn2.onclick = null
    btn3.innerHTML = "Walk farther..."
    btn3.onclick = getLost
    btn4.innerHTML = "Go back to Shack."
    btn4.onclick = shack
}

function trees() {
    mainText.innerHTML = `You walk back into the trees, back to where you awoke. You still have 
        an uncomfortable feeling here.`
    btn1.innerHTML = "Inspect surroundings"
    btn1.onclick = forestInspect
    btn2.innerHTML = "Do nothing"
    btn2.onclick = doNothing
    btn3.innerHTML = discoveredShack? "Go to Shack" : "Start walking"
    btn3.onclick = discoveredShack? shack : findShack
    btn4.innerHTML = ""
    btn4.onclick = null
}

function shack() {
    mainText.innerHTML = `You once again approach the the old run-down shack. 
        Nothing has changed.`
    btn1.innerHTML = "Peer through shack window."
    btn1.onclick = checkShack
    btn2.innerHTML = checkedShack? 
        (hasPotion? "" : "Sneak some Potion.") : 
        "Enter Shack."
    btn2.onclick = hasPotion? null : enterShack
    btn3.innerHTML = discoveredLake? "Go to Lake." : "Continue walking.";
    btn3.onclick = discoveredLake? lake : findLake;
    btn4.innerHTML = "Back to Trees"
    btn4.onclick = trees
}

function mesmerizingEyes() {
    mainText.innerHTML = `As you begin to look back at the trees you find that they actually
    have eyes in the barky surfaces. They are beautiful and they are all
    looking at you, and you find yourself looking straight at them. Unable to
    look away. The eyes begin to spin. You feel dizzy. Your vision fades to black.`
    setButtonOnClicks(null, null, startForestStory, null)
    btn3.innerHTML = "Next"
}

function attackTrees() {
    if (!hasPotion) {
        treeDeath()
    } else {
        killedtrees = true
        mainText.innerHTML = `Pouring a small anmount of the potion onto the roots
            of the strange tree. The affected trees fade away and you feel as if an energy has weaken.
            as if the world has changed.`
        btn1.innerHTML = "Inspect surroundings"
        btn1.onclick = forestInspect
        btn2.innerHTML = "Do nothing"
        btn2.onclick = doNothing
        btn3.innerHTML = discoveredShack? "Go to Shack" : "Start walking"
        btn3.onclick = discoveredShack? shack : findShack
        btn4.innerHTML = ""
        btn4.onclick = null
    }
}

// THIRD STORY LAYER
function lake() {
    mainText.innerHTML = `You take the long walk back to the lake, still unsure
        that going any futher is a good idea. What do you do?`
    btn1.innerHTML = "Walk around the lake"
    btn1.onclick = meetRiddler
    btn2.innerHTML = "Peer into the lake"
    btn2.onclick = peerIntoLake
    btn3.innerHTML = "Ignore lake and head another way"
    btn3.onclick = getLost
    btn4.innerHTML = "Go back to Shack."
    btn4.onclick = shack
}

function checkShack() {
    mainText.innerHTML = !checkedShack? `You walk up to the small house and take a peek 
        through the window to see the contents of the place. Within the 
        small run down shack you see a big metal pot. Something within is 
        boiling making strange swirling steam above the cauldren. You reconize 
        this as some form of witch craft.` : `You already know what's in there,
        let's not risk getting caught.`
    checkedShack = true
    btn1.innerHTML = "Peer through shack window."
    btn1.onclick = checkShack
    btn2.innerHTML = checkedShack? 
        (hasPotion? "" : "Sneak some Potion.") : 
        "Enter Shack."
    btn2.onclick = hasPotion? null : enterShack
    btn3.innerHTML = discoveredLake? "Go to Lake." : "Continue walking.";
    btn3.onclick = discoveredLake? lake : findLake;
    btn4.innerHTML = "Back to Trees"
    btn4.onclick = trees
}

function enterShack() {
    if (checkedShack) {
        hasPotion = true
        mainText.innerHTML = `You manage to snag one of the witch's 
            mysterious potions. What now?`
        btn1.innerHTML = "Peer through shack window."
        btn1.onclick = checkShack
        btn2.innerHTML = checkedShack? 
            (hasPotion? "" : "Sneak some Potion.") : 
            "Enter Shack."
        btn2.onclick = hasPotion? null : enterShack
        btn3.innerHTML = discoveredLake? "Go to Lake." : "Continue walking.";
        btn3.onclick = discoveredLake? lake : findLake;
        btn4.innerHTML = "Back to Trees"
        btn4.onclick = trees
    } else {
        witchDeath()
    }
}

function mindPuzzle() {
    mainText.innerHTML = `Five people were eating apples, A finished before B, but after C. 
    D finished before E, but after B. What was the finishing order?`
    document.getElementById("textInput").style.display = 'block'
    setButtonOnClicks(null,null,submitSecretText,null)
    btn3.innerHTML = "Submit answer"
}

function submitSecretText(){
    let correctAnswer = "CABDE"
    let input = document.getElementById("textInput").value
    input = input.toUpperCase()
    if (input == correctAnswer){
        correctSecretPuzzle()
    } else {
        incorrectSecretPuzzle()
    }
}

// // FOURTH STORY LAYER 

function correctSecretPuzzle(){
    document.getElementById("textInput").style.display = 'none'
    mainText.innerHTML = `That was briliant! ${username}. but now you realize that you are still at the lake. 
    Except you are feeling more ominscent. You realize there is no limit. there never was you start thinking...`
    setButtonText("", "Go back to your old way of thinking", "Trancend space time", "")
    setButtonOnClicks(null, shack, secretEnding, null)
}

function incorrectSecretPuzzle() {
    document.getElementById("textInput").style.display = 'none'
    mainText.innerHTML = `It looks like you are still limited by the mind you possess.`
    setButtonOnClicks(null, null, shack, null)
    btn3.innerHTML = "Next"
}

function swimmingDialog(){
    mainText.innerHTML = `Deciding that a swim would be a good idea, maybe the way out would be across the 
    lake. You begin swimming. The water is warm but as you look down the bottom is no where in sight, but that's fine.
	Swimming threw the water seems easier than normal. Suddenly you begin to feel anxious, something is wrong. 
    Something grabs your ankle and before you can react it begins to drag you down. Being caught
	unaware you had no time to draw a proper breath and find yourself in need of air fast. Unfortunately what ever 
    has your ankle does not seem to care for your needs and keeps dragging you down until
	your vision fades to black.`
    setButtonOnClicks(null. null, startForestStory, null)
    btn3.innerHTML = "Embrace the abyss"
}

function peerIntoLake() {
    mainText.innerHTML = `You peer into the lake finding it extremely blue like nothing you've ever seen before. 
                Another thing you notice is that you cannot see the bottom no matter how hard you look for it.`
    setButtonOnClicks(null, null, blueLake, null)
    btn3.innerHTML = "Focus back on the lake"
}

function meetRiddler(){
    mainText.innerText = riddlerMet ? "you come across the riddler again. 'We meet again " + username +". Play My Riddle!'" : `You meet a mysterious riddler.
    "Hold it right there! To go around this lake you must answer my riddle huehuehue"`
    setButtonOnClicks(swimmingDialog, walkAround, puzzleRiddle, lake)
    setButtonText("Swim threw the lake","Go around mysterious man", "Play riddle", "Go back to lake")
    riddlerMet = true
}


function puzzleRiddle() {
    mainText.innerText = "Puzzle: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?"
    setButtonText("Cloud", "Echo", "Rock","Tree")
    setButtonOnClicks(incorrectAnswer , correctAnswer, rockSelectionDeath, incorrectAnswer)
}

function incorrectAnswer(){
    mainText.innerHTML = "The riddle slaps you on the wrist and makes you walk back to the lake"
    setButtonOnClicks(null, null, blueLake, null)
}

function correctAnswer(){
    mainText.innerHTML = "The riddler approves this message. He allows you to move forwards, 'theres no going back' he says."
    setButtonText("", "", "Continue Forwards", "")
    setButtonOnClicks(null, null, escapeEnding, null)
}

// functionality

function setButtonText(text1, text2, text3, text4) {
    btn1.innerHTML = text1
    btn2.innerHTML = text2
    btn3.innerHTML = text3
    btn4.innerHTML = text4
}


function setButtonOnClicks(function1, function2, function3, function4) {
    if (function1) {
        btn1.onclick = function1
    } else {
        btn1.onclick = null
        btn1.innerHTML = ""
    }
    if (function2) {
        btn2.onclick = function2
    } else {
        btn2.onclick = null
        btn2.innerHTML = ""
    }
    if (function3) {
        btn3.onclick = function3
    } else {
        btn3.onclick = null
        btn3.innerHTML = ""
    }
    if (function4) {
        btn4.onclick = function4
    } else {
        btn4.onclick = null
        btn4.innerHTML = ""
    }
}




// Endings
function escapeEnding() {
    victoryScreen(`Time passes very slowly and after what feels like forever the trees began to thin. Quickining your pace you find the end of the forest. Who knew that all you had to do to get out of that strange place 
    was walk in a straight line. Stupid Demo.`)
}
function secretEnding() {
    victoryScreen(`You began walking on the water. You saw a thing with a hat at the side of the lake but it didnt peak your interest.
    Instead you marched forward until you catapulted into space, you are in for a trip far beyond human comprehension. You start to remember eating something before appearing before this mystical forest.`)
}

function walkAround() {
    endScreen("The riddler turns furious for ignoring him, making him feel insignificant, he tackles you and puts you inside his orb, which he will give to the witches to make spells from.")
}
function rockSelectionDeath(){
    endScreen("The riddler stares at you in the eyes with dread. He was very upset with your ignorant response. 'Rocks dont speak.' he says.. All you remember is that you dont remember anything.")
}
function getLost() {
    endScreen("You are completely lost...")
}
function treeDeath() {
    endScreen("You tried to attack magical trees, with nothing. They kill you almost instantly.")
}
function witchDeath() {
    endScreen("You just waltzed into a witch's shack, unarmed. They made short work of you.")
}

function endScreen(endMessage = "You have died.") {
    document.getElementById("main-game").style.display = "none"
    document.getElementById("end-screen-restart").style.display = "block"
    document.getElementById("victory-screen").style.display = "none"
    document.getElementById("endMessage").textContent = endMessage
    discoveredShack = false
    discoveredLake = false
    hasPotion = false
    checkedShack = false
    killedtrees = false
    riddlerMet = false
    visitedBlueLake = false
}

function victoryScreen(message = "you won nim"){
    document.body.style.backgroundImage = ''
    document.getElementById("main-game").style.display = "none"
    document.getElementById("end-screen-restart").style.display = "none"
    document.getElementById("victory-screen").style.display = "block"
    document.getElementById("victoryMessage").textContent = message
}

function restartApp() {
    document.getElementById("victory-screen").style.display = "none"
    document.getElementById("main-game").style.display = "none"
    document.getElementById("end-screen-restart").style.display = "none"
    document.getElementById("start-screen").style.display = "block"
    discoveredShack = false
    discoveredLake = false
    hasPotion = false
    checkedShack = false
    killedtrees = false
    riddlerMet = false
    visitedBlueLake = false
}

function replayGame() {
    startForestStory()
    document.getElementById("victory-screen").style.display = "none"
    document.getElementById("main-game").style.display = "block"
    document.getElementById("end-screen-restart").style.display = "none"
    document.getElementById("start-screen").style.display = "none"
}