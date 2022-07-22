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
      <p class="message-text" :new_message="new_message">
        {{ new_message }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ChatsListMessage",
  props: [
    "key",
    "full_name",
    "timestamp",
    "email",
    "message",
    "conversation_id",
    "last_message_index",
    "messages_length",
  ],
  data() {
    return {
      notif_number: this.messages_length - this.last_message_index,
      data: {},
      isActive: false,
      new_message: this.messages,
    };
  },
  mounted() {
    this.$socket.client.on("confirmToClient", this.updateNotif);
  },
  watch: {
    notif_number() {
      this.updateNotif;
    },
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
      if (this.full_name) {
        let names = this.full_name.split(" "),
          initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
          initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
      }
      return "";
    },
  },
  methods: {
    updateNotif() {
      this.axios
        .get(
          process.env.VUE_APP_SERVER + "conversation/" + this.conversation_id
        )
        .then((res) => {
          this.data = res.data;
          this.notif_number = this.data.messages.length - this.data.last_index;
          this.new_message =
            this.data.messages[this.data.messages.length - 1].message;
        })
        .catch((err) => console.log(err));
    },
    conversation_selected() {
      this.$emit(
        "clicked",
        this.conversation_id,
        this.messages_length,
        moment().unix()
      );
      this.isActive = true;
    },
  },
};
</script>
