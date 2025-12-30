import * as XLSX from 'xlsx';

export class ExcelUtils {
  static readExcel(filePath: string, sheetName: string): any[] {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
  }

  static writeExcel(filePath: string, sheetName: string, data: any[]): void {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, filePath);
  }
}
