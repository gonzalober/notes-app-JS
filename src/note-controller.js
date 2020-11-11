class NoteController {
  constructor(noteList = new Noteslist) {
    this.noteList = notesList;
    this.noteList.createStore("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteslist);
  }

  insertHtml() {
    let element = document.getElementById("app");
    console.log(element);
    let str = this.noteListView.getListView();
    element.innerHTML = str;
  }
}

let newController = new NoteController
newController.insertHtml();


