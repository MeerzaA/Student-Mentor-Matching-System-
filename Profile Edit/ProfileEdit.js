
const db = firebase.firestore();
const updateForm = document.querySelector('#Login');
const update2 = document.querySelector('#login2');

firebase.auth().onAuthStateChanged(user => {

    console.log(user);
    console.log(user.uid);

    if (user) {
        const postReview77 = db.collection('Users');
        const readReview77 = postReview77.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);

readReview77.get()
    .then(Users => {
        Users.forEach(doc => {
            data = doc.data();
            if (data.Last_Name !== "") {
            updateForm['lastName'].placeholder = data.Last_Name;
            }
            if (data.First_Name !== "") {
                updateForm['firstName'].placeholder = data.First_Name;
                }
            //if (data.dob !== "") {
                //updateForm['dob'].placeholder = data.dob;
             //}
            if (data.contact !== "") {
                updateForm['contact'].placeholder = data.contact;
                }
            if (data.Major !== "") {
                updateForm['major'].value = data.Major;
            }
            if (data.interests !== "") {
                updateForm['interests'].value = data.interests;
            }
            if (data.Major !== "") {
                updateForm['gender'].value = data.Gender;
            }
            if (data.Academic_Year !== "") {
                updateForm['academicYear'].value = data.Academic_Year;
            }
            if (data.description !== "") {
                updateForm['description'].placeholder = data.description;
            }
            if (data.interests2 !== "") {
                updateForm['interests2'].value = data.interests2;
            }
            //updateForm['dob'].placeholder = data.dob;
            //updateForm['contact'].placeholder = data.contact;
        });
    })
    }
});

