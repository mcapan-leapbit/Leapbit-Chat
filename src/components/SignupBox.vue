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
      ref="nameInput"
    />
    <input
      v-model="email"
      class="input_box"
      type="email"
      placeholder="Your e-mail"
      name="email"
      required
      ref="emailInput"
    />
    <input
      class="start_button"
      type="submit"
      value="START CHAT"
      :style="startBtnOpacity"
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
  computed: {
    startBtnOpacity() {
      if (this.name && this.email) return "opacity: 1";
      else return "opacity: 0.5";
    },
  },
};
</script>
