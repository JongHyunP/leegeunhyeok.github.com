<template>
  <div class="shortcut" @click="$emit('onClick')">
    <img :src="path">
    <div class="shortcut-name">
      <slot name="shortcut-name"></slot>
    </div>
  </div>
</template>

<script>
// 단축 아이콘

export default {
  props: ['path']
}
</script>

<style>
.shortcut {
  cursor: pointer;
  width: 6rem;
  height: 6rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.shortcut:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.shortcut img {
  width: 4rem;
  height: 4rem;
}

.shortcut-name {
  color: #fff;
  text-shadow: 1px 1px 2px #000;
}
</style>
