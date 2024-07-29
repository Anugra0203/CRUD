document.addEventListener("DOMContentLoaded", function () {
  const createForm = document.getElementById("createForm");
  const updateForm = document.getElementById("updateForm");
  const deleteForm = document.getElementById("deleteForm");
  const itemList = document.getElementById("itemList");

  function addItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    itemList.appendChild(li);
  }

  function readItems() {
    itemList.innerHTML = "";
    const items = ["Item 1", "Item 2", "Item 3"];
    items.forEach(function (item) {
      addItem(item);
    });
  }
  readItems();

  createForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newItemText = document.getElementById("createInput").value.trim();
    if (newItemText !== "") {
      addItem(newItemText);
      createForm.reset();
    }
  });

  updateForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const updatedItemText = document.getElementById("updateInput").value.trim();
    if (updatedItemText !== "") {
      const firstItem = itemList.querySelector("li");
      if (firstItem) {
        firstItem.textContent = updatedItemText;
      }
      updateForm.reset();
    }
  });

  deleteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const deleteItemText = document.getElementById("deleteInput").value.trim();
    if (deleteItemText !== "") {
      const items = itemList.getElementsByTagName("li");
      for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === deleteItemText) {
          itemList.removeChild(items[i]);
          break;
        }
      }
      deleteForm.reset();
    }
  });
});
