import { Component } from '@angular/core';
import {IStudent} from './student';
import StudentJson from './studentdb.json';


 
@Component({
  selector: 'app-student-mgmt',
  templateUrl: './student-mgmt.component.html',
  styleUrls: ['./student-mgmt.component.css']
})
export class StudentMgmtComponent {

filterTxt: string = "Z";
students: IStudent[] = StudentJson;

constructor(){
 
}


}
