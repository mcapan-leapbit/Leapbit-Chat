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
                <!-- <img src="../../public/assets/images/icon-chevron.svg" class="status-chevron"></img> -->
              </div>
            </div>
          </div>
          <div class="status-divider"></div>
          <div class="scrollable-messages">
            <!-- <component
                :is="type == 'EmailMessage' ? 'email-queue-item' : 'queue-item'"
                v-for="item in queue"
                :key="item.id"
                :item="item"
            /> -->
            <ChatsListMessage />
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
    };
</script>
