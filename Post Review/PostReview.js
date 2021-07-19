
const db = firebase.firestore();
const reviewForm = document.querySelector('#WriteReview');
let count = 1;

reviewForm.addEventListener('submit', (e) => {

    e.preventDefault();

    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            console.log(user);
            console.log(user.uid);
            db.collection('Reviews').add({
    
                professor: reviewForm['professorName'].value,
                className: reviewForm['category'].value,
                rating: reviewForm['rating'].value,
                user_id: user.uid,
                instructorReview: reviewForm['BB'].value,
                Enjoy: reviewForm['AA'].value,
                classNumber: reviewForm['number'].value,
                credits: reviewForm['CC'].value,
                textbook: reviewForm['DD'].value,
                reviewerName: reviewForm['reviewerName'].value,
                className2: reviewForm['category'].value,
                levelofd: reviewForm['levelofd'].value
            
            })

        } else {

            window.alert('Not Signed In');

        }
        //window.alert("Your Review has been Submitted.");
        setInterval(() => {
            window.location.assign("../Forum/Forums.html");
        },800)
    });
    //window.location.assign("forumsDisplay2.html");
});








