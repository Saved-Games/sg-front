import { Component, OnInit } from '@angular/core';

import { Game } from './../../../models/igdb/game';
import { IgdbService } from 'src/app/core/services/igdb/igdb.service';
import { PageEvent } from '@angular/material/paginator';
import { ResponseAPI } from '../../../models/response-api';

@Component({
  selector: 'sg-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  // Games List
  games: any[] = [];

  // MatPaginator Inputs
  length = 5000;
  pageSize = 30;
  pageSizeOptions: number[] = [15, 30, 50, 100];
  pageIndex = 0;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private igdbService: IgdbService) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames(): void {
    this.igdbService.getAllGames(this.pageIndex, this.pageSize).subscribe((response: ResponseAPI<Game[]>) => {
      this.games = response.body;
      console.log(this.games);
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  pageChange(event: PageEvent) {
    this.pageEvent = event;
    this.pageIndex = this.pageEvent.pageIndex;
    this.pageSize = this.pageEvent.pageSize;
    this.getAllGames();
  }
}
