class NoteListView {
  constructor(noteslist) {
    this.noteslist = noteslist;
  }
  getListView() {
    let listViewHtml = "<ul>";
    for (var i = 0; i < this.noteslist.getList().length; i++) {
      listViewHtml +=
        "<li><div>" + this.noteslist.getList()[i].getContent() + "</div></li>";
    }
    listViewHtml += "</ul>";
    return listViewHtml;
  }
}
