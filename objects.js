var playlist = {Nsync:"Bye-Bye-Bye", Backstreet:"Everybody", Brittney:"Lucky"};

function updatePlaylist(playlist, Christina, Dirty) {
  return object.assign({}, playlist, {[Christina]: Dirty})
}
