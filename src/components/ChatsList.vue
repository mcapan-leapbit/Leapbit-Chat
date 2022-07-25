<template>
  <div class="chats-list">
    <div class="chats-top">
      <div class="search-pack">
        <div class="search-pack-left">
          <span class="search-label">Search for chat</span>
          <input
            class="search-box"
            type="text"
            placeholder="Search"
            v-model="search_text"
          />
        </div>
      </div>
      <div class="active-box">
        <span class="status-label">Status</span>
        <div class="status-box">
          <span class="status-icon"></span>
          <span class="status-placeholder">Active</span>
          <!-- <img
            src="../../public/assets/images/icon-chevron.svg"
            class="status-chevron"
          /> -->
        </div>
      </div>
    </div>
    <div class="status-divider"></div>
    <div class="scrollable-messages">
      <ChatsListMessage
        v-for="admin_message in filtered_chats"
        :key="admin_message.last_updated"
        :full_name="admin_message.full_name"
        :timestamp="
          admin_message.messages[admin_message.messages.length - 1].timestamp
        "
        :email="admin_message.email"
        :message="
          admin_message.messages[admin_message.messages.length - 1].message
        "
        :conversation_id="admin_message.conversation_id"
        :notif_number="admin_message.notif_number"
        @clicked="conv_selected"
      ></ChatsListMessage>
    </div>
  </div>
</template>

<script>
import ChatsListMessage from "../../src/components/ChatsListMessage.vue";

export default {
  name: "ChatsList",
  components: {
    ChatsListMessage,
  },
  data() {
    return {
      chats: [],
      selected_conversation: "",
      notif_sum: 0,
      search_text: "",
    };
  },
  watch: {
    chats() {
      this.update_chats();
      this.sort_chats();
    },
  },
  computed: {
    filtered_chats() {
      if (!this.search_text.trim()) return this.chats;
      let filtered = this.chats.filter((conv) => {
        return conv.full_name
          .toLowerCase()
          .indexOf(this.search_text.toLowerCase()) < 0
          ? false
          : true;
      });
      return filtered;
    },
  },
  mounted() {
    this.axios
      .get(process.env.VUE_APP_SERVER + "conversations")
      .then((res) => {
        this.chats = res.data.filter((c) => c.messages.length != 0);
        this.chats.forEach(
          (element) =>
            (element.notif_number =
              element.messages.filter((msg) => msg.admin == false).length -
              element.last_index)
        );
      })
      .catch((err) => console.log(err));
    this.$socket.client.on("chatUpdated", (conv_id) => {
      this.updateNotif(conv_id);
      this.update_chats();
    });
    this.$socket.client.on("confirmToClient", (packet) => {
      this.updateNewMessage(packet);
      if (
        packet.conversation_id != this.selected_conversation &&
        this.chats.length != 0
      ) {
        if (
          this.chats.find(
            (conversation) =>
              conversation.conversation_id == packet.conversation_id
          )
        ) {
          this.chats.find(
            (conversation) =>
              conversation.conversation_id == packet.conversation_id
          ).notif_number =
            this.chats
              .find(
                (conversation) =>
                  conversation.conversation_id == packet.conversation_id
              )
              .messages.filter((message) => message.admin == false).length -
            this.chats.find(
              (conversation) =>
                conversation.conversation_id == packet.conversation_id
            ).last_index;
        }
      } else {
        if (this.chats.length != 0) {
          this.chats.find(
            (conversation) =>
              conversation.conversation_id == packet.conversation_id
          ).last_index = this.chats
            .find(
              (conversation) =>
                conversation.conversation_id == packet.conversation_id
            )
            .messages.filter((message) => message.admin == false).length;
          this.$socket.client.emit(
            "chatOpened",
            packet.conversation_id,
            this.chats
              .find(
                (conversation) =>
                  conversation.conversation_id == packet.conversation_id
              )
              .messages.filter((message) => message.admin == false).length,
            packet.values.$set.last_updated
          );
        }
      }
      if (
        this.chats.find(
          (conversation) =>
            conversation.conversation_id == packet.conversation_id
        )
      ) {
        this.chats.find(
          (conversation) =>
            conversation.conversation_id == packet.conversation_id
        ).last_updated = packet.values.$set.last_updated;
        this.update_chats();
      }
    });
  },
  methods: {
    conv_selected(conv_id, last_updated) {
      this.$emit("conv_selected", conv_id);
      this.selected_conversation = conv_id;
      document
        .querySelectorAll('[active="true"]')
        .forEach((elem) => elem.setAttribute("active", false));

      let msg_length = this.chats
        .find((conversation) => conversation.conversation_id == conv_id)
        .messages.filter((message) => message.admin == false).length;

      this.chats.find(
        (conversation) => conversation.conversation_id == conv_id
      ).last_index = this.chats
        .find((conversation) => conversation.conversation_id == conv_id)
        .messages.filter((message) => message.admin == false).length;
      this.chats.find(
        (conversation) => conversation.conversation_id == conv_id
      ).notif_number = this.notif_number;

      this.$socket.client.emit("chatOpened", conv_id, msg_length, last_updated);
    },
    updateNotif(conv_id) {
      if (this.chats.length != 0) {
        this.chats.find(
          (conversation) => conversation.conversation_id == conv_id
        ).notif_number =
          this.chats
            .find((conversation) => conversation.conversation_id == conv_id)
            .messages.filter((message) => message.admin == false).length -
          this.chats.find(
            (conversation) => conversation.conversation_id == conv_id
          ).last_index;
      }
    },
    updateNewMessage(packet) {
      if (
        !this.chats.find(
          (conversation) =>
            conversation.conversation_id == packet.conversation_id
        )
      ) {
        this.axios
          .get(process.env.VUE_APP_SERVER + "conversations")
          .then((res) => {
            this.chats = res.data.filter((c) => c.messages.length != 0);
            this.chats.forEach(
              (element) =>
                (element.notif_number =
                  element.messages.filter((msg) => msg.admin == false).length -
                  element.last_index)
            );
          });
        return;
      }
      if (this.chats.length != 0) {
        this.chats
          .find(
            (conversation) =>
              conversation.conversation_id == packet.conversation_id
          )
          .messages.push(packet.values.$push.messages);
      }
    },
    update_chats() {
      let sum = 0;
      this.chats.forEach((chat) => (sum += chat.notif_number));
      this.notif_sum = sum;
      this.$emit("sum_changed", this.notif_sum);
      this.sort_chats();
    },
    sort_chats: function () {
      this.chats
        .sort(function (x, y) {
          return x.last_updated - y.last_updated;
        })
        .reverse();
    },
  },
};
</script>
