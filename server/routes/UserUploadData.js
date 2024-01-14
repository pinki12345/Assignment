// Import the required modules
const express = require("express")
const router = express.Router()
const {uploadData} =  require("../controllers/UserdataUpload");


router.post("/uploadData", uploadData)
// Export the router for use in the main application
module.exports = router