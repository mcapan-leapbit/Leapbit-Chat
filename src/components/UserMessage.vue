<template>
  <div class="user-chat-body-client" v-if="!messageData.admin">
    <div class="user-circle">
      <span class="initials"> {{ initials }} </span>
    </div>
    <div class="user-chat-body-msg">
      <div class="user-chat-body-rectangle">{{ messageData.message }}</div>
      <span class="user-chat-body-timestamp">{{ messageData.timestamp }}</span>
    </div>
  </div>
  <div class="user-chat-body-user" v-if="messageData.admin">
    <div class="bitmap">
      <img
        src="../../public/assets/images/avatar.png"
        alt="company logo"
        class="user-chat-body-logo"
      />
    </div>
    <div class="user-chat-body-msg">
      <div class="user-chat-body-rectangle-user">{{ messageData.message }}</div>
      <span class="user-chat-body-timestamp">{{ messageData.timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMessage",
  props: ["full_name", "messageData"],
  computed: {
    initials() {
      let names = this.full_name.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
  },
};
</script>
