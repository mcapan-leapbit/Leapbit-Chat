<template>
  <form action="post" class="user_chat_entry">
    <input
      type="text"
      class="user_chat_entry_text"
      placeholder="Enter you message..."
    />
    <input
      type="image"
      class="user_chat_entry_image"
      name="submit"
      :src="require('../../public/assets/images/icon-send.svg')"
      alt="send"
    />
  </form>
</template>

<script>
export default {
  name: "UserInput",
};
</script>
