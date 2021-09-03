import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  private contextUrl = `https://${environment.MOCKAPI_KEY}.mockapi.io/`;

  constructor(private http: HttpClient) {}

  public getDocs(): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/docs`);
  }

  public getDoc(id: string): Observable<any> {
    return this.http.get<string[]>(`${this.contextUrl}/docs/${id}`);
  }

  public addDoc(name: string, viewerId: string, ownerId: string): Observable<any> {
    let doc = {
      name: name,
      positivesCards: {},
      negativesCards: {},
      otherCards: {},
      viewerId: viewerId,
      completed: false,
      ownerId: ownerId,
      docsId: Math.random(),
    };

    return this.http.post<any>(`${this.contextUrl}/docs`, doc);
  }

  public updateDoc(id: string, name: string, viewerId: string, ownerId: string): Observable<any> {
    let doc = {
      name: name,
      positivesCards: {},
      negativesCards: {},
      otherCards: {},
      viewerId: viewerId,
      completed: false,
      ownerId: ownerId,
    };

    return this.http.put<any>(`${this.contextUrl}/docs/${id}`, doc);
  }

  public deleteDoc(id: string): Observable<any> {
    return this.http.delete<any>(`${this.contextUrl}/docs/${id}`);
  }
}
