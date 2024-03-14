<script setup lang="ts">
</script>

<template>
  <main>
      <div id="villager-data" data-gender="Male">
        <!-- Loading -->
        <div id="loading" style="display: none;">
          <!-- Loading from https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/3-dots-fade.svg?short_path=f66ee04 -->
          <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle class="spinner_S1WN" cx="4" cy="12" r="3"/><circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"/><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"/></svg>
        </div>
        <!-- Error handler -->
        <div id="error-panel" style="display: none;">
          <div class="main">
            <h2>Oops!</h2>
            <p></p>
          </div>
        </div>
        <!-- Content -->
        <div id="content" style="display: block;">
          <div class="profile">
            <figure class="photo">
              <img src="https://dodo.ac/np/images/9/94/Ribbot_NH.png" alt="" />
            </figure>
            <div class="main">
              <span class="name">Bud</span>
              <p class="quote">You're not living unless you're sweating!</p>
            </div>
          </div>
          <div class="characteristics">
            <div class="item" data-type="species">
              <label>Species</label>
              <div class="response">
                <!-- <img src="assets/img/paw-print.svg" class="item-icon icon-species" /> -->
                <i class="icon icon-species"></i>
                <span>Lion</span>
              </div>
            </div>
            <div class="item" data-type="personality">
              <label>Personality</label>
              <div class="response">
                <!-- <img src="assets/img/personality.svg" class="item-icon icon-personality" /> -->
                <i class="icon icon-personality"></i>
                <span>Jock</span>
              </div>
            </div>
            <div class="item" data-type="hobby">
              <label>Hobby</label>
              <div class="response">
                <!-- <img src="assets/img/Fitness.svg" class="item-icon" /> -->
                <i class="icon icon-hobby" data-type="Fitness"></i>
                <span>Fitness</span>
              </div>
            </div>
            <div class="item" data-type="birthday">
              <label>Birthday</label>
              <div class="response">
                <!-- <img src="assets/img/birthday-cake.svg" class="item-icon icon-birthday" /> -->
                <i class="icon icon-birthday"></i>
                <span>August 8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
