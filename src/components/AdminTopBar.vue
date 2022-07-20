<template>
  <div class="chat-header">
    <div class="chat-header-contents">
      <div class="user-circle">
        <span class="user-initials"> {{ initials }} </span>
      </div>
      <div class="chat-header-info">
        <span class="chat-header-uname"> {{ fullName }} </span>
        <span class="header-usermail"> {{ email }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminTopBar",
  props: ["fullName", "email", "initials"],
};
</script>

