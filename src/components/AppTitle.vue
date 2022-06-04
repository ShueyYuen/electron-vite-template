<script setup lang="ts">
defineProps<{ title: string }>();

const windowOperation = (e: MouseEvent) => {
  window.ipcRenderer?.send('window-operation', {
    data: (e.target as HTMLDivElement).dataset['event'],
  });
}
</script>

<template>
  <section id="app-title" style="-webkit-app-region: drag">
    <div class="title">{{title}}</div>
    <div class="window" style="-webkit-app-region: no-drag;">
      <div data-event="min" class="icon" @click="windowOperation"></div>
      <div data-event="max" class="icon" @click="windowOperation"></div>
      <div data-event="close" class="icon" @click="windowOperation"></div>
    </div>
  </section>
</template>

<style scoped lang="less">
#app-title {
  display: flex;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .title {
    letter-spacing: 1px;
    font-weight: bold;
  }
  .window {
    display: flex;
    column-gap: 8px;
    align-items: center;
    .icon {
      width: 18px;
      height: 18px;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      transition: all ease-in-out .3s;
      &:hover {
        background: rgb(209, 209, 209);
      }
      &::after {
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::after,&::before {
        pointer-events: none;
        position: absolute;
        border-radius: 1px;
      }
    }
    [data-event="min"]::after {
      width: 80%;
      height: 2px;
      background: rgb(32, 41, 61);
    }
    [data-event="max"]::after {
      width: 50%;
      height: 50%;
      border: 2px solid rgb(32, 41, 61);
    }
    [data-event="close"] {
      &::after,
      &::before {
        content: "";
        width: 16px;
        height: 2px;
        background: rgb(32, 41, 61);
        transform-origin: 50% 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::before {
        transform: translate(-50%, 8px) rotate(-45deg);
      }
    }
  }
}
</style>
