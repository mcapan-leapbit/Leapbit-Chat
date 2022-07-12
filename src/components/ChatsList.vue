<template>
  <div class="chats-list">
          <div class="chats-top">
            <div class="search-pack">
              <div class="search-pack-left">
                <span class="search-label">Search for chat</span>
                <input class="search-box" type="text" placeholder="Search" />
              </div>
            </div>
            <div class="active-box">
              <span class="status-label">Status</span>
              <div class="status-box">
                <span class="status-icon"></span>
                <span class="status-placeholder">Active</span>
                <!-- <img src="../../public/assets/images/icon-chevron.svg" class="status-chevron"></img> -->
              </div>
            </div>
          </div>
          <div class="status-divider"></div>
          <div class="scrollable-messages">
            
          </div>
        </div>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>
