<template>
  <form class="signup_box">
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
    <input
      @submit="$emit('submit', name, email)"
      class="start_button"
      type="submit"
      value="START CHAT"
    />
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
