(function notesListHasArray() {
  var noteslist = new Noteslist();
  assert.isTrue(Array.isArray(noteslist.getList()));
  noteslist.createStore("note");
  assert.isTrue(noteslist.getList().length === 1);
  assert.isTrue(noteslist.getList()[0].getContent() === "note");
})();
