import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  arrayUnion, 
  arrayRemove 
} from "firebase/firestore";
import { auth, db } from "./auth.js";

class UserService {
  constructor() {
    this.auth = auth;
    this.db = db;
  }

 // Create User Document on Signup
 async signUpUser(email, password, username) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // Initialize user document in Firestore
      await setDoc(doc(this.db, "users", user.uid), {
        username,
        email,
        star: 0,
        dolar: 0,
        completedChallengesCount: 0,
        dailyCarbonFootprint: 0,
        totalCarbonReduction: 0,
        recommendations: []
      });

      console.log("User created successfully!");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  // Read User Data
  async getUserData() {
    const user = this.auth.currentUser;
    if (user) {
      const userDoc = await getDoc(doc(this.db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("User Data:", userDoc.data());
        return userDoc.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } else {
      console.log("No user is signed in.");
      return null;
    }
  }

  async getUserData() {
    try {
      const userDocRef = doc(this.db, 'users', this.auth.currentUser.uid);  // Get document reference
      const userDoc = await getDoc(userDocRef);  // Fetch the document

      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.log("No such user!");
        return null;
      }
    } catch (error) {
      console.error("Error getting user data: ", error);
      return null;
    }
  }

  // Update User Data
  async updateUserData(newData) {
    const user = this.auth.currentUser;
    if (user) {
      const userRef = doc(this.db, "users", user.uid);
      await updateDoc(userRef, newData);
      console.log("User data updated!");
    } else {
      console.log("No user is signed in.");
    }
  }

  // Add a Weekly Recommendation
  async addRecommendation(week, recommendationData) {
    const user = this.auth.currentUser;
    if (user) {
      const userRef = doc(this.db, "users", user.uid);

      await updateDoc(userRef, {
        recommendations: arrayUnion({ week, ...recommendationData })
      });
      console.log("Recommendation added!");
    } else {
      console.log("No user is signed in.");
    }
  }

  // Delete Entire User Document
  async deleteUserAccount() {
    const user = this.auth.currentUser;
    if (user) {
      await deleteDoc(doc(this.db, "users", user.uid));
      console.log("User document deleted.");
    } else {
      console.log("No user is signed in.");
    }
  }

  // Delete a Specific Recommendation
  async deleteRecommendation(week, recommendationData) {
    const user = this.auth.currentUser;
    if (user) {
      const userRef = doc(this.db, "users", user.uid);

      await updateDoc(userRef, {
        recommendations: arrayRemove({ week, ...recommendationData })
      });
      console.log("Recommendation deleted!");
    } else {
      console.log("No user is signed in.");
    }
  }
}

export default UserService;