<template>
  <form class="signup_box" id="signup_box">
    <br />
    <input
      class="input_box"
      type="text"
      placeholder="Your name"
      name="name"
      required
    />
    <input
      class="input_box"
      type="text"
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
};
</script>
