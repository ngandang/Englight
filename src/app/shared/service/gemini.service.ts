import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GeminiService {
    private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
    // private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-002:generateContent'; // Updated to a supported model
    private apiKey = 'AIzaSyB7k_NVdG2USyzfkr-mjZ4zhz7sI_1FxWQ';

    constructor(private http: HttpClient) { }

    generateContent(prompt: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const body = {
            contents: [
                { parts: [{ text: prompt }] }
            ]
        };
        return this.http.post(
            `${this.apiUrl}?key=${this.apiKey}`,
            body,
            { headers }
        );
    }
}