<template>
  <div class="chat-header">
    <div class="chat-header-contents">
      <div class="user-circle">
        <span class="user-initials"> {{ initials }} </span>
      </div>
      <div class="chat-header-info">
        <span class="chat-header-uname"> {{ full_name }} </span>
        <span class="header-usermail"> {{ email }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import InitialsMixin from "../mixins/initials";

export default {
  name: "AdminTopBar",
  mixins: [InitialsMixin],
  props: ["email"],
};
</script>
