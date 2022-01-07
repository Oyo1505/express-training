require("./../../config/mongodb");

const User = require("./../../models/users.model");

const users = [
  {
    name: "Superman",
    email: "superman@batman.com",
    favoriteLanguage: "kriptonien",
  },
  {
    name: "WonderWoman",
    email: "wonder@woman.com",
    favoriteLanguage: "Atlantien",
  },
];

(async function () {
  try {
    await User.deleteMany();
    const creatUsers = await User.create(users);
    console.log(`super hero creation !`);
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit();
  }
})();
