<template>
  <div class="sidebar">
        <div class="admin">
          <img
            src="../../public/assets/images/avatar.png"
            class="avatar-img"
            alt="avatar"
          />
          <div class="username">username</div>
          <div class="email">username@leapbit.com</div>
        </div>
        <div class="navigation">
          <div class="nav-item">
            <img
              src="../../public/assets/images/icon-home.svg"
              alt="icon-home"
            />
            <p>Dashboard</p>
          </div>
          <div class="nav-item">
            <img
              src="../../public/assets/images/icon-chat.svg"
              alt="icon-chat"
            />
            <p>Chats</p>
          </div>
          <div class="nav-item">
            <img
              src="../../public/assets/images/icon-users.svg"
              alt="icon-users"
            />
            <p>Users</p>
          </div>
          <div class="nav-item">
            <img
              src="../../public/assets/images/icon-settings.svg"
              alt="icon-settings"
            />
            <p>Settings</p>
          </div>
        </div>
        <div class="bottom-nav">
          <div class="nav-item">
            <img
              src="../../public/assets/images/icon-logout.svg"
              alt="icon-logout"
            />
            <p>Logout</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Sidebar",
}
</script>