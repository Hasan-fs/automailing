"use strict";

import readExcelFile from "./readExcelFile.cjs";
import sendMail from "./sendMail.cjs";


const file_path = "./maillist.xlsx";

const data = readExcelFile(file_path);

for (let i in data) {
    await sendMail({ email: data[i].email, name: data[i].name })
}