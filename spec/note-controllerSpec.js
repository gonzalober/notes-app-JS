(function insertHtml() {
  let element = document.getElementById("app");
  assert.isTrue(
    element.innerHTML ===
      "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
  );
})(this);
