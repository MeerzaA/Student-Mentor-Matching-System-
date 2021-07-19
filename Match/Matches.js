const db = firebase.firestore();
const matches = document.querySelector('#matches');
const seeMatch = document.querySelector('#getmatched');
const seeMatchz = document.querySelector('#finalMeme');
const godmatch = document.querySelector('#godMatch');


firebase.auth().onAuthStateChanged(user => {

    if (user) {
        console.log(user);
        console.log(user.uid);
        const match = db.collection('Users');
        const result = match.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
        result.get()
            .then(Users => {
                Users.forEach(doc => {
                    Major = doc.data().Major;
                    academicYear = doc.data().Academic_Year;
                    status = doc.data().status;
                    interests = doc.data().interests;
                    interests2 = doc.data().interests2;
                    userDob = doc.data().dob;
                    console.log(userDob, " ", Major, " ", academicYear, " ", status, " ", interests, " ", interests2);
                    const userDate = userDob;
                    var a = userDate[0] + userDate[1] + userDate[2] + userDate[3];
                    var b = userDate[5] + userDate[6];
                    var c = userDate[8] + userDate[9];
                    console.log(a + "-" + b + "-" + c);
                    d = parseInt(b);
                    console.log(d);
                    let userTime = new Date(a, (d - 1), c);
                    var userAge = userTime.getTime();
                    const postReview22 = db.collection('Users');
                    const readReview22 = postReview22.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                    if ((academicYear == "Freshman") || (academicYear == "Sophomore")) {
                        db.collection('Users').where("Major", "==", Major).where("status", "==", "Unmatched").where("Academic_Year", "in", ["Junior", "Senior"]).get().then((snapshot => {
                            snapshot.docs.forEach(docs => {

                                //readReview22.get()
                                //.then(Users => {
                                //Users.forEach(docs => {
                                datas = docs.data();
                                var one = datas.interests;
                                var two = datas.interests2;
                                if (one == interests || one == interests2) {
                                    addMatchesstoList2(docs);
                                }
                                else if (two == interests || two == interests2) {
                                    addMatchesstoList2(docs);
                                }

                            });

                        }))
                    }
                    if ((academicYear == "Junior") || (academicYear == "Senior")) {
                        db.collection('matchRequests').where("mentorID", "==", user.uid).get().then((snapshot => {
                            snapshot.docs.forEach(doc => {
                                requestInfo(doc);
                            })
                        }))
                    }

                    matches.innerHTML = "";
                })
            })
    }
});



