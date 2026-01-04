import * as ExcelJS from 'exceljs';

export class ExcelUtils {
  static async readData(filePath: string, sheetName: string): Promise<any[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(sheetName);

    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" not found in file: ${filePath}`);
    }

    const rows: any[] = [];
    sheet.eachRow((row) => {
      rows.push(row.values);
    });
    return rows;
  }

  static async writeData(filePath: string, sheetName: string, data: any[][]): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(sheetName);

    data.forEach((row) => sheet.addRow(row));
    await workbook.xlsx.writeFile(filePath);
  }
}
