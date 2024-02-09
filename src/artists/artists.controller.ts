import { Controller, Post, Body, Res } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { artists } from './entities/artists.entity';
import { Response } from 'express';

@Controller('getFollowedArtists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) { }

  @Post()
  async GetFollowedArtists(@Res() res: Response, @Body() artists: artists) {
    console.log("artists: ");
    console.log(artists);
    var result = await this.artistsService.GetFollowedArtists(artists.access_token, artists.startDate, artists.endDate);
    return res.status(200).send(result);
  }
}
