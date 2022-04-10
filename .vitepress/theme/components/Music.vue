<template>
  <div class="bg-music-component">
    <div class="music-name" v-show="currentLyric === '歌词'">
      井口裕香 - さらば29
    </div>
    &nbsp;
    <div
      class="music-lyric"
      v-html="
        `${currentLyric.split('<br/>')[0]}${
          currentLyric.split('<br/>')[1]
            ? ' , ' + currentLyric.split('<br/>')[1]
            : ''
        }`
      "
    ></div>
    <audio class="bg-music" src="/井口裕香 - さらば29.mp3" loop="loop">
      井口裕香 - さらば29.mp3
    </audio>
    <div class="playIcon" v-show="musicON" @click="playMusic">⏸️</div>
    <div class="playIcon" v-show="!musicON" @click="playMusic">🎵</div>
  </div>
</template>

<script lang="ts" setup>
import { Content } from "vitepress";
import { onMounted, ref } from "vue";
import { parseLyric, timeZone } from "../utils/parseLyric";
let musicON = ref(false);
//子传父
const emits = defineEmits(["play"]);

const playMusic = () => {
  emits("handlePlay");
  musicON.value = !musicON.value;
  const audio = document.getElementsByClassName("bg-music")[0];
  if (audio.paused) {
    emits("play", "play");
    audio.play();
  } else {
    emits("play", "pause");
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
  /* flex-direction: column; */
  align-items: flex-end;
  position: fixed;
  /* bottom: 60px;
  right: 20px; */
  top: 20px;
  right: 350px;
  z-index: 1000;
  color: var(--c-color);
  font-weight: var(--font-title2-weight);
  /* border: 1px solid black;
  width: 20px;
  height: 20px; */
}
@media (max-width: 1100px) {
  .bg-music-component {
    display: none;
  }
  .music-lyric {
    display: none;
  }
}
audio {
  height: 30px;
  background-color: rgba(255, 255, 255, 0);
}
.playIcon {
  margin-left: 10px;
}
</style>
