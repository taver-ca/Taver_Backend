import { Injectable } from '@nestjs/common';
import { getArtist, getConcertDataWithDates } from 'src/common/utils/SpotifyUtils';

@Injectable()
export class ConcertsService {
  async FindConcertForArtist(artistName: string, startDate: Date, endDate: Date) {
    const artist = await getArtist(artistName);

    let concert_response = await getConcertDataWithDates(artist.id, startDate, endDate);
    concert_response = concert_response.map((res) => ({
      ...res,
      image: artist.images[2],
    }));
    return concert_response;
  }
}
