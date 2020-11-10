class Noteslist {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  createStore(str) {
    let note = new Note(str);
    this.list.push(note);
  }
}