function addMatchesstoList2(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    let button = document.createElement('button');
    button.style.backgroundColor = "#90F066";
    let ageButton = document.createElement('button');
    ageButton.style.backgroundColor = "#1CBCF3";
    let _ageDiff = document.createElement('li');
    let buttonArea = document.createElement('li');
    let ageArea = document.createElement('li');
    ageButton.innerText = "Display Age Meter";
    button.innerText = "Request Match!";
    let buttonarea2 = document.createElement('li');
    ageArea.appendChild(ageButton);

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
                        ageArea.innerHTML = "";
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
                function requestMatch(x, y) {
                    db.collection('matchRequests').doc().set({
                        menteeID: x,
                        mentorID: y,
                    })
                    buttonArea.innerHTML = "";
                }
                requestMatch(mentee, mentor);
                window.alert('Your Request has been Sent!');
                console.log("Hello");
                let message = document.createElement('button');
                message.innerText = "Send Message";
                message.style.backgroundColor = "#D9B4F8";
                message.addEventListener("click", (e) => {
                    e.preventDefault();

                    firebase.auth().onAuthStateChanged(user => {

                        if (user) {
                            console.log(user);
                            console.log(user.uid);
                            let text = document.createElement('textarea');
                            text.placeholder = "Write Your Message Here";
             
                            let send = document.createElement('button');
                            let messageArea = document.createElement('li');
                            messageArea.appendChild(text);
                            send.innerText = "Send";
                            send.style.backgroundColor = "#F8D6B4";
                            send.addEventListener("click", (e) => {
                                e.preventDefault();

                                firebase.auth().onAuthStateChanged(user => {
                                    if (user) {
                                        console.log(user.uid);
                                        db.collection('messages').doc().set({
                                            senderID: user.uid,
                                            message: text.value,
                                            receiver: doc.id,
                                        })
                                        messageArea.innerHTML = "";
                                        window.alert("Message Sent");
                                    }
                                })
                            })
                            messageArea.appendChild(send);
                            ul2.appendChild(messageArea);
                            buttonarea2.innerHTML = "";
                        }
                    })
                })
                buttonarea2.style.backgroundColor = "#AAD5F2";
                buttonarea2.appendChild(message);
                ul2.appendChild(buttonarea2);
            };
        });
    });
    let _profilePic = document.createElement('img');
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
    var interests2 = doc.data().interests2;
    if (interests2 == null) {
        interests2 = "";
    }
    else {
        interests2 = ", " + interests2;
    }
    _interests.textContent = "⭐" + "Interests: " + doc.data().interests + interests2;
    _status.textContent = "⭐" + "Matched Status: " + doc.data().status;
    _description.textContent = "⭐" + "Description: " + doc.data().description;
    _contact.textContent = "⭐" + "Best Way to Contact: " + doc.data().contact;

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase.storage().ref('Users/' + doc.id + '/profile.jpg').getDownloadURL().then(imgURL => {
                _profilePic.src = imgURL;
            })
            ul2.appendChild(_profilePic);
        }
        ul2.appendChild(header2);
        ul2.appendChild(_major);
        ul2.appendChild(_year);
        ul2.appendChild(_gender);
        ul2.appendChild(_dob);
        ul2.appendChild(_interests);
        ul2.appendChild(_contact);
        ul2.appendChild(_status);
        ul2.appendChild(_description);
        ul2.appendChild(ageArea);
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                const match2 = db.collection('Users');
                const result2 = match2.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                result2.get()
                    .then(Users => {
                        Users.forEach(docz => {
                            Major = docz.data().Major;
                            academicYear = docz.data().Academic_Year;
                            status = docz.data().status;
                            interests = docz.data().interests;
                            console.log(Major, " ", academicYear, " ", status, " ", interests);
                            if (status == "Unmatched" && doc.data().status == "Unmatched") {
                                buttonArea.appendChild(button);
                                ul2.appendChild(buttonArea);
                            }

                        })
                    })
            }
        });
    })

    matches.appendChild(ul2);

}

