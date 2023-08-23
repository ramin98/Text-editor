let saveDoc;
document.addEventListener("DOMContentLoaded", function () {
  let editor = document.querySelector("#editor");

  let savedContent = localStorage.getItem("doc");
  if (savedContent) {
    editor.innerHTML = savedContent;
  }

  saveDoc = () => {
    let docContent = editor.innerHTML;
    localStorage.setItem("doc", docContent);
  };
});

function executeCommand(command) {
  document.execCommand(command, false, null);
  saveDoc();
}

function changeColor() {
  const color = prompt("Enter color (e.g., red or #ff0000):");
  if (color) {
    document.execCommand("foreColor", false, color);
    saveDoc();
  }
}

function changeFont() {
  const font = prompt("Enter font name (e.g., Arial):");
  if (font) {
    document.execCommand("fontName", false, font);
    saveDoc();
  }
}

function changeFontSize() {
  const size = prompt("Enter font size (e.g., 14):");
  if (size) {
    document.execCommand("fontSize", false, size);
    saveDoc();
  }
}

function insertLink() {
  const url = prompt("Enter link URL:");
  if (url) {
    document.execCommand("createLink", false, url);
    saveDoc();
  }
}
