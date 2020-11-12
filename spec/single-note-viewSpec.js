(function singlenoteViewreturnHtml() {
  class TestNote {
    constructor(string) {
      this.content = string;
    }
    getContent() {
      return this.content;
    }
  }
  let testNote = new TestNote("Hello world!");
  let singleNoteView = new SingleNoteView(testNote);
  assert.isTrue(singleNoteView.returnHtmlNote() === "<div>Hello world!</div>");
})(this);
