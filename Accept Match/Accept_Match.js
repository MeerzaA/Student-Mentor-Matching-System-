const db = firebase.firestore();
const finalmatches = document.querySelector('#finalMatch');
const finalMatch = document.querySelector('#finalmatched');

firebase.auth().onAuthStateChanged(user => {

    if (user) {
        console.log(user);
        console.log(user.uid);
        const match6 = db.collection('Users');
        const result6 = match6.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
        result6.get()
            .then(Users => {
                Users.forEach(doc => {
                    Major = doc.data().Major;
                    academicYear = doc.data().Academic_Year;
                    status = doc.data().status;
                    interests = doc.data().interests;
                    console.log(Major, " ", academicYear, " ", status, " ", interests);

                    if ((academicYear == "Freshman") || (academicYear == "Sophomore")) {
                        db.collection('matches').where("mentorID", "==", user.uid).get().then((snapshot => {
                            snapshot.docs.forEach(doc => {
                                requestInfo(doc);
                            })
                        }))
                    }
                    finalmatches.innerHTML = "";

                })
            })
    }
});



function addMatchesstoList5(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    let button = document.createElement('button');
    button.innerText = "Final Match!";
    button.style.backgroundColor = "#90F066";
    let button2 = document.createElement('button');
    button2.innerText = "Delete Match";
    button2.style.backgroundColor = "#FF3F3F";
    let ageButton = document.createElement('button');
    ageButton.innerText = "Display Age Meter";
    ageButton.style.backgroundColor = "#1CBCF3";
    let _ageDiff = document.createElement('li');
    let viewMessage = document.createElement('button');
    viewMessage.innerText = "View Messages";
    viewMessage.style.backgroundColor = "#D9B4F8";
    let viewsArea = document.createElement('li');
    viewsArea.appendChild(viewMessage);
    let button2Area = document.createElement('li');
    button2Area.appendChild(button2);
    let ageButtonArea = document.createElement('li');
    ageButtonArea.appendChild(ageButton);
    let buttonArea = document.createElement('li');
    buttonArea.appendChild(button);

    viewMessage.addEventListener("click", (e) => {

        e.preventDefault();

        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                var mentor = user.uid;
                var mentee = doc.id;
                console.log(mentee, mentor);
                db.collection("messages").where("receiver", "==", mentor).where("senderID", "==", mentee).get().then((snapshot => {
                    snapshot.docs.forEach(docz => {
                        messageText = docz.data().message;
                        let hitup = document.createElement('li');
                        hitup.textContent = "💬Message: " + messageText;
                        hitup.style.border = 'double';
                        hitup.style.backgroundColor = "#F1948A";
                        ul2.appendChild(hitup);
                        db.collection("messages").doc(docz.id).delete();

                    })
                }))
            }
        });
        viewsArea.innerHTML = "";

    });

    ageButton.addEventListener("click", (e) => {

        e.preventDefault();

        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                const checkAge = db.collection('Users');
                const resultz = checkAge.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                resultz.get()
                    .then(Users => {
                        Users.forEach(docs => {
                            userDob = docs.data().dob;
                            console.log(userDob);
                            const userDate = userDob;
                            var a = userDate[0] + userDate[1] + userDate[2] + userDate[3];
                            var b = userDate[5] + userDate[6];
                            var c = userDate[8] + userDate[9];
                            console.log(a + "-" + b + "-" + c);
                            d = parseInt(b);
                            console.log(d);
                            let userTime = new Date(a, (d - 1), c);
                            var userAge = userTime.getTime();
                            var three = doc.data().dob;
                            const matchesDate = three;
                            var e = matchesDate[0] + matchesDate[1] + matchesDate[2] + matchesDate[3];
                            var f = matchesDate[5] + matchesDate[6];
                            var g = matchesDate[8] + matchesDate[9];
                            console.log(e + "-" + f + "-" + g);
                            h = parseInt(f);
                            console.log(h);
                            let userTime2 = new Date(e, (h - 1), g);
                            let matchAge = userTime2.getTime();
                            console.log(matchAge, userAge);
                            if ((Math.abs(matchAge - userAge)) <= 157784760000) {
                                _ageDiff.textContent = "🕒Age Difference: " + "Within 5 Years of Your Age";
                                ul2.appendChild(_ageDiff);
                                ul2.style.backgroundColor = "#98FB98";
                            }
                            if ((Math.abs(matchAge - userAge)) > 157784760000 && (Math.abs(matchAge - userAge)) <= 315569520000) {
                                _ageDiff.textContent = "🕒Age Difference: " + "Within 5 to 10 Years of Your Age";
                                ul2.appendChild(_ageDiff);
                                ul2.style.backgroundColor = "#ffff66";
                            }
                            if ((Math.abs(matchAge - userAge)) > 315569520000) {
                                _ageDiff.textContent = "🕒Age Difference: " + "More than 10 Years Apart, Yikes";
                                ul2.appendChild(_ageDiff);
                                ul2.style.backgroundColor = "#ff6666";
                            }
                        })
                        ageButtonArea.innerHTML = "";
                    })
            }
        });

    });

    button.addEventListener("click", (e) => {

        e.preventDefault();

        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                var mentee = user.uid;
                var mentor = doc.id;
                function createMatch(a, b) {
                    db.collection('finalDecision').doc().set({
                        menteeID: b,
                        mentorID: a,
                    })
                    let reserve = document.createElement('button');
                    let textie = document.createElement('li');
                    let reservearea = document.createElement('li');
                    textie.textContent = "Matches Reset at the end of the semester. Would you like to Reserve the Right to Stay Matched for Longer?";
                    reserve.innerText = "Yes";
                    reserve.style.backgroundColor = "#75F3F3";
                    let reservenot = document.createElement('button');
                    reservenot.innerText = "No";
                    reservenot.style.backgroundColor = "#F375F3";
                    console.log("Hello");
                    //finalmatches.innerHTML = "";
                    let goodLuck = document.createElement('h1');
                    goodLuck.style.border = "double";
                    goodLuck.style.bored = "thick";
                    goodLuck.style.backgroundColor = "#FFFFFF";
                    goodLuck.style.fontWeight = "bold";
                    goodLuck.textContent = "🎉🎉 Good Luck! 🎉🎉";
                    goodLuck.style.textAlign = "center";
                    goodLuck.style.fontSize = "40px";
                    //finalmatches.appendChild(goodLuck);
                    reservenot.addEventListener("click", (e) => {

                        e.preventDefault();

                        firebase.auth().onAuthStateChanged(user => {

                            if (user) {
                                db.collection('finalDecision').where("mentorID", "==", mentor).where("menteeID", "==", mentee).get().then((snapshot => {
                                    snapshot.docs.forEach(doc1 => {
                                        var place = doc1.id;
                                        console.log(doc1);
                                        db.collection('finalDecision').doc(place).update({
                                            duration: "No",
                                        })
                                    })
                                    reservearea.innerHTML = "";
                                    finalmatches.innerHTML = "";
                                    finalmatches.appendChild(goodLuck);
                                }))
                            }
                        })
                    })
                    reserve.addEventListener("click", (e) => {

                        e.preventDefault();

                        firebase.auth().onAuthStateChanged(user => {

                            if (user) {
                                db.collection('finalDecision').where("mentorID", "==", mentor).where("menteeID", "==", mentee).get().then((snapshot => {
                                    snapshot.docs.forEach(doc1 => {
                                        var place = doc1.id;
                                        console.log(doc1);
                                        db.collection('finalDecision').doc(place).update({
                                            duration: "Yes",
                                        })
                                    })
                                    reservearea.innerHTML = "";
                                    finalmatches.innerHTML = "";
                                    finalmatches.appendChild(goodLuck);
                                }))
                            }
                        })
                    })
                    reservearea.appendChild(textie);
                    reservearea.appendChild(reserve);
                    reservearea.appendChild(reservenot);
                    ul2.appendChild(reservearea);
                }
                createMatch(mentor, mentee);
                window.alert('You have been Matched!');
                db.collection('matches').where("menteeID", "==", doc.id).where("mentorID", "==", user.uid).get().then((snapshot => {
                    snapshot.docs.forEach(docz => {
                        var document = docz.id;
                        console.log(document);
                        db.collection("matches").doc(document).delete();
                    })
                }))
                db.collection('Users').doc(doc.id).update({
                    status: "Matched",
                });
                db.collection('Users').doc(user.uid).update({
                    status: "Matched",
                })
            }
        });
        button2Area.innerHTML = "";
        buttonArea.innerHTML = "";
    });
    button2.addEventListener('click', (e) => {


        console.log(doc.id);
        const posterz2 = db.collection('matches');
        const posterProfilez2 = posterz2.where("menteeID", '==', doc.id);

        posterProfilez2.get()
            .then(Users => {
                Users.forEach(doct => {
                    console.log(doct.id);
                    db.collection("matches").doc(doct.id).delete();
                    window.alert("Accepted Request Successfully Deleted!");
                });
            });
        button2Area.innerHTML = "";
        buttonArea.innerHTML = "";
        ul2.innerHTML = "";
    })


    let _major = document.createElement('li');
    let _year = document.createElement('li');
    let _gender = document.createElement('li');
    let _dob = document.createElement('li');
    let _interests = document.createElement('li');
    let _status = document.createElement('li');
    let _description = document.createElement('li');
    let _contact = document.createElement('li');

    header2.innerHTML = "😍" + 'Mentor: ' + doc.data().First_Name + " " + doc.data().Last_Name;

    ul2.setAttribute('data-id', doc.id);
    _major.textContent = "⭐" + "Major: " + doc.data().Major;
    _year.textContent = "⭐" + "Academic Year: " + doc.data().Academic_Year;
    _gender.textContent = "⭐" + "Gender: " + doc.data().Gender;
    _dob.textContent = "⭐" + "Date of Birth: " + doc.data().dob;
    _interests.textContent = "⭐" + "Interests: " + doc.data().interests + ", " + doc.data().interests2;
    _status.textContent = "⭐" + "Matched Status: " + doc.data().status;
    _description.textContent = "⭐" + "Description: " + doc.data().description;
    _contact.textContent = "⭐" + "Best Way to Contact: " + doc.data().contact;

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
        ul2.appendChild(_dob);
        ul2.appendChild(_interests);
        ul2.appendChild(_contact);
        ul2.appendChild(_status);
        ul2.appendChild(_description);
        ul2.appendChild(button2Area);
        ul2.appendChild(ageButtonArea);
        ul2.appendChild(viewsArea);
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                const match1 = db.collection('Users');
                const result1 = match1.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                result1.get()
                    .then(Users => {
                        Users.forEach(docg => {
                            Major = docg.data().Major;
                            academicYear = docg.data().Academic_Year;
                            status = docg.data().status;
                            interests = docg.data().interests;
                            console.log(Major, " ", academicYear, " ", status, " ", interests);
                            if (status == "Unmatched" && doc.data().status == "Unmatched") {
                                ul2.appendChild(buttonArea);
                            }

                        })
                    })
            }
        });
    })
    finalmatches.appendChild(ul2);

}

function requestInfo(doc) {
    var mentorID = doc.data().menteeID;
    function getMentors() {
        const matches9 = db.collection('Users');
        const results9 = matches9.where(firebase.firestore.FieldPath.documentId(), '==', mentorID).where("status", "==", "Unmatched");
        results9.get()
            .then(Users => {
                Users.forEach(doc => {
                    Major = doc.data().Major;
                    academicYear = doc.data().Academic_Year;
                    status = doc.data().status;
                    interests = doc.data().interests;
                    console.log(Major, " ", academicYear, " ", status, " ", interests);
                    addMatchesstoList5(doc);
                })
            })
    }
    getMentors();

}