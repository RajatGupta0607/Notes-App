// Get Homepage

exports.homePage = (req, res) => {
  res.render("index");
};

exports.aboutPage = (req, res) => {
  res.render("about");
};

exports.signupPage = (req, res) => {
  res.render("signup");
};

exports.loginPage = (req, res) => {
  res.render("login");
};
