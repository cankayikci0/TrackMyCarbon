// Manager.js
import { firestore } from './firebaseConfig';

class Manager {
  // Kullanıcı Ekleme
  async addUser(userData) {
    try {
      await firestore.collection('users').doc(userId).set(userData);
      console.log('User added successfully!');
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  }

  // Kullanıcı Verisini Okuma
  async getUserData(userId) {
    try {
      const userDoc = await firestore.collection('users').doc(userId).get();
      if (userDoc.exists) {
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

  // Kullanıcı Günlük Karbon Ayak İzini Güncelleme
  async updateUserCarbonFootprint(userId, newDailyCarbon) {
    try {
      await firestore.collection('users').doc(userId).update({
        dailyCarbonFootprint: newDailyCarbon
      });
      console.log('Daily carbon footprint updated successfully!');
    } catch (error) {
      console.error("Error updating daily carbon footprint: ", error);
    }
  }
  
  async updateUserDolar(userId, updatedDolar) {
    try {
      await firestore.collection('users').doc(userId).update({
        dolar: updatedDolar
      });
      console.log('Daily carbon footprint updated successfully!');
    } catch (error) {
      console.error("Error updating daily carbon footprint: ", error);
    }
  }
  
  async updateUserStar(userId, updatedStar) {
    try {
      await firestore.collection('users').doc(userId).update({
        star: updatedStar
      });
      console.log('Daily carbon footprint updated successfully!');
    } catch (error) {
      console.error("Error updating daily carbon footprint: ", error);
    }
  }
  
  async updateChallengesCount(userId, updatedChallengesCount) {
    try {
      await firestore.collection('users').doc(userId).update({
        completedChallengesCount: updatedChallengesCount
      });
      console.log('Daily carbon footprint updated successfully!');
    } catch (error) {
      console.error("Error updating daily carbon footprint: ", error);
    }
  }

  // Öneri Ekleme
  async addRecommendation(userId, weekNum, weekData) {
    try {
      await firestore.collection('recommendations').doc(userId).set({
        [weekNum]: weekData
      }, { merge: true }
    );
      console.log('Recommendation added successfully!');
    } catch (error) {
      console.error("Error adding recommendation: ", error);
    }
  }

  // Zorluklar Ekleme
  async getChallenges(challengeData) {
    try {
      const challengeTitles = []; // Boş bir dizi oluşturuyoruz

      for (const challenge of challenges) {
      challengeTitles.push(challenge.title);
      return challengeTitles
      }
      console.log('Challenges added successfully!');
    } catch (error) {
      console.error("Error adding challenges: ", error);
    }
  }

  // Liderlik Tablosuna Kullanıcı Ekleme
  async addLeaderboardEntry(userId, starValue) {
    try {
      await firestore.collection('leaderboard').doc().set({
        [userId]: { starValue: starValue }
      }, { merge: true });
      console.log('Leaderboard entry added successfully!');
    } catch (error) {
      console.error("Error adding leaderboard entry: ", error);
    }
  }
  
  async addFirstUserChallengesEntry(userId, userChallenges) {
    try {
      await firestore.collection('Challenges').doc(userId).set(userChallenges);
      console.log('Leaderboard entry added successfully!');
    } catch (error) {
      console.error("Error adding leaderboard entry: ", error);
    }
  }

  // Kullanıcı Silme
  async deleteUser(userId) {
    try {
      await firestore.collection('users').doc(userId).delete();
      console.log('User deleted successfully!');
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  }
}

// Singleton Pattern ile Manager sınıfının tek bir örneğini oluşturuyoruz.
const managerInstance = new Manager();
export default managerInstance;
