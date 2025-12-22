// generate-config.js
const fs = require("fs");

// ดึงค่าจาก Environment Variables มาใส่ใน Object
const configContent = `
window.FIREBASE_CONFIG = {
  apiKey: "${process.env.FIREBASE_API_KEY}",
  authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
  projectId: "${process.env.FIREBASE_PROJECT_ID}",
  storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
  messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
  appId: "${process.env.FIREBASE_APP_ID}"
};
`;

// เขียนไฟล์ชื่อ firebase-config.js ลงไปที่ root directory (ที่เดียวกับ index.html)
fs.writeFileSync("./firebase-config.js", configContent);
console.log("✅ firebase-config.js generated successfully!");
