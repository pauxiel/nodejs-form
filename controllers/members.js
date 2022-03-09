const Member = require("../models/member");



exports.getAddMember = (req, res, next) => {
    res.render("add-member", {
      pageTitle: "Add Member",
      path: "/add-member",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  };


  exports.postAddMember = (req, res, next) => {
    // const member = new Member(req.body.title);
     const title = req.body.title;
     const email = req.body.email;
     const mess = req.body.mess;
     const member = new Member(title, email, mess);
    member.save();
  
    res.redirect("/");
  };


  // exports.getHomePage = (req, res, next) => {
  //   res.render("home", {
  //     pageTitle: "Add Member",
  //     path: "/add-member",
  //     formsCSS: true,
  //     productCSS: true,
  //     activeAddProduct: true,
  //   });
  // };