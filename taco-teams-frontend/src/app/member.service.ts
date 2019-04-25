import { Injectable } from '@angular/core';
import { TeamMember } from './datamodels';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMember(id: string): Observable<TeamMember> {
    return this.http.get<TeamMember>(environment.apiEndpoint + '/member/' + id);
  }

  updateName(id: string, newName: string) {
    return this.http.put(environment.apiEndpoint + '/member/' + id, { name: newName }).subscribe();
  }
}
