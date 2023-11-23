module.exports = {
  getHomePage: (req, res) => {
    // res.render should get the name of the template and object with data
    res.render(`index-small.ejs`, {});
  },

  getHomePage: (req, res) => {
    res.send(`<h1> Football manager is under development`);
  },
};
