<template>
  <div class="mask-cbox">
    <AdminTopBar />
    <div class="chat-body">
      <AdminMessage />
    </div>
    <AdminInput />
  </div>
</template>

<script>
import AdminTopBar from "./AdminTopBar.vue";
import AdminMessage from "./AdminMessage.vue";
import AdminInput from "./AdminInput.vue";
export default {
  name: "AdminChatbox",
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
};
</script>