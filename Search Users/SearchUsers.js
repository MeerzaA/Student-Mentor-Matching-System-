console.log(firebase);
const user = firebase.auth().currentUser;
const picture = document.querySelector('#profForm');
const profiles = document.querySelector('#profileInfo2');
const userProfile = document.querySelector('#searches');
const userProfile2 = document.querySelector('#searches2');
const search3 = document.querySelector('#searches3');
const search4 = document.querySelector('#searches4');
const search5 = document.querySelector('#searches5');
const search6 = document.querySelector('#searches6');
const db = firebase.firestore();

search4.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("Major", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            profiles.innerHTML = "";
        }
    });
})

search5.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("interests", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            db.collection('Users').where("interests2", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }))
            profiles.innerHTML = "";
        }
    });
})

search6.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("status", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            profiles.innerHTML = "";
        }
    });
})

search3.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("Academic_Year", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            profiles.innerHTML = "";
        }
    });
})

userProfile.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("First_Name", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            profiles.innerHTML = "";
        }
    });
})

userProfile2.addEventListener("submit", (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            let userz = document.getElementById('searchUser').value;
            db.collection('Users').where("Last_Name", "==", userz).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addUsertoList1(doc);
                })
            }));
            profiles.innerHTML = "";
        }
    });
})

function addUsertoList1(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    let updateButton = document.createElement('button');
    let updatearea = document.createElement('li');
    updatearea.appendChild(updateButton);
    updateButton.innerText = "Update User Information";

    updateButton.addEventListener("click", (e) => {

        e.preventDefault();

        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                let userz2 = doc.id;
                let updateform = document.createElement('form');
                let updatefirstname = document.createElement('input');
                updatefirstname.placeholder = "Update First Name";
                let updatelastname = document.createElement('input');
                updatelastname.placeholder = "Update Last Name";
                let updatemajor = document.createElement('select');
                let option0 = document.createElement('option');
                option0.textContent = "Select a Major";
                option0.value = "";
                //option0.disabled = true;
                // option0.selected = true;
                let option1 = document.createElement('option');
                let option2 = document.createElement('option');
                let option3 = document.createElement('option');
                let option4 = document.createElement('option');
                let option5 = document.createElement('option');
                let option6 = document.createElement('option');
                let option7 = document.createElement('option');
                let option8 = document.createElement('option');
                let option9 = document.createElement('option');
                let option10 = document.createElement('option');
                let option11 = document.createElement('option');
                let option12 = document.createElement('option');
                let option13 = document.createElement('option');
                let option14 = document.createElement('option');
                let option15 = document.createElement('option');
                let option16 = document.createElement('option');
                let option17 = document.createElement('option');
                let option18 = document.createElement('option');
                let option19 = document.createElement('option');
                let option20 = document.createElement('option');
                let option21 = document.createElement('option');
                let option22 = document.createElement('option');
                let option23 = document.createElement('option');
                let option24 = document.createElement('option');
                let option25 = document.createElement('option');
                let option26 = document.createElement('option');
                let option27 = document.createElement('option');
                let option28 = document.createElement('option');
                let option29 = document.createElement('option');
                let option30 = document.createElement('option');
                let option31 = document.createElement('option');
                let option32 = document.createElement('option');
                let option33 = document.createElement('option');
                let option34 = document.createElement('option');
                let option35 = document.createElement('option');
                let option36 = document.createElement('option');
                let option37 = document.createElement('option');
                let option38 = document.createElement('option');
                let option39 = document.createElement('option');
                let option40 = document.createElement('option');
                let option41 = document.createElement('option');
                let option42 = document.createElement('option');
                let option43 = document.createElement('option');
                let option44 = document.createElement('option');
                let option45 = document.createElement('option');
                let option46 = document.createElement('option');
                let option47 = document.createElement('option');
                let option48 = document.createElement('option');
                let option49 = document.createElement('option');
                let option50 = document.createElement('option');
                let option51 = document.createElement('option');
                let option52 = document.createElement('option');
                let option53 = document.createElement('option');
                let option54 = document.createElement('option');
                let option55 = document.createElement('option');
                let option56 = document.createElement('option');
                let option57 = document.createElement('option');
                let option58 = document.createElement('option');
                let option59 = document.createElement('option');
                let option60 = document.createElement('option');
                let option61 = document.createElement('option');
                let option62 = document.createElement('option');
                let option63 = document.createElement('option');
                let option64 = document.createElement('option');
                let option65 = document.createElement('option');
                let option66 = document.createElement('option');
                let option67 = document.createElement('option');
                let option68 = document.createElement('option');
                let option69 = document.createElement('option');
                let option70 = document.createElement('option');
                let option71 = document.createElement('option');
                let option72 = document.createElement('option');
                let option73 = document.createElement('option');
                let option74 = document.createElement('option');
                let option75 = document.createElement('option');
                let option76 = document.createElement('option');
                option1.textContent = "Aeronautical Science - Professional Pilot";
                option2.textContent = "Applied Economics"
                option3.textContent = "Applied Gerontology";
                option4.textContent = "Applied Mathematics";
                option5.textContent = "Applied Psychology";
                option6.textContent = "Architectural Engineering Technology";
                option7.textContent = "Aviation Administration";
                option8.textContent = "Bioscience";
                option9.textContent = "Business Analytics";
                option10.textContent = "Business Management";
                option11.textContent = "Civil Engineering Technology";
                option12.textContent = "Computer Engineering Technology";
                option13.textContent = "Computer Programming and Information Systems";
                option14.textContent = "Computer Science";
                option15.textContent = "Computer Security Technology";
                option16.textContent = "Construction Management Engineering Technology";
                option17.textContent = "Criminal Justice: Law Enforcement Technology";
                option18.textContent = "Criminal Justice: Police, Courts and Corrections";
                option19.textContent = "Dental Hygiene";
                option20.textContent = "Dental Hygiene Completion - online";
                option21.textContent = "Electrical Engineering Technology";
                option22.textContent = "Geographic Information Systems";
                option23.textContent = "Global Business Management";
                option24.textContent = "Health Promotion and Wellness";
                option25.textContent = "Horticultural Technology Management";
                option26.textContent = "Industrial Technology - Automotive Management Technology";
                option27.textContent = "Industrial Technology - Facility Management Technology";
                option28.textContent = "Interaction Design (IxD)";
                option29.textContent = "Manufacturing Engineering Technology";
                option30.textContent = "Mechanical Engineering Technology";
                option31.textContent = "Medical Laboratory Science";
                option32.textContent = "Nursing";
                option33.textContent = "Nursing RN to BS Completion - online";
                option34.textContent = "Nutrition Science";
                option35.textContent = "Professional Communications";
                option36.textContent = "Science, Technology, & Society";
                option37.textContent = "Security Systems";
                option38.textContent = "Software Technology";
                option39.textContent = "Sport Management";
                option40.textContent = "Visual Communications: Art & Graphic Design";
                option41.textContent = "Criminal Justice - Law Enforcement";
                option42.textContent = "General Horticulture";
                option43.textContent = "Landscape Development";
                option44.textContent = "Liberal Arts and Sciences";
                option45.textContent = "Air Force ROTC";
                option46.textContent = "Anthropology Minor";
                option47.textContent = "Applied Mathematics Minor";
                option48.textContent = "Art & Graphic Design Minor";
                option49.textContent = "Asian Studies Minor";
                option50.textContent = "Aviation Administration Minor";
                option51.textContent = "Aviation Flight Minor";
                option52.textContent = "Biology Minor";
                option53.textContent = "Business Management Minor";
                option54.textContent = "Chemistry Minor";
                option55.textContent = "Communication Minor";
                option56.textContent = "Computer Networking Minor";
                option57.textContent = "Computer Programming and Information Systems Minor";
                option58.textContent = "Economics Minor";
                option59.textContent = "English Literature Minor";
                option60.textContent = "Geography Minor";
                option61.textContent = "History Minor";
                option62.textContent = "Italian Studies Minor";
                option63.textContent = "Latin American Studies Minor";
                option64.textContent = "Legal Studies Minor";
                option65.textContent = "Management Information Systems Minor";
                option66.textContent = "Middle Eastern and Islamic Studies Minor";
                option67.textContent = "Mobile Applications Development Minor";
                option68.textContent = "Organizational Leadership Minor";
                option69.textContent = "Ornamental Horticulture Minor";
                option70.textContent = "Physics Minor";
                option71.textContent = "Politics Minor";
                option72.textContent = "Sociology Minor";
                option73.textContent = "Sport Management Minor";
                option74.textContent = "Web Development Minor";
                option75.textContent = "Women, Gender, and Sexuality Studies Minor";
                option76.textContent = "Technology Management";
                updatemajor.appendChild(option0);
                updatemajor.appendChild(option1);
                updatemajor.appendChild(option2);
                updatemajor.appendChild(option3);
                updatemajor.appendChild(option4);
                updatemajor.appendChild(option5);
                updatemajor.appendChild(option6);
                updatemajor.appendChild(option7);
                updatemajor.appendChild(option8);
                updatemajor.appendChild(option9);
                updatemajor.appendChild(option10);
                updatemajor.appendChild(option11);
                updatemajor.appendChild(option12);
                updatemajor.appendChild(option13);
                updatemajor.appendChild(option14);
                updatemajor.appendChild(option15);
                updatemajor.appendChild(option16);
                updatemajor.appendChild(option17);
                updatemajor.appendChild(option18);
                updatemajor.appendChild(option19);
                updatemajor.appendChild(option20);
                updatemajor.appendChild(option21);
                updatemajor.appendChild(option22);
                updatemajor.appendChild(option23);
                updatemajor.appendChild(option24);
                updatemajor.appendChild(option25);
                updatemajor.appendChild(option26);
                updatemajor.appendChild(option27);
                updatemajor.appendChild(option28);
                updatemajor.appendChild(option29);
                updatemajor.appendChild(option30);
                updatemajor.appendChild(option31);
                updatemajor.appendChild(option32);
                updatemajor.appendChild(option33);
                updatemajor.appendChild(option34);
                updatemajor.appendChild(option35);
                updatemajor.appendChild(option36);
                updatemajor.appendChild(option37);
                updatemajor.appendChild(option38);
                updatemajor.appendChild(option39);
                updatemajor.appendChild(option40);
                updatemajor.appendChild(option41);
                updatemajor.appendChild(option42);
                updatemajor.appendChild(option43);
                updatemajor.appendChild(option44);
                updatemajor.appendChild(option45);
                updatemajor.appendChild(option46);
                updatemajor.appendChild(option47);
                updatemajor.appendChild(option48);
                updatemajor.appendChild(option49);
                updatemajor.appendChild(option50);
                updatemajor.appendChild(option51);
                updatemajor.appendChild(option52);
                updatemajor.appendChild(option53);
                updatemajor.appendChild(option54);
                updatemajor.appendChild(option55);
                updatemajor.appendChild(option56);
                updatemajor.appendChild(option57);
                updatemajor.appendChild(option58);
                updatemajor.appendChild(option59);
                updatemajor.appendChild(option60);
                updatemajor.appendChild(option61);
                updatemajor.appendChild(option62);
                updatemajor.appendChild(option63);
                updatemajor.appendChild(option64);
                updatemajor.appendChild(option65);
                updatemajor.appendChild(option66);
                updatemajor.appendChild(option67);
                updatemajor.appendChild(option68);
                updatemajor.appendChild(option69);
                updatemajor.appendChild(option70);
                updatemajor.appendChild(option71);
                updatemajor.appendChild(option72);
                updatemajor.appendChild(option73);
                updatemajor.appendChild(option74);
                updatemajor.appendChild(option75);
                updatemajor.appendChild(option76);
                //updatemajor[0].disabled = true;
                let updateacyear = document.createElement('select');
                let optionz = document.createElement('option');
                optionz.textContent = "Academic Year";
                optionz.value = "";
                let freshman = document.createElement('option');
                freshman.textContent = "Freshman";
                let sophomore = document.createElement('option');
                sophomore.textContent = "Sophomore";
                let junior = document.createElement('option');
                junior.textContent = "Junior";
                let senior = document.createElement('option');
                senior.textContent = "Senior";
                updateacyear.appendChild(optionz);
                updateacyear.appendChild(freshman);
                updateacyear.appendChild(sophomore);
                updateacyear.appendChild(junior);
                updateacyear.appendChild(senior);
                let matchedstatus = document.createElement('select');
                let matched1 = document.createElement('option');
                matched1.textContent = "Choose Status";
                matched1.value = "";
                let matched = document.createElement('option');
                let unmatched = document.createElement('option');
                matched.textContent = "Matched";
                unmatched.textContent = "Unmatched";
                matchedstatus.appendChild(matched1);
                matchedstatus.appendChild(matched);
                matchedstatus.appendChild(unmatched);
                let subButton = document.createElement('button');
                subButton.innerText = "Update";
                let dob = document.createElement('input');
                dob.placeholder = "Date of Birth";
                updateform.appendChild(updatefirstname);
                updateform.appendChild(updatelastname);
                updateform.appendChild(dob);
                updateform.appendChild(updatemajor);
                updateform.appendChild(updateacyear);
                updateform.appendChild(matchedstatus);
                updateform.appendChild(subButton);
                ul2.appendChild(updateform);
                updateform.addEventListener("submit", (e) => {

                    e.preventDefault();

                    firebase.auth().onAuthStateChanged(user => {
                        if (user) {
                            if (updatelastname.value !== "") {
                                db.collection('Users').doc(doc.id).update({
                                    Last_Name: updatelastname.value,
                                })
                            }
                            if (updatefirstname.value !== "") {
                                db.collection('Users').doc(doc.id).update({
                                    First_Name: updatefirstname.value,
                                })
                            }
                            if (updatemajor.value !== "") {
                                db.collection('Users').doc(doc.id).update({
                                    Major: updatemajor.value,
                                })
                            }
                            if (updateacyear.value !== "") {
                                db.collection('Users').doc(doc.id).update({
                                    Academic_Year: updateacyear.value,
                                })
                            }
                            if (dob.value != "") {
                                db.collection('Users').doc(doc.id).update({
                                    dob: dob.value,
                                })
                            }
                            if (matchedstatus.value != "") {
                                db.collection('Users').doc(doc.id).update({
                                    status: matchedstatus.value,
                                })
                            }
                            updateform.innerHTML = "";
                        }
                    })
                })
            }
        });
        updatearea.style.border = "";
        updatearea.innerHTML = "";
    })


    let _major = document.createElement('li');
    let _year = document.createElement('li');
    let _gender = document.createElement('li');
    let _dob = document.createElement('li');
    let _interests = document.createElement('li');
    let _status = document.createElement('li');
    let _description = document.createElement('li');
    let _contact = document.createElement('li');
    let matchedWith = document.createElement('li');

    header2.innerHTML = "😎" + doc.data().First_Name + " " + doc.data().Last_Name;

    ul2.setAttribute('data-id', doc.id);
    _major.textContent = "🏅" + "Major: " + doc.data().Major;
    _year.textContent = "🏫" + "Academic Year: " + doc.data().Academic_Year;
    _gender.textContent = "⭐" + "Gender: " + doc.data().Gender;
    _dob.textContent = "⌛" + "Date of Birth: " + doc.data().dob;
    _interests.textContent = "📌" + "Interests: " + doc.data().interests + ", " + doc.data().interests2;
    _status.textContent = "💖" + "Matched Status: " + doc.data().status;
    _description.textContent = "💬" + "Description: " + doc.data().description;
    _contact.textContent = "☎️" + "Best Way to Contact: " + doc.data().contact;

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
        const match9 = db.collection('Users');
        console.log(doc.id);
        var permanent = doc.id;
        const result9 = match9.where(firebase.firestore.FieldPath.documentId(), '==', doc.id);
        result9.get()
            .then(Users => {
                Users.forEach(doc => {
                    var mstatus = doc.data().status;
                    var yearss = doc.data().Academic_Year;
                    console.log(mstatus, yearss);
                    if (mstatus == "Matched") {
                        if (yearss == "Freshman" || yearss == "Sophomore") {
                            console.log(permanent);
                            db.collection('finalDecision').where("menteeID", "==", permanent).get().then((snapshot => {
                                snapshot.docs.forEach(docg => {
                                    var lover = docg.data().mentorID;
                                    console.log(lover);
                                    const lover1 = db.collection('Users');
                                    const result10 = lover1.where(firebase.firestore.FieldPath.documentId(), '==', lover);
                                    result10.get()
                                        .then(Users => {
                                            Users.forEach(docu => {
                                                var fullName = docu.data().First_Name + " " + docu.data().Last_Name;
                                                matchedWith.textContent = "💑Matched With: " + fullName;
                                                matchedWith.style.backgroundColor = "#57C2D8";
                                                matchedWith.style.fontStyle = "italic";
                                                matchedWith.style.fontWeight = "bold";
                                                ul2.appendChild(matchedWith);
                                            })
                                        })
                                })
                            }));
                        }
                    }
                    if (mstatus == "Matched") {
                        if (yearss == "Junior" || yearss == "Senior") {
                            console.log(permanent);
                            db.collection('finalDecision').where("mentorID", "==", permanent).get().then((snapshot => {
                                snapshot.docs.forEach(docw => {
                                    var lover = docw.data().menteeID;
                                    console.log(lover);
                                    const lover2 = db.collection('Users');
                                    const result11 = lover2.where(firebase.firestore.FieldPath.documentId(), '==', lover);
                                    result11.get()
                                        .then(Users => {
                                            Users.forEach(docu => {
                                                var fullName = docu.data().First_Name + " " + docu.data().Last_Name;
                                                matchedWith.textContent = "💑Matched With: " + fullName;
                                                matchedWith.style.backgroundColor = "#57C2D8";
                                                matchedWith.style.fontStyle = "italic";
                                                matchedWith.style.fontWeight = "bold";
                                                ul2.appendChild(matchedWith);
                                            })
                                        })
                                })
                            }));
                        }
                    }
                });
            })
        ul2.appendChild(_description);
        ul2.appendChild(updatearea);

    })
    profiles.appendChild(ul2);

}


function initApp() {
    // Listening for Auth state changes.
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("user was signed in");
            const db = firebase.firestore();
            console.log(user.uid);

            const profile = db.collection('Users');
            const query = profile.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);

            query.get()
                .then(Users => {
                    Users.forEach(doc => {
                        data = doc.data();
                        console.log(data);
                    });
                });


            console.log(user);
        } else {
            // User is signed out.
            console.log('No user found');
        }
    });

}