const user = firebase.auth().currentUser;
const flagForm = document.querySelector('#flagForm');
const flagProfile = document.querySelector('#flagsInfo');
const db = firebase.firestore();


    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            db.collection('flaggedReviews').get().then((snapshot => {
                snapshot.docs.forEach(doc => {
                    addFlagstoList1(doc);
                })
            }));
     } 
        flagProfile.innerHTML='';
    });



function addFlagstoList1(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    let deleteButton = document.createElement('button');
    let leaveButton = document.createElement('button');
    let readButton = document.createElement('button');
    deleteButton.innerText = "Delete This Review";
    leaveButton.innerText = "Remove Flag";
    readButton.innerText = "Read This Post";
    readButton.style.backgroundColor = "#8FE8F1";
    deleteButton.style.backgroundColor = "#F57F7F";
    leaveButton.style.backgroundColor = "#65F296";
    var postID = doc.data().flaggedPost;
    var flaggers = doc.data().flaggerID;

    readButton.addEventListener("click", (e) => {
        const postReview = db.collection('Reviews');
        const readReview = postReview.where(firebase.firestore.FieldPath.documentId(), '==', postID);
        
        readReview.get()
            .then(Users => {
                Users.forEach(doc => {
                    data = doc.data();
                    console.log(data);
                    let ul = document.createElement('li');
                    let _className = document.createElement('li');
                    let _professor = document.createElement('li');
                    let _rating = document.createElement('li');
                    let _instructorReview = document.createElement('li');
                    let _enjoy = document.createElement('li');
                    let _credits = document.createElement('li');
                    let _textbook = document.createElement('li');
                
                    ul.setAttribute('data-id', doc.id);
                    _className.textContent = "🚩" + "Class Name: "+data.className + " " +data.classNumber;
                    _professor.textContent = "🚩" + "Professor: "+data.professor;
                    _rating.textContent = "🚩" + "Rating: "+data.rating;
                    _instructorReview.textContent = "🚩" + "Instructor Review: "+data.instructorReview;
                    _enjoy.textContent = "🚩" + "Class Review: "+data.Enjoy;
                    _credits.textContent = "🚩" + "Workload: "+data.credits;
                    _textbook.textContent = "🚩" + "TextBook: "+data.textbook;
                
                    ul.appendChild(_className);
                    ul.appendChild(_professor);
                    ul.appendChild(_rating);
                    ul.appendChild(_enjoy);
                    ul.appendChild(_instructorReview);
                    ul.appendChild(_credits);
                    ul.appendChild(_textbook);

                    ul2.appendChild(ul);
                });
            });
    });

    deleteButton.addEventListener('click', (e) => {

        console.log(postID);
        db.collection("Reviews").doc(postID).delete();
        db.collection("flaggedReviews").doc(flaggers).delete();
        window.alert("Review Deleted, Sheriff :)");
        ul2.innerHTML = "";
})
leaveButton.addEventListener('click', (e) => {

    console.log(postID);
    db.collection("flaggedReviews").doc(flaggers).delete();
    window.alert("Flag Removed Captain :)");
    ul2.innerHTML = "";
})

let writtenBy = document.createElement('li');
let _flagger = document.createElement('li');
let _flaggedPost = document.createElement('li');
let _offense = document.createElement('li');
let _description = document.createElement('li');

ul2.setAttribute('data-id', doc.id);
                    _flagger.textContent = "🆔" + "Flagger ID: "+doc.data().flaggerID;
                    _flaggedPost.textContent = "🆔" + "Post ID: "+doc.data().flaggedPost;
                    _offense.textContent = "⚖️" + "Offense: "+doc.data().offense;
                    _description.textContent = "📜" + "Description: "+doc.data().description;

    const poster = db.collection('Users');
        const posterProfile = poster.where(firebase.firestore.FieldPath.documentId(), '==', flaggers);
        
        posterProfile.get()
            .then(Users => {
                Users.forEach(doc => {
                    dataz = doc.data();
                    console.log(dataz);
                    header2.innerHTML= "🏳️Flagged By🏳️: " + dataz.First_Name + " " + dataz.Last_Name;
                });
            });

            const postReviews = db.collection('Reviews');
            const readReviews = postReviews.where(firebase.firestore.FieldPath.documentId(), '==', postID);
            
            readReviews.get()
                .then(Users => {
                    Users.forEach(doc => {
                        datas = doc.data();
                        console.log(datas);
                        writtenBy.textContent = "🧍" + "Written By: " + datas.reviewerName;
                        
                    });
                });

            ul2.appendChild(header2);
            ul2.appendChild(writtenBy);
            ul2.appendChild(_flagger);
            ul2.appendChild(_flaggedPost);
            ul2.appendChild(_offense);
            ul2.appendChild(_description);
            ul2.appendChild(readButton);
            ul2.appendChild(leaveButton);
            ul2.appendChild(deleteButton);

            flagProfile.appendChild(ul2);

}

