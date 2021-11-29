import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaMusicList } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EstilosService {

  constructor(private http: HttpClient) { }

  
  getMusicList(){
    const headers = new HttpHeaders({
    'Authorization': 'Bearer '
  });
    return this.http.get<RespuestaMusicList>('https://api.spotify.com/v1/browse/featured-playlists?limit=5', { headers });
    
  }
}
