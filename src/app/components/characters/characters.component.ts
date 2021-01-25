import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICharacter, StatusEnum } from '../../models/characters.model';
import { LoadingService } from '../../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { EpisodesWindowComponent } from '../episodes-window/episodes-window.component';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters: ICharacter[] = [];
  public statusEnum = StatusEnum;
  public listLenght: number = 0;
  public itemsPerPage: number = 20;
  public loading: boolean = false;

  constructor(private ApiService: ApiService,
    private LoadingService: LoadingService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  public getCharacters(page: number): void {
    this.loading = this.LoadingService.start();


    this.ApiService.getCharactersList(page).subscribe((characters: any) => {
      this.characters = characters.results;
      this.listLenght = characters.info.count;

      setTimeout(() => {
        this.loading = this.LoadingService.stop();
      }, 500);

    },
      error => alert('Something went wrong!'));
  }

  public showEpisodes(episodes: string[]) {
    this.dialog.open(EpisodesWindowComponent, {
      width: '500px',
      data: episodes
    });
  }

}
