const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log('user is signed in', user);
  } else {
    // User is signed out
    console.log('user is signed out');
    navigate('/login');
  } 
});

unsubscribe(); //Important: This line is crucial and often missed, removing the listener.