console.log(firebase);

window.onload = function () {
    initApp();
};

const loginForm = document.querySelector('#Login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get Email and Pass from Textboxes
    const email = loginForm['Login_Email'].value;
    const pass = loginForm['Login_Pass'].value;

    if (email.length < 1) {
        alert('Please enter an email address.');
        return;
    }
    if (pass.length < 1) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    })

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = "../Profile/Profile.html";
            console.log(user);
        }
    });

});

const SignUpForm = document.querySelector('#Signup');

SignUpForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // Get Email and Pass from Textboxes
    const email = SignUpForm['SignUp_Email'].value;
    const pass = SignUpForm['SignUp_Pass'].value;

    if (email.length < 1) {
        alert('Please enter an email address.');
        return;
    }
    if (pass.length < 1) {
        alert('Please enter a password.');
        return;
    }

    
    // Create user with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            
            db.collection('Users').doc(user.uid).set({
                First_Name: "",
                Last_Name: "",
                Major: "",
                Academic_Year: "",
                interests: "",
                interests2: "",
                Gender: "",
                dob: "",
                status: "",
                contact: "",
                description:""
            });
        }
    });
    setInterval(() => {
        window.location.assign("../Profile/Profile.html");
    },800)

});


function initApp() {
    // Listening for Auth state changes.
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("user was signed in");
            console.log(user);
        } else {
            // User is signed out.
            console.log('No user found');
        }
    });

}

function googleSignIn() {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(console.log);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            db.collection('Users').doc(user.uid).set({
                First_Name: "",
                Last_Name: "",
                Major: "",
                Academic_Year: "",
                interests: "",
                interests2: "",
                Gender: "",
                dob: "",
                status: "",
                contact: "",
                description:""
            });
        }
    });

}
