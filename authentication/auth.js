import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from './firebaseConfig.json' assert { type: 'json' };
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, getDocs, arrayUnion } from "firebase/firestore";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialized once

// Register a new user and save email to Firestore
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      console.log("User created successfully:", userCredential.user.uid);
      try {
        const userDocRef = doc(db, "users", userCredential.user.uid);
        await setDoc(userDocRef, {
          uid: userCredential.user.uid,
          userEmail: email,
          star: 0,
          dolar: 0,
          completedChallengesCount: 0,
          dailyCarbonFootprint: 0,
          totalCarbonReduction: 0,
          recommendations: []
        });
        console.log("Document created with custom ID:", userCredential.user.uid);
      } catch (e) {
        console.error("Error setting document:", e);
      }
      return userCredential.user; // Return user for further use
    })
    .catch((error) => {
      console.error("Error creating user:", error.code, error.message);
      throw error; // Re-throw error for handling in the caller
    });
};

// Sign in existing user
export const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User signed in successfully");
      return userCredential.user; // Return user for further use
    })
    .catch((error) => {
      console.error("Error signing in user:", error.code, error.message);
      throw error; // Re-throw error for handling in the caller
    });
};

// Listener for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in with UID:", user.uid);
  } else {
    console.log("User is signed out");
  }
});

// Fetch user data by UID
export async function getUserByUID(uid) {
  const docRef = doc(db, "users", uid);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error; // Propagate the error
  }
}

export async function getData(uid){
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists){
    console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  }
}

export async function updateUserCarbonFootprint(userId, newDailyCarbon) {
  const userDocRef = doc(db, "users", userId);
  try {
    await updateDoc(userDocRef, {
      dailyCarbonFootprint: newDailyCarbon
    });
    console.log("Daily carbon footprint updated successfully!");
  } catch (error) {
    console.error("Error updating daily carbon footprint:", error);
  }
}

export async function updateUserDolar(userId, updatedDolar) {
  const userDocRef = doc(db, "users", userId);
  try {
    await updateDoc(userDocRef, {
      dolar: updatedDolar
    });
    console.log("Dolar value updated successfully!");
  } catch (error) {
    console.error("Error updating dolar value:", error);
  }
}

export async function readRecommendations(userID){
  const recommendationDocRef = doc(db, "recommendations")
}

export async function updateUserStar(userId, updatedStar) {
  const userDocRef = doc(db, "users", userId);
  try {
    await updateDoc(userDocRef, {
      star: updatedStar
    });
    console.log("Star value updated successfully!");
  } catch (error) {
    console.error("Error updating star value:", error);
  }
}

export async function updateChallengesCount(userId, updatedChallengesCount) {
  const userDocRef = doc(db, "users", userId);
  try {
    await updateDoc(userDocRef, {
      completedChallengesCount: updatedChallengesCount
    });
    console.log("Completed challenges count updated successfully!");
  } catch (error) {
    console.error("Error updating completed challenges count:", error);
  }
}

export async function getRecommendations(uid) {
  const docRef = doc(db, "users", uid);
  
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const recommendations = data.recommendations || [];
      
      if (recommendations.length === 0) {
        console.log("No recommendations found for this user.");
      } else {
        console.log("Recommendations:", recommendations);
      }
    } else {
      console.log("No such user document!");
    }
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

export async function addRecommendation(userId, weekData) {
  try {
    const userDocRef = doc(db, "users", userId);

    // Use arrayUnion to add the new recommendation to the recommendations array
    await updateDoc(userDocRef, {
      recommendations: arrayUnion(weekData)
    });

    console.log("Recommendation added successfully!");
  } catch (error) {
    console.error("Error adding recommendation:", error);
  }
}

export {auth, db}