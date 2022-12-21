console.log("page loaded...");

// change Name when Edit Profile is clicked
function editName(element) {
    var newName = document.querySelector(element);
    newName.innerText = "Micheal Jackson";
    
}

// connection request buttons
function acceptdeny(id,answer){
    console.log(id);
    console.log(answer);

    if (answer == true) {
        document.querySelector('#numberOfConnections').innerText++;
    } 

    document.querySelector('#numOfRequest').innerText--;
    document.querySelector(id).remove();

}