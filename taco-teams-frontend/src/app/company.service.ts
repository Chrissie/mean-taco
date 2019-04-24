import { Injectable } from '@angular/core';
import { CompanyModel, Team, TeamMember } from './datamodels';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanys(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(environment.apiEndpoint + '/companies');
  }

  getCompany(id: string): Observable<CompanyModel> {
    return this.http.get<CompanyModel>(environment.apiEndpoint + '/company/' + id);
  }
}
