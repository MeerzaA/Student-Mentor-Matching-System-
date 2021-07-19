console.log(firebase);
const user = firebase.auth().currentUser;
const picture = document.querySelector('#profForm');
const userProfile = document.querySelector('#profileInfo');
const db = firebase.firestore();

var ImgName, ImgURL;
var files = [];
var reader;

//select image
      
        document.getElementById("putProfPic1").onclick = function(e){
            var input = document.createElement('input');
            input.type = 'file';
        
            input.onchange = e => {
                    
                files = e.target.files;
                reader = new FileReader();
                reader.onload =  function(){
                    document.getElementById("myimg").src = reader.result;
                }
                reader.readAsDataURL(files[0]);
            }
            input.click();
};

//upload image
document.getElementById("putProfPic").onclick = function(e){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user.uid);
          firebase.storage().ref('Users/' + user.uid + '/profile.jpg').put(files[0]);
          
        } else {
          window.alert("No user is signed in");
        }
        setInterval(() => {
            window.location.assign("../Profile/Profile.html");
        },800)
      });
}




window.onload = function () {
    initApp();
};
function SignOutEvent() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('user was signed out');
    }).catch((error) => {
        // An error happened.
        console.log('there was an error')
    });
    setInterval(() => {
        window.location.assign("../Log In/Login.html");
    },200)
}

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
                    console.log(Major, " ", academicYear, " ", status, " ",interests);
                    addUsertoList1(doc);
                })
            })
 } 
});

function addUsertoList1(doc) {
    let ul2 = document.createElement('li');
    let header2 = document.createElement('h2');
    

    let _major = document.createElement('li');
    let _year = document.createElement('li');
    let _gender = document.createElement('li');
    let _dob = document.createElement('li');
    let _interests = document.createElement('li');
    let _status = document.createElement('li');
    let _description = document.createElement('li');
    let _contact = document.createElement('li');
    let matchedWith = document.createElement('li');

    header2.innerHTML= "😎" + doc.data().First_Name + " " + doc.data().Last_Name;

    ul2.setAttribute('data-id', doc.id);
    _major.textContent = "🏅" + "Major: "+doc.data().Major;
    _year.textContent = "🏫" + "Academic Year: "+doc.data().Academic_Year;
    _gender.textContent = "⭐" + "Gender: "+doc.data().Gender;
    _dob.textContent = "⌛" + "Date of Birth: "+doc.data().dob;
    _interests.textContent = "📌" + "Interests: "+doc.data().interests + ", " + doc.data().interests2;
    _status.textContent = "💖" + "Matched Status: "+doc.data().status;
    _description.textContent = "💬" + "Description: "+doc.data().description;
    _contact.textContent = "☎️" + "Best Way to Contact: " +doc.data().contact;

    firebase.auth().onAuthStateChanged(user => {
        let _profilePic = document.createElement('img');
        //_profilePic.src = "content/defaults.png";
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
        console.log(user.uid);
        var permanent = user.uid;
                const result9 = match9.where(firebase.firestore.FieldPath.documentId(), '==', user.uid);
                    result9.get()
                        .then(Users => {
                            Users.forEach(doc => {
                                var mstatus = doc.data().status;
                                var yearss = doc.data().Academic_Year;
                                console.log(mstatus, yearss);
                                if (mstatus == "Matched") {
                                    if (yearss == "Freshman" || yearss == "Sophomore") {
                                        console.log(permanent);
                                        db.collection('finalDecision').where("menteeID","==",permanent).get().then((snapshot => {
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
                                                        matchedWith.style.backgroundColor = "#F29291";
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
                                        db.collection('finalDecision').where("mentorID","==",permanent).get().then((snapshot => {
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
                                                        matchedWith.style.backgroundColor = "#F29291";
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
        
    })
    userProfile.appendChild(ul2);

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
var y = new Date();
var x = y.getMonth();
var z = y.getFullYear();
var b = y.getDate();
console.log(z);
console.log(b);
        console.log(x);
console.log(z+"-"+(x+1)+"-"+b);