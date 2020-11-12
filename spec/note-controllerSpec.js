(function insertHtml() {
  // let noteslist = new Noteslist();
  // noteslist.createStore("Favourite drink: seltzer");
  let element = document.getElementById("app");
  let insterNote = new NoteController();
  insterNote.insertHtml();
  assert.isTrue(
    element.innerHTML ===
      "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
  );
})(this);
