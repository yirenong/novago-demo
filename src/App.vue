<template>
  <div id="app">
    <!-- Shell-only layout (login + landing) -->
    <template v-if="isShellRoute">
      <div class="auth-shell">
        <router-view />
      </div>
    </template>

    <!-- Main app layout -->
    <template v-else>
      <Sidebar :collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

      <div class="main" :class="{ collapsed: isCollapsed }">
        <Navbar :collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

        <div class="view-container">
          <router-view />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

const isCollapsed = ref(false)
const route = useRoute()

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

// Routes that should NOT show sidebar/navbar (login + landing)
const isShellRoute = computed(() => {
  return route.name === 'login' || route.name === 'landing' || route.name === 'RentalCollectionSummary'
})
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  width: 100%;
  /* make sure it can span full width */
  position: relative;
}

/* Shell for auth / landing pages (no sidebar, no navbar) */
.auth-shell {
  flex: 1;
  /* remove flex layout here */
  display: block;
  width: 100%;
  height: 100%;
}

/* Main app layout with sidebar */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  transition: margin-left 0.3s;
}

.main.collapsed {
  margin-left: 5%;
}

.view-container {
  margin-top: 60px;
  flex: 1;
  overflow: auto;
  background: var(--main-bg-color);
  padding: 20px;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .main {
    margin-left: 0%;
  }
}
</style>
