function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw)
  }

  //Start coding here

  function draw(results) {

    var template = ''
    var songCards = document.getElementById('songs')
    for (var i = 0; i < results.length; i++) {
      var currentSong = results[i];
      template += `
    <div class="row">
                <div class="itunes-card col s8 offset-s2">
                    <div class="card horizontal transparent">
                        <div class="card-image">
                            <img style="width:15vw" src="${currentSong.albumArt}">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <p>${currentSong.title}</p>
                                <p>${currentSong.artist}</p>
                                <p>${currentSong.collection}</p>
                                <p>${currentSong.price}</p>
                            </div>
                            <div class="card-action">
                                <audio controls> <source src="${currentSong.preview}"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    }
    songCards.innerHTML = template
  }
}
