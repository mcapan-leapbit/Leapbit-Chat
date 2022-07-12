<template>
  <div class="floating_chatbox">
    <div id="closer" class="bitmap closer" onclick="close_user_chatbox()">
      <img
        src="../../public/assets/images/icon-close.svg"
        alt="x"
        class="user-chat-body-logo"
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
            class="user-chat-body-logo"
          />
        </div>
        <div v-if="isAdminActive" class="status"></div>
      </div>
    </div>

    <SignupBox />

    <MessagesBox />

    <hr v-if="!isOpen" id="line" class="line" />
    <div v-if="!isOpen" id="open_button" class="open_button" >
      <b>CHAT NOW</b>
    </div>
  </div>
</template>

<script>
import SignupBox from "../../src/components/SignupBox.vue";
import MessagesBox from "../../src/components/MessagesBox.vue";

export default {
  name: "FloatingChat",
  /*props: {
    msg: String,
  },*/
  components: {
    SignupBox,
    MessagesBox,
  },
  data: function () {
    return {
      isOpen: false,
      isSignedIn: false,
      isAdminActive: true,
    };
  },
};
</script>
