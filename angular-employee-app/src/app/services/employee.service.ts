import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8080/api/employees";

  constructor(private http : HttpClient) { }

  public getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/all`);
  }

  public addEmployee(employee : Employee) : Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/add`, employee);
  }

  public updateEmployee(employee : Employee) : Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/update`, employee);
  }

  public getEmployee(employeeId : number) : Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/find/${employeeId}`);
  }

  public deleteEmployee(employeeId : number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${employeeId}`);
  }
}
