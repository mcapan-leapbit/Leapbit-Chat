<template>
  <div class="chat-body-user" v-if="admin">
    <div class="chat-user-logo">
      <img
        src="../../public/assets/images/avatar.webp"
        alt="company logo"
        class="chat-body-logo"
      />
    </div>
    <div class="chat-body-msg-user">
      <p class="chat-body-rectangle-user remove-marg">
        {{ message }}
      </p>
      <span class="chat-body-timestamp user-timestamp"> {{ timestamp }} </span>
    </div>
  </div>

  <!-- client -->

  <div class="chat-body-client" v-if="!admin">
    <div class="user-circle">
      <span class="user-initials"> {{ initials }} </span>
    </div>
    <div class="chat-body-msg">
      <p class="chat-body-rectangle remove-marg">
        {{ message }}
      </p>
      <span class="chat-body-timestamp"> {{ timestamp }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminMessage",
  props: ["messageData"],
  data() {
    return {
      admin: false,
      initials: "AW",
      message: "The quick brown fox jumps over the lazy dog",
      timestamp: "July 10, 2022 | 10:10",
    };
  },
  mounted() {},
  //destructure messageData and
};
</script>

<style lang="scss">
@import "/public/sass/homepage.scss";
</style>