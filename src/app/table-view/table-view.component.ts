import { Component, OnInit } from '@angular/core';
import { DataField } from '../data-field';
import { TableData } from '../table-data';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  tableData: TableData;
  constructor() {
  }

  ngOnInit() {
    const receivedJSON = [
      {nombre: 'juan', edad: 10, ciudad: 'krakow'},
      {nombre: 'pepe', edad: 15, ciudad: 'warsaw'},
      {nombre: 'pepe', edad: 10, profesion: {name: 'ocupation', value: 'doctor'}}
    ];
    this.tableData = this.jsonParser(receivedJSON);
  }

  jsonParser(jsonObject: Object[]): TableData {
    const tableData: TableData = new TableData();
    jsonObject.forEach(jsonRow => {
      Object.keys(jsonRow).forEach(key => {
        const parsedField = new DataField(jsonRow[key]);
        if (parsedField.name) {
          key = parsedField.name;
        }
        tableData.headers.add(key);
        jsonRow[key] = parsedField;
      });
    });
    tableData.rowsData = jsonObject;
    return tableData;
  }

}
