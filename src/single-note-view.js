class SingleNoteView {
  constructor(note) {
    this.note = note;
  }
  returnHtmlNote() {
    return "<div>" + this.note.getContent() + "</div>";
  }
}
