import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEpisode } from '../../models/episodes.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes-window',
  templateUrl: './episodes-window.component.html',
  styleUrls: ['./episodes-window.component.scss']
})
export class EpisodesWindowComponent implements OnInit {
  public list: IEpisode[] = [];

  constructor(
    public apiService: ApiService,
    public dialogRef: MatDialogRef<EpisodesWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.list = this.apiService.getEpisodesFromURL(this.data);
  }

}