updateForm.addEventListener('submit', (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        console.log(user);
        console.log(user.uid);

        if (user) {
            //updateForm['lastName'].placeholder = doc.data().Last_Name;
            //db.collection('Users').doc(user.uid).update({

               // First_Name: updateForm['firstName'].value,
               // Last_Name: updateForm['lastName'].value,
                //Major: updateForm['major'].value,
                //Academic_Year: updateForm['academicYear'].value,
                //interests: updateForm['interests'].value,
                //Gender: updateForm['gender'].value,
                //dob: updateForm['dob'].value,
                //description: updateForm['description'].value,
                //status: updateForm['status'].value,
                //contact: updateForm['contact'].value,
            //});
            if (updateForm['major'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    Major: updateForm['major'].value,
                });
            }
            if (updateForm['lastName'].value !== "") {
                var regex = /^[A-Z][a-z]*/;
                if (regex.test(updateForm['lastName'].value) == false) {
                    window.alert("Enter a Valid Last Name. Capitalize the First Letter While You're At It Too, Thanks.");
                    setInterval(() => {
                        window.location.assign("profile.html");
                    },100)
                } else {
                    db.collection('Users').doc(user.uid).update({
                        Last_Name: updateForm['lastName'].value,
                    });
                }
        }
            if (updateForm['dob'].value !== "") {
                const dateString = updateForm['dob'].value;
                var a = dateString[0]+dateString[1]+dateString[2]+dateString[3];
                var b = dateString[5]+dateString[6];
                var c = dateString[8]+dateString[9];
                console.log(a+"-"+b+"-"+c);
                d = parseInt(b);
                console.log(d);
                let date1 = new Date(a, (d-1), c);
                var y = new Date();
                var x = y.getMonth();
                var z = y.getFullYear();
                var b = y.getDate();
                let date2 = new Date(z, x, b);
                console.log(date1.getTime());
                console.log(date2.getTime());
                console.log(date1);
                console.log(date2);
                let date3 = new Date('2003', x, b);
                console.log(date3);
                var yearsOld = date1.getTime()-date3.getTime();
                console.log(yearsOld);
                if (date1.getTime() < date3.getTime()) {
                db.collection('Users').doc(user.uid).update({
                    dob: updateForm['dob'].value,
                })
                }
                else {
                    window.alert("I don't think so bud. You must be 18 years old.");
                    setInterval(() => {
                        window.location.assign("../Profile Edit/ProfileEdit.html");
                    },100)
                }
            }
            if (updateForm['contact'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    contact: updateForm['contact'].value,
                });
            }
            if (updateForm['firstName'].value !== "") {
                        var regex = /^[A-Z][a-z]*/;
                        if (regex.test(updateForm['firstName'].value) == false) {
                            window.alert("Enter a Valid First Name. Capitalize the First Letter While You're At It Too, Thanks.");
                            setInterval(() => {
                                window.location.assign("../Profile Edit/ProfileEdit.html");
                            },100)
                        } else {
                            db.collection('Users').doc(user.uid).update({
                                First_Name: updateForm['firstName'].value,
                            });
                        }
            }
            if (updateForm['academicYear'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    Academic_Year: updateForm['academicYear'].value,
                });
            }
            if (updateForm['interests'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    interests: updateForm['interests'].value,
                });
            }
            if (updateForm['interests2'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    interests2: updateForm['interests2'].value,
                });
            }
            if (updateForm['gender'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    Gender: updateForm['gender'].value,
                });
            }
            if (updateForm['description'].value !== "") {
                db.collection('Users').doc(user.uid).update({
                    description: updateForm['description'].value,
                });
            }
            if (updateForm['status'].value !== "") {
                if (updateForm['status'].value == "Unmatched") {
                    console.log(user.uid);
                    thisguy = user.uid;
                    db.collection('Users').where(firebase.firestore.FieldPath.documentId(), '==', user.uid).get().then((snapshot => {
                        snapshot.docs.forEach(doct => {
                            stat = doct.data().status;
                            ayear = doct.data().Academic_Year;
                            console.log(stat, ayear);
                            if (stat == "Matched") {
                                console.log(stat);
                                if (ayear == "Freshman" || ayear == "Sophomore") {
                                    console.log(ayear);
                                    db.collection('Users').doc(thisguy).update({
                                        status: "Unmatched",
                                    })
                                    const breakmatch = db.collection('finalDecision');
                                    const thismatch = breakmatch.where("menteeID", '==', thisguy);
                                    thismatch.get()
                                    .then(Users => {
                                    Users.forEach(docw => {
                                        mentor = docw.data().mentorID;
                                        documentz = docw.id;
                                        console.log(mentor);
                                        console.log(documentz);
                                        db.collection('Users').doc(mentor).update({
                                            status: "Unmatched",
                                        })
                                        db.collection('finalDecision').doc(documentz).delete();
                                    })
                                    });
                                }
                                else if (ayear == "Junior" || ayear == "Senior") {
                                        console.log(ayear);
                                        db.collection('Users').doc(thisguy).update({
                                            status: "Unmatched",
                                        })
                                        const breakmatch2 = db.collection('finalDecision');
                                        const thismatch2 = breakmatch2.where("mentorID", '==', thisguy);
                                        thismatch2.get()
                                        .then(Users => {
                                        Users.forEach(docw => {
                                            mentee = docw.data().menteeID;
                                            documentz = docw.id;
                                            console.log(mentee);
                                            console.log(documentz);
                                            db.collection('Users').doc(mentee).update({
                                                status: "Unmatched",
                                            })
                                            db.collection('finalDecision').doc(documentz).delete();
                                        })
                                        });
                                }
                            }
                            else {
                                db.collection('Users').doc(user.uid).update({
                                    status: "Unmatched",
                                });
                            }
                        })
                    }))
                }
                else if (updateForm['status'].value == "Matched") {
                    window.alert("Well, this is awkward. You can't just be 'matched' because you want to 😱");
                    setInterval(() => {
                        window.location.assign("../Profile Edit/ProfileEdit.html");
                    },100)
                }
            }
        }
        setInterval(() => {
            window.location.assign("../Profile/Profile.html");
        },800)
    });
    //redirect();
});

function redirect() {
    window.location = "profile.html";
  }



