
const Todo = require("../models/Todo");
const xlsx = require("xlsx");


exports.uploadData = async (req, res) => {
    try {

      console.log("req",req.files.file.tempFilePath)
        // 1. Get user excel file from the request body
        const excelFile = req.files.file.tempFilePath;
        

        // 2. Using xlsx, parse the excel file and convert it into JSON format
        const workbook = xlsx.readFile(excelFile);
        const sheetName = workbook.SheetNames[0];
        const userData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        // 3. Save all user data into MongoDB
        await Todo.insertMany(userData);

        // Optionally, you can remove the uploaded file after processing
        // fs.unlinkSync(excelFile);

        res.status(200).json({
            success: true,
            message: 'Data uploaded successfully',
            data: userData,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error',
        });
    }
};





