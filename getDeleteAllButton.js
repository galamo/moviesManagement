function getDeleteAllButton() {
  const button = document.createElement("button");
  button.innerText = "Delete All Selected";
  button.classList.add("btn", "btn-danger");
  button.addEventListener("click", function () {
    removeAllSelected();
  });
  return button;
}
