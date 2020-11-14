class NoteController {
  constructor(noteList = new Noteslist()) {
    this.noteList = noteList;
    this.noteList.createStore("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHtml() {
    let element = document.getElementById("app");
    let str = this.noteListView.getListView();
    element.innerHTML = str;
  }
}

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteforCurrentPage);
}

function showNoteforCurrentPage() {
  showFullNote(getNoteUrl(window.location));
}

function getNoteUrl(location) {
  // let url1 = location.hash.split("#")[1];
  return location.hash.split("/")[1];
}

function showFullNote(noteID) {
  // let noteArr = noteController.noteList.getList();
  let noteContent = noteController.noteList.getList()[noteID].getContent();
  document.getElementById("app").innerHTML = `<div>${noteContent}</div>`;

  // for (let i = 0; i < noteArr.length; i++) {
  //   if (noteID == noteArr[i].id) {
  //     let singleNoteView = new SingleNoteView(noteArr[i]);
  //     let noteHTML = singleNoteView.returnHtmlNote();
  //     document.getElementById("app").innerHTML = noteHTML;
  //   }
  // }
}

let noteController = new NoteController();
noteController.noteList.createStore("blah blah");
noteController.noteList.createStore("hi Mai, how are you today?");
noteController.insertHtml();
makeUrlChangeShowNoteForCurrentPage();
