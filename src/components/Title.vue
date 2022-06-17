<template>
  <div class="title">
    <img class="goBack" src="../assets/img/backIcon.png" alt="" @click="onback"/>
    <strong class="content">{{content}}</strong>
    <div class="goBack" />
  </div>
</template>

<script>

export default ({
  name: 'title',
  props: ['content'],
  methods: {
    onback() {
      this.$emit("goback");
    }

  }

})
</script>

<style>
.title {
  background: #FFFFFF;
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #E4E4E4;
}
.goBack {
  width: 20px;
  height: 20px;
  padding: 10px;
  
}
.content {
  font-size: 20px;
  color: black;
  text-align: center;
  flex: 1;

}
</style>
