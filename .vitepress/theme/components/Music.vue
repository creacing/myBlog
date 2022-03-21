<template>
  <div class="bg-music-component">
    <div class="music-name">井口裕香 - さらば29</div>
    <div class="music-lyric" v-html="currentLyric"></div>
    <audio class="bg-music" src="/井口裕香 - さらば29.mp3" loop="loop">
      井口裕香 - さらば29.mp3
    </audio>
    <div class="playIcon" v-show="musicON" @click="playMusic">⏸️</div>
    <div class="playIcon" v-show="!musicON" @click="playMusic">🎵</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { parseLyric, timeZone } from "../utils/parseLyric";
let musicON = ref(false);

const playMusic = () => {
  musicON.value = !musicON.value;
  const audio = document.getElementsByClassName("bg-music")[0];
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
const currentLyric = ref("歌词");
const lyric = parseLyric();
onMounted(() => {
  const timeZoneMatchLyricDic: {} = parseLyric();
  const audio = document.getElementsByClassName("bg-music")[0];
  audio.addEventListener("timeupdate", () => {
    const key: string = parseInt(audio.currentTime);
    if (timeZoneMatchLyricDic[key]) {
      currentLyric.value = timeZoneMatchLyricDic[key];
    }
  });
});

const hignLight = () => {};
</script>

<style scoped>
.bg-music-component {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 1000;
  color: var(--c-color);
  font-weight: var(--font-title2-weight);
  /* border: 1px solid black;
  width: 20px;
  height: 20px; */
}
@media (max-width: 1100px) {
  .bg-music-component {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 60px;
    right: 20px;
    z-index: 1000;
    color: var(--c-color);
    font-weight: var(--font-title2-weight);
  }
  .music-lyric {
    display: none;
  }
}
audio {
  /* z-index: 1000; */
  height: 30px;
  /* width: 100px; */
  background-color: rgba(255, 255, 255, 0);
}
.playIcon {
  margin-left: 10px;
}
</style>
