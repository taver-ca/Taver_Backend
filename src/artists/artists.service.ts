import { Injectable } from '@nestjs/common';
import { AccessToken } from '@spotify/web-api-ts-sdk';
import { userApi } from 'src/common/spotifyApi';
import { getConcertData } from 'src/common/utils/SpotifyUtils';

@Injectable()
export class ArtistsService {
  async GetFollowedArtists(access_token: AccessToken, startDate: Date, endDate: Date) {
    const api = await userApi(access_token);

    const artistList = await api.currentUser.topItems('artists');

    console.log('followed artists:');
    console.log(artistList);

    let response = await Promise.all(
      artistList.items.map(async function (artist) {
        const artistConcertData = await getConcertData(artist.id, startDate, endDate);

        if (artistConcertData.length > 0) {
          return artist.name;
        }
      }),
    );
    response = response.filter(Boolean);
    const jsonContent = JSON.stringify(response);
    console.log('followed artist names:');
    console.log(jsonContent);

    return jsonContent;
  }
}
