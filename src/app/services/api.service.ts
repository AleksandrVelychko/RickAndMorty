import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisode } from '../models/episodes.model';

const API = {
  server: 'https://rickandmortyapi.com/api/'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getCharactersList(page: number) {
    return this.http.get(`${API.server}/character/?page=${page}`);
  }

  public getEpisodesFromURL(episodes: string[]): IEpisode[] {
    let list: IEpisode[] = [];

    episodes.forEach((episode: string) => {
      this.http.get(episode).subscribe((data: any) => {
        list.push({
          episode: data.episode,
          id: data.id,
          name: data.name,
          url: data.url
        });
      })
    });

    return list;
  };
}
