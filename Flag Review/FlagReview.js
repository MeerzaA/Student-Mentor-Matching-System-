const db = firebase.firestore();
const flagForm = document.querySelector('#flagPost');

flagForm.addEventListener('submit', (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            db.collection('flaggedReviews').doc(user.uid).update({
                offense: flagForm['offense'].value,
                description: flagForm['flag'].value,
            })
         } else {

            window.alert('Not Signed In');

        }
        setInterval(() => {
            window.location.assign("../Forum/Forums.html");
        },600)
    });
});