<template>
  <div class="floating_chatbox">
    <div v-if="isOpen" @click="closeChat()" class="bitmap closer">
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

    <SignupBox v-if="isOpen & !isSignedIn" @submit-user="acceptUser" />

    <UserChatbox
      v-if="isOpen & isSignedIn"
      :full_name="full_name"
      :email="email"
    />

    <hr v-if="!isOpen" class="line" />
    <div v-if="!isOpen" @click="openChat()" class="open_button">
      <b>CHAT NOW</b>
    </div>
  </div>
</template>

<script>
import SignupBox from "../../src/components/SignupBox.vue";
import UserChatbox from "../../src/components/UserChatbox.vue";
//import { uuid } from "vue-uuid";
//import {}

export default {
  name: "FloatingChat",
  components: {
    SignupBox,
    UserChatbox,
  },
  data: function () {
    return {
      isOpen: false,
      isSignedIn: false,
      isAdminActive: true,
      full_name: "",
      email: "",
    };
  },
  methods: {
    openChat() {
      this.isOpen = true;
      if (this.$cookies.isKey("conversation_id")) {
        this.isSignedIn = true;
      }
    },
    closeChat() {
      this.isOpen = false;
    },
    acceptUser(name, email) {
      this.full_name = name;
      this.email = email;
      alert("fg " + name + " " + email);
      this.isSignedIn = true;
    },
  },
};
</script>
