(function noteListView() {
  let noteslist = new Noteslist();
  noteslist.createStore("test note");
  noteListViewvar = new NoteListView(noteslist);
  assert.isTrue(
    noteListViewvar.getListView() === "<ul><li><div>test note</div></li></ul>"
  );
})(this);
