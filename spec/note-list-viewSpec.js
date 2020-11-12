(function noteListView() {
  let noteslist = new Noteslist();
  noteslist.createStore("test note");
  noteslist.createStore("test note with more than 20 characters");
  let noteListViewvar = new NoteListView(noteslist);
  assert.isTrue(
    noteListViewvar.getListView() ===
      "<ul><li><a id='0' href='#notes/0'>test note...</a></li><li><a id='1' href='#notes/1'>test note with more ...</a></li></ul>"
  );
})(this);
