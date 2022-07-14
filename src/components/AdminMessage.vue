<template>
  <div class="chat-body-user" v-if="messageData.admin">
    <div class="chat-user-logo">
      <img
        src="../../public/assets/images/avatar.webp"
        alt="company logo"
        class="chat-body-logo"
      />
    </div>
    <div class="chat-body-msg-user">
      <p class="chat-body-rectangle-user remove-marg">
        {{ messageData.message }}
      </p>
      <span class="chat-body-timestamp user-timestamp">
        {{ messageData.timestamp }}
      </span>
    </div>
  </div>

  <!-- client -->

  <div class="chat-body-client" v-if="!messageData.admin">
    <div class="user-circle">
      <span class="user-initials"> {{ initials }} </span>
    </div>
    <div class="chat-body-msg">
      <p class="chat-body-rectangle remove-marg">
        {{ messageData.message }}
      </p>
      <span class="chat-body-timestamp"> {{ messageData.timestamp }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminMessage",
  props: ["messageData"],
  computed: {
    initials() {
      let names = this.messageData.name.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
  },
};
</script>
