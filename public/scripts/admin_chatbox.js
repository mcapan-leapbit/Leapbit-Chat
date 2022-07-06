const textForm = document.querySelector(".chat-entry-text");

const sendImg = document.querySelector(".chat-send-icon");

if (textForm.value) sendImg.classList.add("is-full");

textForm.addEventListener("input", () => {
  if (textForm.value) {
    sendImg.classList.add("is-full");
  } else {
    sendImg.classList.remove("is-full");
  }
});
