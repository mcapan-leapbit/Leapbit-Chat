<template>
  <div class="message-box" @click="conversation_selected" :active="isActive">
    <div class="">
      <div class="chat-sender">
        <span class="profile-bg">
          <span class="profile-initials">
            {{ initials }}
            <span
              v-if="isValid"
              class="notif-bg"
              :notif_number="notif_number"
              >{{ notif_number }}</span
            >
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
      <p class="message-text" :message="message">
        {{ message }}
      </p>
    </div>
  </div>
  <div class="status-divider"></div>
</template>

<script>
import moment from "moment";
import InitialsMixin from "../mixins/initials";

export default {
  name: "ChatsListMessage",
  mixins: [InitialsMixin],
  props: [
    "key",
    "timestamp",
    "email",
    "message",
    "conversation_id",
    "notif_number",
  ],
  data() {
    return {
      isActive: false,
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
  },
  methods: {
    conversation_selected() {
      this.$emit("clicked", this.conversation_id, moment().unix());
      this.isActive = true;
    },
  },
};
</script>
