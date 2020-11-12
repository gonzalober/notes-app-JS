(function noteControllerinsertHtml() {
  let newNote = new NoteController();
  let element = document.getElementById("app");
  assert.isTrue(
    element.innerHTML ===
      '<ul><li><a id="0" href="#notes/0">Favourite drink: sel...</a></li></ul>'
  );
})(this);
