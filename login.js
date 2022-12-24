// Initialize Firebase
firebase.initializeApp({
   apiKey: "AIzaSyClCnms0V_WDJyQAgmJJlK3eZ8uVr9Yubg",
  authDomain: "midnightservices.firebaseapp.com",
  projectId: "midnightservices",
  storageBucket: "midnightservices.appspot.com",
  messagingSenderId: "565143011143",
  appId: "1:565143011143:web:03c558465f6bdc43b09662"
});

// Set up Firebase Authentication
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// Get DOM elements
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');

// Set up login and logout buttons
loginButton.addEventListener('click', () => {
  auth.signInWithPopup(provider);
});
logoutButton.addEventListener('click', () => {
  auth.signOut();
});

// Set up Firebase Authentication event handlers
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
  } else {
    // User is signed out
    loginButton.style.display = 'block';
    logoutButton.style.display = 'none';
  }
});
