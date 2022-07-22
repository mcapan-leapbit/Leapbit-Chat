<template>
  <div class="chats-list">
    <div class="chats-top">
      <div class="search-pack">
        <div class="search-pack-left">
          <span class="search-label">Search for chat</span>
          <input class="search-box" type="text" placeholder="Search" />
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
        ref="childComponentRef"
        v-for="admin_message in chats"
        :key="admin_message.id"
        :full_name="admin_message.full_name"
        :timestamp="
          admin_message.messages[admin_message.messages.length - 1].timestamp
        "
        :email="admin_message.email"
        :message="
          admin_message.messages[admin_message.messages.length - 1].message
        "
        :messages_length="admin_message.messages.length"
        :conversation_id="admin_message.conversation_id"
        :last_message_index="admin_message.last_index"
        @clicked="conv_selected"
        @interface="getChildInterface"
      />
    </div>
  </div>
</template>

<script>
import ChatsListMessage from "../../src/components/ChatsListMessage.vue";
// import { ref, onMounted } from "vue";

export default {
  name: "ChatsList",
  components: {
    ChatsListMessage,
  },
  data() {
    return {
      chats: {},
    };
  },
  // setup() {
  //   const childComponentRef = ref();
  //   onMounted(() => {
  //     childComponentRef.value.doSomething();
  //   });
  // },
  mounted() {
    this.axios
      .get(process.env.VUE_APP_SERVER + "conversations")
      .then((res) => {
        this.chats = res.data.filter((c) => c.messages.length != 0);
      })
      .catch((err) => console.log(err));

    this.$socket.client.on(
      "confirmToClient",
      this.$options.childInterface.updateNotif()
    );
  },
  childInterface: {
    updatENotif: () => {},
  },
  methods: {
    conv_selected(conv_id, msg_length, last_updated) {
      this.$emit("conv_selected", conv_id);
      document
        .querySelectorAll('[active="true"]')
        .forEach((elem) => elem.setAttribute("active", false));
      this.$socket.client.emit("ChatOpened", conv_id, msg_length, last_updated);
    },
    getChildInterface(childInterface) {
      this.$options.childInterface = childInterface;
    },
  },
};
</script>
