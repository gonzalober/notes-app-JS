(function noteControllerinsertHtml() {
  element = document.getElementById("app");
  let noteController = new NoteController();
  noteController.insertHtml();
  assert.isTrue(
    element.innerHTML ==
      '<ul><li><a id="0" href="#notes/0">Favourite drink: sel...</a></li></ul>'
  );
})(this);

(function makeUrlChangeShowForCurrentPage() {
  let linkElement0 = document.getElementById("0");
  // let linkElement1 = document.getElementById("1");
  // console.log(linkElement0);
  linkElement0.click();
  // console.log(linkElement1);
  // linkElement1.click();
  let element2 = document.getElementById("0");
  // console.log(linkElement0.innerHTML);
  assert.isTrue(element2.innerHTML == "Favourite drink: sel...");
})(this);
