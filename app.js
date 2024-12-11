console.log("hello back to school");

const viz = document.getElementById("tableauViz");
let workbook;
let vizactivesheet;
let dashboard;
let listsheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is ${workbook.name}`);

  // get the array of dashboards in the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  // get the active sheet for this workbook
  vizactivesheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizactivesheet.name}`);

  listsheets = vizactivesheet.worksheets;
  listsheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet is index ${index} is ${element.name}`);
  });
}

// run the function when viz becomes interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);
