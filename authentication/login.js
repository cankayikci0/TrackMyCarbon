// Import the registerUser function
import { registerUser } from './auth.js';

// Example of how to call the function
const email = "test38@example.com";  // Test email
const password = "testPassword123";  // Test password

registerUser(email, password)
  .then(user => {
    console.log("Registration successful:", user.uid);
    process.exit(0);
    // You can redirect or do other actions after successful registration
  })
  .catch(error => {
    console.error("Registration failed:", error);
    // Handle error appropriately, e.g., show a message to the user
  });