function addMatchesstoList1(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    let button = document.createElement('button');
    button.innerText = "Accept Request!";
    button.style.backgroundColor = "#90F066";
    let button2 = document.createElement('button');
    let ageButton = document.createElement('button');
    ageButton.innerText = "Display Age Meter";
    ageButton.style.backgroundColor = "#1CBCF3";
    button2.innerText = "Delete Request";
    button2.style.backgroundColor = "#FF3F3F";
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
                        let message = document.createElement('button');
                        message.innerText = "Reply";
                        message.style.backgroundColor = "#F8D6B4";
                        let hitupArea = document.createElement('li');
                        hitupArea.appendChild(message);
                        ul2.appendChild(hitup);
                        ul2.appendChild(hitupArea);
                        message.addEventListener("click", (e) => {
                            e.preventDefault();

                            firebase.auth().onAuthStateChanged(user => {

                                if (user) {
                                    console.log(user);
                                    console.log(user.uid);
                                    let text = document.createElement('textarea');
                                    text.placeholder = "Write Your Message Here";
                         
                                    let send = document.createElement('button');
                                    let messageArea = document.createElement('li');
                                    messageArea.appendChild(text);
                                    send.innerText = "Send";
                                    send.style.backgroundColor = "#F8D6B4";
                                    send.addEventListener("click", (e) => {
                                        e.preventDefault();

                                        firebase.auth().onAuthStateChanged(user => {
                                            if (user) {
                                                console.log(user.uid);
                                                db.collection('messages').doc().set({
                                                    senderID: user.uid,
                                                    message: text.value,
                                                    receiver: doc.id,
                                                })
                                                db.collection("messages").doc(docz.id).delete();
                                                messageArea.innerHTML = "";
                                                hitup.style.border = "";
                                                hitup.innerHTML = "";
                                                window.alert("Message Sent");
                                            }
                                        })
                                    })
                                    messageArea.appendChild(send);
                                    ul2.appendChild(messageArea);
                                    hitupArea.innerHTML = "";
                                }
                            })
                        })

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
                var mentor = user.uid;
                var mentee = doc.id;
                function createMatch(a, b) {
                    db.collection('matches').doc().set({
                        menteeID: b,
                        mentorID: a,
                    })
                }
                createMatch(mentee, mentor);
                window.alert("You've accepted successfully!");
                db.collection('matchRequests').where("mentorID", "==", user.uid).where("menteeID", "==", doc.id).get().then((snapshot => {
                    snapshot.docs.forEach(docz => {
                        var document = docz.id;
                        console.log(document);
                        db.collection("matchRequests").doc(document).delete();
                    })
                }))
                console.log("Hello");
            }
        });
        buttonArea.innerHTML = "";
        button2Area.innerHTML = "";
    });
    button2.addEventListener('click', (e) => {


        console.log(doc.id);
        const posterz = db.collection('matchRequests');
        const posterProfilez = posterz.where("menteeID", '==', doc.id);

        posterProfilez.get()
            .then(Users => {
                Users.forEach(doc => {
                    console.log(doc.id);
                    db.collection("matchRequests").doc(doc.id).delete();
                    window.alert("Match Request Successfully Deleted!")
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

    header2.innerHTML = "😍" + 'Mentee: ' + doc.data().First_Name + " " + doc.data().Last_Name;

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
                        Users.forEach(docs => {
                            Major = docs.data().Major;
                            academicYear = docs.data().Academic_Year;
                            status = docs.data().status;
                            interests = docs.data().interests;
                            console.log(Major, " ", academicYear, " ", status, " ", interests);
                            if (status == "Unmatched" && doc.data().status == "Unmatched") {
                                ul2.appendChild(buttonArea);
                            }

                        })
                    })
            }
        });
    })
    matches.appendChild(ul2);

}

function requestInfo(doc) {
    let ul2 = document.createElement('li');
    var menteeID = doc.data().menteeID;


    function getMentees() {
        const matches = db.collection('Users');
        const results = matches.where(firebase.firestore.FieldPath.documentId(), '==', menteeID).where("status", "==", "Unmatched");
        results.get()
            .then(Users => {
                Users.forEach(doc => {
                    Major = doc.data().Major;
                    academicYear = doc.data().Academic_Year;
                    status = doc.data().status;
                    interests = doc.data().interests;
                    console.log(Major, " ", academicYear, " ", status, " ", interests);
                    addMatchesstoList1(doc);
                })
            })
    }
    getMentees();

}


function seeFinals() {
    window.location.href = "../Accept Match/Accept_Match.html";
}

function appendFinal() {
    let finalButton = document.createElement('button');
    finalButton.innerText = "See Accepted Requests";
    finalButton.style.backgroundColor = "#F07E8A";
    finalButton.addEventListener("click", (e) => {
        e.preventDefault();
        seeFinals();
    })
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            const match7 = db.collection('Users');
            const result7 = match7.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
            result7.get()
                .then(Users => {
                    Users.forEach(doc => {
                        academicYear = doc.data().Academic_Year;
                        status = doc.data().status;
                        console.log(academicYear, " ", status);
                        if (academicYear == "Freshman" || academicYear == "Sophomore") {
                            seeMatch.appendChild(finalButton);
                        }
                    })
                })
        }
    });
}

function godButton2() {
    let godButton = document.createElement('button');
    godButton.innerText = "God Mode: View System Matches";
    godButton.style.backgroundColor = "#CE7FF5";
    godButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "../All Matches/All_Matches.html";
    })
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            if (user.uid == "qrwiHmoGQNcWw3jZdeub2ZRTdPG2") {
                seeMatch.appendChild(godButton);
            }

        }
    }
    )
}

godButton2();

appendFinal();