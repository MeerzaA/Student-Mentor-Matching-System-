const db = firebase.firestore();
const queriez = document.querySelector('#Queries');
const forumDisplay = document.querySelector('#forumDisplay');
const flags = document.querySelector('#flags');
const searchForm = document.querySelector('#SearchReviews');
const wrapper = document.querySelector('#wrapper');

searchForm.addEventListener('submit', (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            var variable = document.getElementById('category').value;
            var variable2 = document.getElementById('professor').value;
            var variable3 = document.getElementById('number').value;
            var variable4 = document.getElementById('levelofd').value;
            console.log(variable);
            console.log(variable2);
            const prof = firebase.firestore().collection('Reviews').orderBy('className2');
            if (variable == "" && variable4 == "") {
            prof.where("professor", "==", variable2).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        } 
        if (variable == "") {
            prof.where("professor", "==", variable2).where("levelofd", "==", variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        } 
        if (variable3 == "" && variable2 == "" && variable4 == "") {
            prof.where("className", "==", variable).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        } 
        if (variable3 == "" && variable2 == "" && variable == "") {
            prof.where("levelofd", "==", variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        } 
       if (variable2 == "") {
            prof.where("className", "==", variable).where("classNumber","==",variable3).where("levelofd", "==", variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        if (variable3 == "") {
            prof.where("className", "==", variable).where("professor","==",variable2).where("levelofd", "==", variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        if (variable4 == "") {
            prof.where("className", "==", variable).where("classNumber","==",variable3).where("professor", "==", variable2).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        if (variable2 == "" && variable4 == "") {
            prof.where("className", "==", variable).where("classNumber","==",variable3).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        if (variable3 == "" && variable4 == "") {
            prof.where("className", "==", variable).where("professor","==",variable2).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        if (variable3 == "" && variable2 == "") {
            prof.where("className", "==", variable).where("levelofd","==",variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
            else {
            prof.where("className", "==", variable).where("professor", "==", variable2).where('classNumber', "==", variable3).where("levelofd", "==", variable4).get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addItemstoList2(doc);
                })
            }));
        }
        queriez.innerHTML='';
        }
    });

});


function addItemstoList2(doc) {
    let ul = document.createElement('li');
    let header = document.createElement('h2');
    let button = document.createElement('button');
    button.innerText = "Flag This Post";
    button.style.backgroundColor = "#F77B88";
    let flagArea = document.createElement('li');
    flagArea.appendChild(button);
    button.addEventListener("click", (e) => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                console.log(user);
                console.log(user.uid);
                docs = doc.id;
                const match3 = db.collection('Users');
                const result3 = match3.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                    result3.get()
                        .then(Users => {
                            Users.forEach(doc => {
                                fName = doc.data().First_Name;
                                lName = doc.data().Last_Name;
                                console.log(fName, lName);
                                db.collection('flaggedReviews').doc(user.uid).set({
                                    flaggerID: user.uid,
                                    flaggedPost: docs,
                                })
                            })
                        })
    
            } else {
    
                window.alert('Not Signed In');
    
            }
        });
        let flagButton = document.createElement('button');
        flagButton.innerText = "Submit Explanation";
        flagButton.style.backgroundColor = "#4BD4DF";
        flagButton.addEventListener("click", (e) => {
          flagPost();  
        })
        ul.appendChild(flagButton);
        flagArea.innerHTML = "";
    });
    
    let _className = document.createElement('li');
    let _professor = document.createElement('li');
    let _rating = document.createElement('li');
    let _instructorReview = document.createElement('li');
    let _enjoy = document.createElement('li');
    let _classNumber = document.createElement('li');
    let _credits = document.createElement('li');
    let _textbook = document.createElement('li');
    let difficulty = document.createElement('li');

    header.innerHTML= "⭐" +'Reviewer: '+ doc.data().reviewerName;

    ul.setAttribute('data-id', doc.id);
    _className.textContent = "🎓" + "Class Name: "+doc.data().className + " " +doc.data().classNumber;
    _professor.textContent = "🎓" + "Professor: "+doc.data().professor;
    _rating.textContent = "🎓" + "Rating: "+doc.data().rating;
    _instructorReview.textContent = "🎓" + "Instructor Review: "+doc.data().instructorReview;
    _enjoy.textContent = "🎓" + "Class Review: "+doc.data().Enjoy;
    _credits.textContent = "🎓" + "Workload: "+doc.data().credits;
    _textbook.textContent = "🎓" + "TextBook: "+doc.data().textbook;
    difficulty.textContent = "🎓" + "Difficulty Level: "+doc.data().levelofd;

    ul.appendChild(header);
    ul.appendChild(_className);
    ul.appendChild(_professor);
    ul.appendChild(_rating);
    ul.appendChild(difficulty);
    ul.appendChild(_enjoy);
    ul.appendChild(_instructorReview);
    ul.appendChild(_credits);
    ul.appendChild(_textbook);
    ul.appendChild(flagArea);
    //ul.appendChild(button);

    queriez.appendChild(ul);

}

function flagPost() {
    window.location.href = "../Flag Review/FlagReview.html";
}

function godButton(){
    let godButton = document.createElement('button');
    godButton.innerText = "God Mode: View Flags";
    godButton.style.backgroundColor = "#4BDFA5";
    godButton.addEventListener("click", (e) => {
        window.location.href = "../Display Flags/DisplayFlags.html";
    })
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            if (user.uid == "qrwiHmoGQNcWw3jZdeub2ZRTdPG2") {
                wrapper.appendChild(godButton);
            }

        } 
}
    )}

godButton();
