const xlsx = require('xlsx');

// Function to read Excel file and return data as an array of objects
const readExcelFile = (filePath) => {
    // Read the workbook
    const workbook = xlsx.readFile(filePath);

    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet to JSON
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    const data = rows.map(row => ({
        name: row[0],
        email: row[1]
    }));

    return data;

};

module.exports = readExcelFile;
// Specify the relative path to your Excel file
//const filePath = './maillist.xlsx';

// Call the function and log the output
//const data = readExcelFile(filePath);
//console.log(data);
