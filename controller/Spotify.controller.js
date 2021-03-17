const spotifyApi = require('../service/Spotify.service');
// const SpotifyService = new spotifyApi();

class SpotifyController {
  async searchArtists(req, res) {

    const { artistName } = req.query;

    try {
      const { body: { artists: { items } } } = await spotifyApi.searchArtists(artistName)

      console.log('The received data from the API: ', items);

      res.render('artist-search-results', { artist: items })
    } catch (error) {
      console.log('The error while searching artists occurred: ', error);
    }
  }

  async getArtistAlbums(req, res) {
    const { artistId } = req.params;

    try {
      const { body: { items } } = await spotifyApi.getArtistAlbums(artistId)
      console.log('The received data from the API: ', items);

      res.render('albuns', { album: items });
    } catch (error) {
      console.log('The error while searching artists albuns occurred: ', error);
    }
  }

  async getAlbumTracks(req, res) {
    const { albumId } = req.params;
    try {
      const { body: { items } } = await spotifyApi.getAlbumTracks(albumId)
      console.log('The received data from the API: ', items);

      res.render('tracks', { track: items })

      // res.send(items);
    } catch (error) {
      console.log('The error while searching artists albuns occurred: ', error);
    }
  }
}

module.exports = SpotifyController;
