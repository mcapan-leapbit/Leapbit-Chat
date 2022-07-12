<template>
  <div class="dash">
    <div class="dashboard-left-menu">
      <Sidebar />
    </div>
    <div class="right-col">
      <div class="messages">
        Messages <span class="rectangle"><span class="-new">2 new</span></span>
      </div>
      <div class="msg-row">
        <ChatsList />
        <div class="mask-cbox">
          <div class="chat-header">
            <div class="chat-header-contents">
              <div class="user-circle">
                <span class="user-initials">AW</span>
              </div>
              <div class="chat-header-info">
                <span class="chat-header-uname">Austin Wade</span>
                <span class="header-usermail">austin.wade@leapbit.com</span>
              </div>
            </div>
          </div>
          <div class="chat-body">
            <div class="chat-body-client">
              <div class="user-circle">
                <span class="user-initials">AW</span>
              </div>
              <div class="chat-body-msg">
                <p class="chat-body-rectangle remove-marg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum ratione sapiente error harum reiciendis iusto ullam,
                  rerum, magni, vel excepturi commodi officiis facilis pariatur
                  asperiores delectus dignissimos dicta laborum magnam
                  repellendus possimus facere autem. Porro, praesentium
                  adipisci? Inventore natus, labore sequi magnam doloribus saepe
                  obcaecati delectus ad aliquid. Non, facere.
                </p>
                <span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
              </div>
            </div>
            <div class="chat-body-user">
              <div class="chat-user-logo">
                <img
                  src="../../public/assets/images/avatar.webp"
                  alt="company logo"
                  class="chat-body-logo"
                />
              </div>
              <div class="chat-body-msg-user">
                <p class="chat-body-rectangle-user remove-marg">
                  Ut vel odio sed dui tempor viverra eget in felis. Cras blandit
                  lectus ex. Donec non sollicitudin ante. Nullam vitae leo a
                  nulla gravida placerat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <span class="chat-body-timestamp user-timestamp"
                  >July 10, 2022 | 10:10</span
                >
              </div>
            </div>
            <!--GRANICA-->
          </div>
          <div class="send-msg">
            <form action="post" class="chat-entry">
              <input
                type="text"
                class="chat-entry-text"
                placeholder="Upišite svoju poruku..."
              />
              <input
                type="image"
                name="submit"
                src="../../public/assets/images/icon-send.svg"
                class="chat-send-icon"
                alt="send message"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../public/sass/index.scss";
</style>

<script>
import Sidebar from "../../src/components/Sidebar.vue";

export default {
  name: "Admin",
  components: {
    Sidebar,
  },
};
</script>