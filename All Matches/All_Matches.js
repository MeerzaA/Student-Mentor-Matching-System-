const user = firebase.auth().currentUser;
const matchForm = document.querySelector('#matchesForm');
const matchProfile = document.querySelector('#matchesInfo');
const search123 = document.getElementById('#userSearch');
const godDiv = document.querySelector('#godDiv');
const db = firebase.firestore();
const hello = document.querySelector('#hello');


    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            db.collection('finalDecision').get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addDecisionstoList1(doc);
                })
            }));
     } 
        matchProfile.innerHTML='';
    });


function addDecisionstoList1(doc) {
    let ul2 = document.createElement('li');
    let ul = document.createElement('li');
    let header2 = document.createElement('h2');
    let readButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete This Match";
    deleteButton.style.backgroundColor = "#F57F7F";
    readButton.innerText = "View Matched Mentor";
    readButton.style.backgroundColor = "#8FE8F1";
    let inspectButton = document.createElement('button');
    inspectButton.innerText = "Inspect Match";
    inspectButton.style.backgroundColor = "#65F296";

    inspectButton.addEventListener("click", (e) => {
        const postReview8 = db.collection('finalDecision');
        const readReview8 = postReview8.where(firebase.firestore.FieldPath.documentId(), '==', doc.id);
        
        readReview8.get()
            .then(Users => {
                Users.forEach(doc => {
                    mentorID = doc.data().mentorID;
                    menteeID = doc.data().menteeID;
                    console.log(menteeID);
                    console.log(mentorID);
                    const matchInspect = db.collection('Users').where(firebase.firestore.FieldPath.documentId(), '==', menteeID);
                    matchInspect.get()
                    .then(Users => {
                        Users.forEach(docr => {
                            stati = docr.data().status;
                            acYear = docr.data().Academic_Year;
                            interestz = docr.data().interests + ", " + docr.data().interests2;
                            majorz = docr.data().Major;
                            const matchInspect2 = db.collection('Users').where(firebase.firestore.FieldPath.documentId(), '==', mentorID);
                            matchInspect2.get()
                            .then(Users => {
                                Users.forEach(docy => {
                                    stati2 = docy.data().status;
                                    acYear2 = docy.data().Academic_Year;
                                    interestz2 = docy.data().interests + ", " + docy.data().interests2;
                                    majorz2 = docy.data().Major;
                                    let tablez = document.createElement('table');
                                    //tablez.style.backgroundColor = "#80dfff";
                                    var row = tablez.insertRow(0);
                                    var row1 = tablez.insertRow(1);
                                    var row2 = tablez.insertRow(2);
                                    var row3 = tablez.insertRow(3);
                                    var row4 = tablez.insertRow(4);
                                    row.style.border = "double";
                                    row.style.textAlign = "center";
                                    row.style.backgroundColor = "#00cc44";
                                    var cell = row.insertCell(0);
                                    cell.style.border = "double";
                                    cell.style.width = "300px";
                                    cell.style.fontWeight = "bold";
                                    var cell2 = row.insertCell(1);
                                    cell2.style.border = "double";
                                    cell2.style.width = "300px";
                                    cell2.style.fontWeight = "bold";
                                    cell.innerText = "Mentee";
                                    cell2.innerText = "Mentor";
                                    row1.style.border = "double";
                                    row1.style.backgroundColor = "#ffff99";
                                    var cell3 = row1.insertCell(0);
                                    cell3.style.border = "double";
                                    cell3.style.width = "300px";
                                    var cell4 = row1.insertCell(1);
                                    cell4.style.border = "double";
                                    cell4.style.width = "300px";
                                    cell3.innerText = majorz;
                                    cell4.innerText = majorz2;
                                    row2.style.border = "double";
                                    row2.style.backgroundColor = "#ffff99";
                                    var cell5 = row2.insertCell(0);
                                    cell5.style.border = "double";
                                    cell5.style.width = "300px";
                                    var cell6 = row2.insertCell(1);
                                    cell6.style.border = "double";
                                    cell6.style.width = "300px";
                                    cell5.innerText = acYear;
                                    cell6.innerText = acYear2;
                                    row3.style.border = "double";
                                    row3.style.backgroundColor = "#ffff99";
                                    var cell7 = row3.insertCell(0);
                                    cell7.style.border = "double";
                                    cell7.style.width = "300px";
                                    var cell8 = row3.insertCell(1);
                                    cell8.style.border = "double";
                                    cell8.style.width = "300px";
                                    cell7.innerText = interestz;
                                    cell8.innerText = interestz2;
                                    ul2.appendChild(tablez);
                                    row4.style.border = "double";
                                    row4.style.backgroundColor = "#ffff99";
                                    var cell9 = row4.insertCell(0);
                                    cell9.style.border = "double";
                                    cell9.style.width = "300px";
                                    var cell10 = row4.insertCell(1);
                                    cell10.style.border = "double";
                                    cell10.style.width = "300px";
                                    cell9.innerText = stati;
                                    cell10.innerText = stati2;
                                    if(stati !== stati2) {
                                        row4.style.backgroundColor = "#D85857";
                                    }
                                    if (majorz !== majorz2) {
                                        row1.style.backgroundColor = "#D85857";
                                    }
                                    if (docr.data().interests !== docy.data().interests) {
                                        if (docr.data().interests !== docy.data().interests2) {
                                            if (docr.data().interests2 !== docy.data().interests) {
                                                if (docr.data().interests2 !== docy.data().interests2) {
                                                    row3.style.backgroundColor = "#D85857";
                                                }
                                            }
                                        }
                                    }
                                    //if (docr.data().Academic_Year == "Freshman" || docr.data().Academic_Year == "Sophomore") {
                                        //if (docy.data().Academic_Year !== "Junior" || docy.data().Academic_Year !== "Senior") {
                                            //row2.style.backgroundColor = "#D85857";
                                        //}
                                    //}
                                    if (docr.data().Academic_Year !== "Freshman" && docr.data().Academic_Year !== "Sophomore") {
                                            row2.style.backgroundColor = "#D85857";
                                    }
                                    if (docy.data().Academic_Year !== "Junior" && docy.data().Academic_Year !== "Senior") {
                                        row2.style.backgroundColor = "#D85857";
                                }
                                    ul2.appendChild(tablez);
                        })
                    })
                        })
                    })
                })
            })
        
    });

    deleteButton.addEventListener("click", (e) => {
        const postReview1 = db.collection('finalDecision');
        const readReview1 = postReview1.where(firebase.firestore.FieldPath.documentId(), '==', doc.id);
        
        readReview1.get()
            .then(Users => {
                Users.forEach(doc => {
                    mentorID = doc.data().mentorID;
                    menteeID = doc.data().menteeID;
                    console.log(menteeID);
                    console.log(mentorID);
                    db.collection('Users').doc(mentorID).update({
                        status: "Unmatched",
                    });
                    db.collection('Users').doc(menteeID).update({
                        status: "Unmatched",
                    });
                    db.collection('finalDecision').doc(doc.id).delete().then(() => {
                        console.log("Match successfully deleted!");
                        window.alert("You Deleted this Match :(");
                    })
                })
            })
            ul2.innerHTML = "";
    });

    readButton.addEventListener("click", (e) => {
        const postReview = db.collection('finalDecision');
        const readReview = postReview.where(firebase.firestore.FieldPath.documentId(), '==', doc.id);
        
        readReview.get()
            .then(Users => {
                Users.forEach(doc => {
                    mentorID = doc.data().mentorID;
                    console.log(mentorID);
                    const posterz4 = db.collection('Users');
        const posterProfilez4 = posterz4.where(firebase.firestore.FieldPath.documentId(), '==', doc.data().mentorID);
        
        posterProfilez4.get()
            .then(Users => {
                Users.forEach(doc => {
                    console.log(doc.data().First_Name);
                    let _major = document.createElement('li');
                    let header2 = document.createElement('h2');
    let _year = document.createElement('li');
    let _gender = document.createElement('li');
    let _dob = document.createElement('li');
    let _interests = document.createElement('li');
    let _status = document.createElement('li');
    let _description = document.createElement('li');
    let _contact = document.createElement('li');

    header2.innerHTML= "😍" +'Matched With Mentor: '+ doc.data().First_Name + " " + doc.data().Last_Name;

    ul.setAttribute('data-id', doc.id);
    _major.textContent = "⭐" + "Major: "+doc.data().Major;
    _year.textContent = "⭐" + "Academic Year: "+doc.data().Academic_Year;
    _gender.textContent = "⭐" + "Gender: "+doc.data().Gender;
    _dob.textContent = "⭐" + "Date of Birth: "+doc.data().dob;
    _interests.textContent = "⭐" + "Interests: "+doc.data().interests + ", " + doc.data().interests2;
    _status.textContent = "⭐" + "Matched Status: "+doc.data().status;
    _description.textContent = "⭐" + "Description: "+doc.data().description;
    _contact.textContent = "⭐" + "Best Way to Contact: " +doc.data().contact;

    firebase.auth().onAuthStateChanged(user => {
        let _profilePic = document.createElement('img');
        if (user) {
            firebase.storage().ref('Users/' + doc.id + '/profile.jpg').getDownloadURL().then(imgURL => {
                _profilePic.src = imgURL;
            })
        }
        ul.appendChild(_profilePic);
        ul.appendChild(header2);
        ul.appendChild(_major);
        ul.appendChild(_year);
        ul.appendChild(_gender);
        ul.appendChild(_interests);
        ul.appendChild(_status);
        ul.appendChild(_description);
       
    })
                });
            });
})
                });
                ul2.appendChild(ul);
    });


        const postReview = db.collection('finalDecision');
        const readReview = postReview.where(firebase.firestore.FieldPath.documentId(), '==', doc.id);
        
        readReview.get()
            .then(Users => {
                Users.forEach(doc => {
                    menteeID = doc.data().menteeID;
                    console.log(menteeID);
                    const posterz3 = db.collection('Users');
        const posterProfilez3 = posterz3.where(firebase.firestore.FieldPath.documentId(), '==', doc.data().menteeID);
        
        posterProfilez3.get()
            .then(Users => {
                Users.forEach(doc => {
                    console.log(doc.data().First_Name);
                    let _major = document.createElement('li');
    let _year = document.createElement('li');
    let _gender = document.createElement('li');
    let _dob = document.createElement('li');
    let _interests = document.createElement('li');
    let _status = document.createElement('li');
    let _description = document.createElement('li');
    let _contact = document.createElement('li');

    header2.innerHTML= "😍" +'Mentee: '+ doc.data().First_Name + " " + doc.data().Last_Name;

    ul2.setAttribute('data-id', doc.id);
    _major.textContent = "⭐" + "Major: "+doc.data().Major;
    _year.textContent = "⭐" + "Academic Year: "+doc.data().Academic_Year;
    _gender.textContent = "⭐" + "Gender: "+doc.data().Gender;
    _dob.textContent = "⭐" + "Date of Birth: "+doc.data().dob;
    _interests.textContent = "⭐" + "Interests: "+doc.data().interests + ", " + doc.data().interests2;
    _status.textContent = "⭐" + "Matched Status: "+doc.data().status;
    _description.textContent = "⭐" + "Description: "+doc.data().description;
    _contact.textContent = "⭐" + "Best Way to Contact: " +doc.data().contact;

    firebase.auth().onAuthStateChanged(user => {
        let _profilePic = document.createElement('img');
        if (user) {
            firebase.storage().ref('Users/' + doc.id + '/profile.jpg').getDownloadURL().then(imgURL => {
                _profilePic.src = imgURL;
            })
        }
        ul2.appendChild(_profilePic);
        ul2.appendChild(header2);
        ul2.appendChild(_major);
        ul2.appendChild(_year);
        ul2.appendChild(_gender);
        ul2.appendChild(_interests);
        ul2.appendChild(_status);
        ul2.appendChild(_description);
        ul2.appendChild(deleteButton);
        ul2.appendChild(readButton);
        ul2.appendChild(inspectButton);
       
    })
                });
            });
})
                });
    matchProfile.appendChild(ul2);
}

