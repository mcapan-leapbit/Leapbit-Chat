<template>
  <div class="message-box">
    <div class="">
      <div class="chat-sender">
        <span class="profile-bg">
          <span class="profile-initials">
            {{ initials }}
            <span v-if="isValid" class="notif-bg">{{ notif_number }}</span>
          </span>
        </span>
        <div class="sender-details">
          <div class="profile-name">
            {{ full_name }}
            <span class="message-timestamp">{{ timestamp }}</span>
          </div>
          <span class="profile-email">{{ email }}</span>
        </div>
      </div>
    </div>
    <div class="chat-bottom">
      <p class="message-text">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ChatsListMessage",
  props: ["full_name", "timestamp", "email", "message", "conversation_id", "last_message_index", "messages_length"],
  data() {
    return {
      notif_number: this.messages_length - this.last_index,
    };
  },
  computed: {
    isValid() {
      return (
        this.notif_number !== null &&
        this.notif_number !== "" &&
        +this.notif_number > 0
      );
    },
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
