import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import './ProfilePage.css'; // Import the new CSS file

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User document does not exist");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="profile-container">
      {userDetails ? (
        <div className="profile-info">
          <div className="profile-header">
            <img
              src={userDetails.photo || 'default-profile.png'} // Fallback image if userDetails.photo is empty
              alt="Profile"
            />
          </div>
          <h3>Welcome {userDetails.UserName} 🙏🙏</h3>
          <p>Email: {userDetails.email}</p>
          
          {/* <p>Last Name: {userDetails.lastName}</p> */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
