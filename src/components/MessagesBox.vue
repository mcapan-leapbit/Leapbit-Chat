<template>
  <div id="messages_box" class="messages_box">
    <br />
    <div class="user-chat-body">
      <div class="user-chat-body-client">
        <div class="user-circle">
          <span class="initials"> AW </span>
        </div>
        <div class="user-chat-body-msg">
          <div class="user-chat-body-rectangle">
            Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus
            tincidunt ac nunc et posuere.
          </div>
          <span class="user-chat-body-timestamp">July 10, 2022 | 10:10</span>
        </div>
      </div>
      <div class="user-chat-body-user">
        <div class="bitmap">
          <img
            src="../../public/assets/images/avatar.png"
            alt="company logo"
            class="user-chat-body-logo"
          />
        </div>
        <div class="user-chat-body-msg">
          <div class="user-chat-body-rectangle-user">
            Ut vel odio sed dui tempor viverra eget in felis.
          </div>
          <span class="user-chat-body-timestamp">July 10, 2022 | 10:10</span>
        </div>
      </div>
      <!--GRANICA-->
      <div class="user-chat-body-client">
        <div class="user-circle">
          <span class="initials"> AW </span>
        </div>
        <div class="user-chat-body-msg">
          <div class="user-chat-body-rectangle">
            Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus
            tincidunt ac nunc et posuere.
          </div>
          <span class="user-chat-body-timestamp">July 10, 2022 | 10:10</span>
        </div>
      </div>
      <div class="user-chat-body-user">
        <div class="bitmap">
          <img
            src="../../public/assets/images/avatar.png"
            alt="company logo"
            class="user-chat-body-logo"
          />
        </div>
        <div class="user-chat-body-msg">
          <div class="user-chat-body-rectangle-user">
            Ut vel odio sed dui tempor viverra eget in felis.
          </div>
          <span class="user-chat-body-timestamp">July 10, 2022 | 10:10</span>
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
</template>

<script>
export default {
  name: "MessagesBox",
};
</script>
