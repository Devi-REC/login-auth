import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import bananaTree from '../assets/banana tree.png'; 
import bananaTree1 from '../assets/banana tree1.png'; // replace with your PNG image path
import toranImage from '../assets/flower.png'; // replace with your toran image path
import './LoginPage.css';
const DancingBananaTree = () => {
  const animation = {
    y: [0, -10, 0],
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 3,
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
      },
    },
  };

  return (
    <motion.div animate={animation} style={{ display: 'inline-block', margin: '20px 10px' }}>
      <img src={bananaTree} alt="Dancing Banana Tree" style={{ width: '500px', height: 'auto' }} />
    </motion.div>
  );
};
const DancingBanana= () => {
  const animation = {
    y: [0, -10, 0],
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 3,
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
      },
    },
  };

  return (
    <motion.div animate={animation} style={{ display: 'inline-block', margin: '0 10px' }}>
      <img src={bananaTree1} alt="Dancing Banana Tree" style={{ width: '500px', height: 'auto' }} />
    </motion.div>
  );
};

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [uname, setUname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          UserName: uname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  const tronAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0, 0.8, 0],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 5,
      },
      opacity: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 4,
      },
    },
  };
  return (
    <div className="login-container">
    
       
    <motion.div
        className="toran-image"
        style={{
          position: 'absolute',
          top: 0,
          left:'23%',
          
          transform: 'translateX(-50%)',
        
        }}
        animate={tronAnimation} 
      >
        <img src={toranImage} alt="Toran" style={{ width: '98%', height: 'auto' }} />
      </motion.div>
      <DancingBananaTree />
      <motion.div
        className="login-box"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
     

      <div className="mb-3 ">
      
        <label>Name</label>
        <input
          type="text"
          className="form-control ip"
          placeholder="Enter your name"
          onChange={(e) => setUname(e.target.value)}
        />
       
      </div>

      <div className="mb-3 ">
        <label>Email address</label>
        <input
          type="email"
          className="form-control ip"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3 ">
        <label>Password</label>
        <input
          type="password"
          className="form-control ip"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>
    </form>
    </motion.div>
      <DancingBanana />
    </div>
  );
}
export default Register;