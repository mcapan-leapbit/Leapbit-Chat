
function close_user_chatbox() {
    document.getElementById("messages_box").style.display = "none";
    document.getElementById("signup_box").style.display = "none";
    document.getElementById("closer").style.display = "none";

    document.getElementById("line").style.display = "block";
    document.getElementById("open_button").style.display = "block";
}

function open_user_signup() {
    document.getElementById("messages_box").style.display = "none";
    document.getElementById("line").style.display = "none";
    document.getElementById("open_button").style.display = "none";

    document.getElementById("signup_box").style.display = "flex";
    document.getElementById("closer").style.display = "block";
}

function open_messages_box() {
    document.getElementById("signup_box").style.display = "none";
    document.getElementById("line").style.display = "none";
    document.getElementById("open_button").style.display = "none";

    document.getElementById("messages_box").style.display = "flex";
    document.getElementById("closer").style.display = "block";
}