import { Game } from '../../../shared/models/igdb/game';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAPI } from 'src/app/shared/models/response-api';

@Injectable({
  providedIn: 'root'
})
export class IgdbService {

  constructor(private http: HttpClient) { }

  getAllGames(page: number = 0, limit: number = 10): Observable<ResponseAPI<Game[]>> {
    return this.http.get<ResponseAPI<Game[]>>(`http://localhost:3000/igdb/all-games?page=${page}&limit=${limit}`);
  }

}
