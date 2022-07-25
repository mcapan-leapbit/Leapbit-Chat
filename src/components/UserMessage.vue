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
import InitialsMixin from "../mixins/initials";

export default {
  name: "UserMessage",
  mixins: [InitialsMixin],
  props: ["messageData"],
};
</script>
