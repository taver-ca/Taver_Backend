import { Controller, Body, Post, Res } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { concert } from './entities/concert.entity';
import { Response } from 'express';

@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) { }

  @Post()
  async FindConcertForArtist(@Res() res: Response, @Body() concert: concert) {
    console.log(concert.artistName);
    var result = await this.concertsService.FindConcertForArtist(concert.artistName, concert.startDate, concert.endDate);
    return res.status(200).send(result);
  }
}
