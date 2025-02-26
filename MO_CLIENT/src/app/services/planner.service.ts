import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planner } from '../dtos/planner.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  apiUrl = "http://localhost:8080/api/planner";

  constructor(private http: HttpClient) { }

  public createPlanner(planner: Planner): Observable<HttpResponse<Planner>> {
    return this.http.post<Planner>(`${this.apiUrl}/create-planner`, planner, { observe: 'response' });
  }

  public getPlanner(): Observable<HttpResponse<Planner[]>> {
    return this.http.get<Planner[]>(`${this.apiUrl}/all`, { observe: 'response' });
  }
}
