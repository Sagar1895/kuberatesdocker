// import { Injectable } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import * as JSZip from 'jszip/dist/jszip';
// import { ObjectUtil } from '../utility/object-util';

// @Injectable({
//     providedIn: 'root'
// })

// export class FileUploadService {

//     constructor() { }

//     populateDataFromZipFile = (event: any, form: FormGroup) => {
//         if (event.target.files.length !== 1) {
//             console.log('No file selected');
//         } else if (event.target.files[0].type !== 'application/x-zip-compressed') {
//             console.error('Invalid file format...Only zip files are allowed!!!');
//         } else {
//             const fileList = event.target.files[0];
//             JSZip.loadAsync(fileList).then(zip => {
//                 let zipFiles = Object.keys(zip.files);
//                 const hasJson = zipFiles.some(value => value.includes('.json'));
//                 if (hasJson) {
//                     zipFiles.forEach(filename => {
//                         if (filename.includes('.json')) {
//                             zip.files[filename].async('string').then(fileData => {
//                                 const result = ObjectUtil.convertKeyToLowerCase(JSON.parse(fileData));
//                                 form.patchValue(result);
//                             });
//                         }
//                     });
//                 } else {
//                     console.error('There is no JSON file present in the package!!!');
//                 }
//             });
//         }
//     }

//     populateDataFromTextFile = (event: any) => {
//         return new Promise((resolve, reject) => {
//             if (event.target.files.length !== 1) {
//                 console.log('No file selected');
//             } else {
//                 const file = event.target.files[0];
//                 const fileReader = new FileReader();
//                 if (file.type === 'text/plain') {
//                     fileReader.onload = (e: any) => {
//                         let result = fileReader.result;
//                         resolve(result);
//                     }
//                     fileReader.readAsText(event.target.files[0]);
//                 } else {
//                     console.error('Invalid file format!!!');
//                 }
//             }
//         });
//     }
// }

/* Code to read individual files (Not zipped) */
/* code for excel file */
// "xlsx": "^0.18.1"
// import * as XLSX from 'xlsx';
// if (this.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
//     this.fileReader.readAsArrayBuffer(this.file);
//     this.fileReader.onload = (e: any) => {
//         this.arrayBuffer = this.fileReader.result;
//         let data = new Uint8Array(this.arrayBuffer);
//         let arr = new Array();
//         for (let i = 0; i != data.length; ++i) {
//             arr[i] = String.fromCharCode(data[i]);
//         }
//         let bstr = arr.join("");
//         let workbook = XLSX.read(bstr, { type: "binary" });
//         let first_sheet_name = workbook.SheetNames[0];
//         let worksheet = workbook.Sheets[first_sheet_name];
//         this.result = XLSX.utils.sheet_to_json(worksheet, { raw: true });
//         this.result = ArrayUtil.convertKeyToLowerCase(this.result);
//         form.patchValue(this.result);
//     }
// }
/* code for xml file */
// "xml2js": "^0.4.23"
// "timers": "^0.1.1"
// import * as xml2js from 'xml2js';
//  if (this.file.type === 'text/xml') {
//     this.fileReader.onload = (e: any) => {
//         let parseString = xml2js.parseString;
//         let xml = this.fileReader.result;
//         parseString(xml, function (err, result) {
//             result = ObjectUtil.convertKeyToLowerCase(result);
//             result[parentNode] = ObjectUtil.convertKeyToLowerCase(result[parentNode]);
//             form.patchValue(result[parentNode]);
//         });
//     }
//     this.fileReader.readAsText(event.target.files[0]);
// }
/* code for json file */
// this.file = event.target.files[0];
// this.fileReader = new FileReader();
// if (this.file.type === 'application/json') {
//     this.fileReader.onload = (e: any) => {
//         this.result = JSON.parse(this.fileReader.result);
//         this.result = ArrayUtil.convertKeyToLowerCase(this.result);
//         form.patchValue(this.result);
//     }
//     this.fileReader.readAsText(event.target.files[0]);
// }
