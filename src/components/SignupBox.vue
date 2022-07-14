<template>
  <form class="signup_box" @submit.prevent="$emit('submit-user', name, email)">
    <br />
    <input
      v-model="name"
      class="input_box"
      type="text"
      placeholder="Your name"
      name="name"
      required
    />
    <input
      v-model="email"
      class="input_box"
      type="email"
      placeholder="Your e-mail"
      name="email"
      required
    />
    <input class="start_button" type="submit" value="START CHAT" />
    <br />
  </form>
</template>

<script>
export default {
  name: "SignupBox",
  data: function () {
    return {
      name: "",
      email: "",
    };
  },
};
</script>
