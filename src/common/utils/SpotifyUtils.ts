import axios from 'axios';
import cheerio from 'cheerio';
import api from '../spotifyApi';

export const getArtist = async (name: string) => {
  const items = await api().search(name, ['artist']);
  return items.artists.items[0];
};

export const getConcertData = async (id: string, startDate: Date, endDate: Date) => {
  try {
    const { data } = await axios.get(
      `https://open.spotify.com/artist/${id}/concerts`,
    );
    const $ = cheerio.load(data);
    const loaded = $('[type="application/ld+json"]');
    const obj = JSON.parse(loaded.text());

    const results = [];

    for (let i = 1; i < obj['@graph'].length - 1; i++) {
      const concert_details = obj['@graph'][i];
      results.push({
        title: concert_details.name,
        date: concert_details.startDate,
        artist: obj['@graph'][0].name,
        location: {
          name: concert_details.location.name,
          latitude: concert_details.location.latitude,
          longitude: concert_details.location.longitude,
        },
      });
    }
    console.log("before filter");
    console.log(results);
    const filteredResults = results.filter((concert) => {
      const concertDate = new Date(concert.date);
      const comp_startDate = new Date(startDate);
      const comp_endDate = new Date(endDate);
      var decision = concertDate >= comp_startDate && concertDate <= comp_endDate;
      return decision;
    });
    console.log("after filter");
    console.log(filteredResults);
    return filteredResults;
  } catch (error) {
    throw error;
  }
};
