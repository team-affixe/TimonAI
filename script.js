const inputField = document.getElementById("UserInput");
const sendButton = document.getElementById("SendButton");

function sendMessage() {
  alert("noch nicht implementiert");
}

if (inputField && sendButton) {
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendButton.click();
    }
  });
}
