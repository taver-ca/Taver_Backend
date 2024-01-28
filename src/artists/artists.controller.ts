import { Controller, Post, Body, Res } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { authorization } from './entities/authorization.entity';
import { Response } from 'express';

@Controller('getFollowedArtists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) { }

  @Post()
  async GetFollowedArtists(@Res() res: Response, @Body() authorization: authorization) {
    console.log("authorization: ");
    console.log(authorization);
    var result = await this.artistsService.GetFollowedArtists(authorization.code, authorization.code_verifier);
    return res.status(200).send(result);
  }
}
