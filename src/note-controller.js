class NoteController {
  constructor(noteList = new Noteslist()) {
    this.noteList = noteList;
    this.noteList.createStore("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHtml() {
    let element = document.getElementById("app");
    console.log(element);
    let str = this.noteListView.getListView();
    element.innerHTML = str;
  }
}

let insterNote = new NoteController();
insterNote.insertHtml();
