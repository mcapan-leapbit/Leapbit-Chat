<template>
  <div class="home">
    <div class="main_title">
      <span class="gradient_text huge">COMING SOON</span>
      <p class="description negative">
        Soon we will be online with you.<br />
        In the meantime, you can contact our sales department through the chat
        in the bottom right corner.
      </p>
    </div>

    <div class="floating_chatbox">
      <div id="closer" class="bitmap closer" onclick="close_user_chatbox()">
        <img
          src="../../public/assets/images/icon-close.svg"
          alt="x"
          class="chat-body-logo"
        />
      </div>

      <div class="header">
        <div>
          How can we help you?<br />
          <span class="subtitle">Send us a message.</span>
        </div>
        <div class="avatar">
          <div class="bitmap">
            <img
              src="../../public/assets/images/avatar.png"
              alt="Leapbit"
              class="chat-body-logo"
            />
          </div>
          <div class="status"></div>
        </div>
      </div>

      <form
        id="signup_box"
        class="signup_box"
        onsubmit="open_messages_box(); return false;"
      >
        <br />
        <input
          class="input_box"
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
        <input
          class="input_box"
          type="text"
          placeholder="Your e-mail"
          name="email"
          required
        />
        <input class="start_button" type="submit" value="START CHAT" />
        <br />
      </form>
      <div id="messages_box" class="messages_box">
        <br />
        <div class="chat-body">
          <div class="chat-body-client">
            <div class="user-circle">
              <span class="initials"> AW </span>
            </div>
            <div class="chat-body-msg">
              <div class="chat-body-rectangle">
                Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus
                tincidunt ac nunc et posuere.
              </div>
              <span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div>
          <div class="chat-body-user">
            <div class="bitmap">
              <img
                src="../../public/assets/images/avatar.png"
                alt="company logo"
                class="chat-body-logo"
              />
            </div>
            <div class="chat-body-msg">
              <div class="chat-body-rectangle-user">
                Ut vel odio sed dui tempor viverra eget in felis.
              </div>
              <span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div>
          <!--GRANICA-->
          <div class="chat-body-client">
            <div class="user-circle">
              <span class="initials"> AW </span>
            </div>
            <div class="chat-body-msg">
              <div class="chat-body-rectangle">
                Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus
                tincidunt ac nunc et posuere.
              </div>
              <span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div>
          <div class="chat-body-user">
            <div class="bitmap">
              <img
                src="../../public/assets/images/avatar.png"
                alt="company logo"
                class="chat-body-logo"
              />
            </div>
            <div class="chat-body-msg">
              <div class="chat-body-rectangle-user">
                Ut vel odio sed dui tempor viverra eget in felis.
              </div>
              <span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div>
        </div>

        <form action="post" class="user_chat_entry">
          <input
            type="text"
            class="user_chat_entry_text"
            placeholder="Enter you message..."
          />
          <input
            type="image"
            class="user_chat_entry_image"
            name="submit"
            src="../../public/assets/images/icon-send.svg"
            alt="send"
          />
        </form>

        <br />
      </div>

      <hr id="line" class="line" />
      <div id="open_button" class="open_button" onclick="open_user_signup()">
        <b>CHAT NOW</b>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/*import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};*/
</script>
