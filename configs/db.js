const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    // بررسی وضعیت اتصال
    if (mongoose.connection.readyState !== 0) {
      return true; // متصل هستیم
    }
    await mongoose.connect(process.env.DATABASE_URL, {
      authSource: "admin",
    });
    console.log("Connect To DB Successfully :))");
  } catch (err) {
    console.log("DB Connection has error ->", err);
  }
};

module.exports = connectToDB; // در صورتی که از CommonJS استفاده می‌کنید
