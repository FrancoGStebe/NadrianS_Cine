const app = require("./src/server");
const dbcon = require("./src/config/dbCon");

dbcon().then(
  res=>{
    app.listen(3000, () => {
      console.log("App listening on port 3000!")
    })
  }
)