let searchezButton = document.createElement('button');
        searchezButton.innerText = "Search Users";
        searchezButton.style.backgroundColor = "#3ECA4D";
        searchezButton.addEventListener("click", (e) => {
          searchUsers();  
        })
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.uid);
                if (user.uid == "qrwiHmoGQNcWw3jZdeub2ZRTdPG2") {
                    godDiv.appendChild(searchezButton);
                }
    
            }
        });

function searchUsers() {
    window.location.href = "../Search Users/SearchUsers.html";
    }


    let resetButton = document.createElement('button');
    resetButton.innerText = "Reset System Matches";
    resetButton.style.backgroundColor = "#F57F7F";
    resetButton.addEventListener("click", (e) => {
        db.collection('finalDecision').where("duration", "==", "No").get().then((snapshot => {
            snapshot.docs.forEach(doc1 => {
                var documentID = doc1.id;
                var mentee = doc1.data().menteeID;
                var mentor = doc1.data().mentorID;
                db.collection('Users').doc(mentee).update({
                    status: "Unmatched",
                })
                db.collection('Users').doc(mentor).update({
                    status: "Unmatched",
                })
                db.collection('finalDecision').doc(documentID).delete();
            })
        }))
        setInterval(() => {
            window.location.assign("../All Matches/All_Matches.html");
        },800)
    })
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid);
            if (user.uid == "qrwiHmoGQNcWw3jZdeub2ZRTdPG2") {
                hello.appendChild(resetButton);
            }

        }
    });

