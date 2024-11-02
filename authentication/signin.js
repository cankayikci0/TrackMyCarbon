import { auth, signInUser, getData, updateUserCarbonFootprint, updateUserDolar, updateUserStar, getRecommendations, addRecommendation } from './auth.js';

// Example usage
const email = "test38@example.com"; // Email from your input
const password = "testPassword123"; // Password from your input

signInUser(email, password)
  .then(user => {
    console.log("Signed in user:", user.uid); 
    // updateUserStar(auth.currentUser.uid, 9);
    // getData(auth.currentUser.uid);
    getRecommendations(auth.currentUser.uid);
    // updateUserCarbonFootprint(auth.currentUser.uid, 5)
    // addRecommendation(auth.currentUser.uid, { weekNum: 1, data: "Sample data for week 1" });
  })
  .catch(error => {
    console.error("Sign-in failed:", error);
    // Handle error (e.g., show error message to user)
  });

 
  
