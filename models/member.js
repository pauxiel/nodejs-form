const fs = require("fs");
const path = require("path");
const exportUsersToExcel = require('../service/exportService');

module.exports = class Member {
  constructor(title, email, mess) {
    this.title = title;
    this.email = email;
    this.mess = mess;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "members.json"
    );

    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "outputFiles",
      "excel-from-js.xlsx"
    );
    const workSheetColumnName = [
      "Title",
      "Email",
      "Message"
     
  ]
    const workSheetName = 'Members';
    

    fs.readFile(p, (err, fileContent) => {
      let members = [];
      if (!err) {
        members = JSON.parse(fileContent);
      }
      members.push(this);

      

      fs.writeFile(p, JSON.stringify(members), (err) => {
        console.log(err);
        exportUsersToExcel(members, workSheetColumnName, workSheetName, filePath);
      });
    });
  }

  // static fetchAll(cb) {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     "data",
  //     "members.json"
  //   );

  //   fs.readFile(p, (err, fileContent) => {
  //     if (err) {
  //       cb([]);
  //     }

  //     return cb(JSON.parse(fileContent));
  //   });
  // }
};