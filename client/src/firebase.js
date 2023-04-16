import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQSfCrkyoeWg4p1n7vMoZTHo7qvKp1AVc",
  authDomain: "fir-2-a769a.firebaseapp.com",
  projectId: "fir-2-a769a",
  storageBucket: "fir-2-a769a.appspot.com",
  messagingSenderId: "1041921620320",
  appId: "1:1041921620320:web:ef068a68f6ed6db5810605"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);


// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCrzbeK_7BubrL9P2OLYjWDmPvF_leT5Sk",
// //   authDomain: "fir-project-d4ccc.firebaseapp.com",
// //   projectId: "fir-project-d4ccc",
// //   storageBucket: "fir-project-d4ccc.appspot.com",
// //   messagingSenderId: "593351289179",
// //   appId: "1:593351289179:web:d1ff7f6b85cf9bf9a0127e"
// // };
// const firebaseConfig = {
//   apiKey: "AIzaSyBQSfCrkyoeWg4p1n7vMoZTHo7qvKp1AVc",
//   authDomain: "fir-2-a769a.firebaseapp.com",
//   projectId: "fir-2-a769a",
//   storageBucket: "fir-2-a769a.appspot.com",
//   messagingSenderId: "1041921620320",
//   appId: "1:1041921620320:web:ef068a68f6ed6db5810605"
// };

// const app = initializeApp(firebaseConfig);

// export const storage = getStorage(app);