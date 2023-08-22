import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Contact } from '../models/Contact';
import { UpdateContact} from '../models/UpdateContact';

@Injectable({
    providedIn: 'root'
})

export class ContactService {
    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    public getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.baseUrl+"contact");
    }

    public deleteContact(id: number): Observable<Contact[]> {
        const token = localStorage.getItem('jwt');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        const url = `${this.baseUrl}contact/${id}`;
        return this.http.delete<Contact[]>(url, { headers: headers });
      }

    public addContact(user: Contact): Observable<Contact[]> {
        const token = localStorage.getItem('jwt');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        return this.http.post<Contact[]>(`${this.baseUrl+"contact"}`, user,{ headers: headers });
    }

    public updateContact(updateUser:UpdateContact,id:number):Observable<UpdateContact[]>{
        const token = localStorage.getItem('jwt');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        const url = `${this.baseUrl+"contact"}/${id}`;
        return this.http.put<UpdateContact[]>(url,updateUser,{ headers: headers });
    }
}