class Noteslist {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  createStore(str) {
    let noteID = this.getList().length;
    let note = new Note(str, noteID);
    this.list.push(note);
  }
}
