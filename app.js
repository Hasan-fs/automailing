"use strict";

import readExcelFile from "./readExcelFile.cjs";


const file_path = "./maillist.xlsx";

const data = readExcelFile(file_path);

for (let i in data) {
    console.log(data[i])
}