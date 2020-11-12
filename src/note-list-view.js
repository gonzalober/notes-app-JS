class NoteListView {
  constructor(noteslist) {
    this.noteslist = noteslist.list;
  }
  getListView() {
    let listViewHtml = "";
    for (let i = 0; i < this.noteslist.length; i++) {
      listViewHtml += `<li><a id='${this.noteslist[i].id}' href='#notes/${
        this.noteslist[i].id
      }'>${this.noteslist[i].content.slice(0, 20)}...</a></li>`;
    }
    listViewHtml = "<ul>" + listViewHtml + "</ul>";
    return listViewHtml;
  }
}
