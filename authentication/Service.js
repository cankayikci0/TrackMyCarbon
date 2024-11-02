import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from './firebaseConfig.json' assert { type: 'json' };
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, getDocs, arrayUnion } from "firebase/firestore";


class Service {
    constructor() {
        // Initialize Firebase
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.auth = getAuth(this.app);
        
        // Monitor authentication state changes
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            console.log("User is signed in with UID:", user.uid);
          } else {
            console.log("User is signed out");
          }
        });
      }

      async registerUser(email, password) {
        try {
          const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
          console.log("User created successfully:", userCredential.user.uid);
    
          const userDocRef = doc(this.db, "users", userCredential.user.uid);
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
          return userCredential.user;
        } catch (error) {
          console.error("Error creating user:", error.code, error.message);
          throw error;
        }
      }
    
      // Sign in an existing user
      async signInUser(email, password) {
        try {
          const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
          console.log("User signed in successfully");
          return userCredential.user;
        } catch (error) {
          console.error("Error signing in user:", error.code, error.message);
          throw error;
        }
      }
    
      // Fetch user data by UID
      async getUserByUID(uid) {
        const docRef = doc(this.db, "users", uid);
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
          throw error;
        }
      }
    
      // Update user's daily carbon footprint
      async updateUserCarbonFootprint(userId, newDailyCarbon) {
        const userDocRef = doc(this.db, "users", userId);
        try {
          await updateDoc(userDocRef, { dailyCarbonFootprint: newDailyCarbon });
          console.log("Daily carbon footprint updated successfully!");
        } catch (error) {
          console.error("Error updating daily carbon footprint:", error);
        }
      }
    
      // Update user's dolar value
      async updateUserDolar(userId, updatedDolar) {
        const userDocRef = doc(this.db, "users", userId);
        try {
          await updateDoc(userDocRef, { dolar: updatedDolar });
          console.log("Dolar value updated successfully!");
        } catch (error) {
          console.error("Error updating dolar value:", error);
        }
      }
    
      // Update user's star value
      async updateUserStar(userId, updatedStar) {
        const userDocRef = doc(this.db, "users", userId);
        try {
          await updateDoc(userDocRef, { star: updatedStar });
          console.log("Star value updated successfully!");
        } catch (error) {
          console.error("Error updating star value:", error);
        }
      }
    
      // Update user's completed challenges count
      async updateChallengesCount(userId, updatedChallengesCount) {
        const userDocRef = doc(this.db, "users", userId);
        try {
          await updateDoc(userDocRef, { completedChallengesCount: updatedChallengesCount });
          console.log("Completed challenges count updated successfully!");
        } catch (error) {
          console.error("Error updating completed challenges count:", error);
        }
      }
    
      // Fetch recommendations for a user
      async getRecommendations(uid) {
        const docRef = doc(this.db, "users", uid);
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
    
      // Add a recommendation to the user's record
      async addRecommendation(userId, weekData) {
        const userDocRef = doc(this.db, "users", userId);
        try {
          await updateDoc(userDocRef, {
            recommendations: arrayUnion(weekData)
          });
          console.log("Recommendation added successfully!");
        } catch (error) {
          console.error("Error adding recommendation:", error);
        }
      }
    }

    // Export the class as an instance to use throughout the app
    export default new Service();