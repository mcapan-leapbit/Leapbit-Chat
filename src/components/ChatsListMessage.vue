<template>
  <div class="message-box">
              <div class="">
                <div class="chat-sender">
                  <span class="profile-bg"
                    ><span class="profile-initials">{{message.initials}}}</span></span
                  >
                  <div class="sender-details">
                    <div class="profile-name">
                      {{message.full_name}}
                      <span class="message-timestamp"
                        >{{message.timestamp}}}</span
                      >
                    </div>
                    <span class="profile-email">{{message.email}}</span>
                  </div>
                </div>
              </div>
              <div class="chat-bottom">
                <p class="message-text">
                  {{message.message}}
                </p>
              </div>
            </div>
</template>

<script>
export default {
    name: "ChatsListMessage",
    data(){

    },
}
</script>

