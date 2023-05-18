
/*Home*/
let homeScore = 0
let homeScoreEl = document.getElementById('home-score')

function addHomeScoreOne() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
}

function addHomeScoreTwo() {
    homeScore +=2
    homeScoreEl.textContent = homeScore
}

function addHomeScoreThree() {
    homeScore +=3
    homeScoreEl.textContent = homeScore
}


/*Guest*/

let guestScore = 0
let guestScoreEl = document.getElementById('guest-score')

function addGuestScoreOne() {
    guestScore +=1
    guestScoreEl.textContent = guestScore
}

function addGuestScoreTwo() {
    guestScore +=2
    guestScoreEl.textContent = guestScore
}

function addGuestScoreThree() {
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

