// Copyright & License details are available under JXCORE_LICENSE file


var Excel = require("exceljs");

var workbook = new Excel.Workbook();
workbook.creator = "Me";
workbook.lastModifiedBy = "Her";
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();

workbook.addWorksheet("My Sheet");

workbook.xlsx.writeFile("test.xlsx");
