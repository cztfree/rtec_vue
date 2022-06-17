<template>
  <div class="layout-main">
    <div class="main-content">
      {{content}}
    </div>
    <div class="bottom-bar">
      <icon-text :imgSrc="position === 0? require('@/assets/img/ic_bottom_bar_home_on.png') : require('@/assets/img/ic_bottom_bar_home_off.png')" imgWidth="0.48" imgHeight="0.48"
                  text="首页" textSize="0.28" :textcolor="position === 0? '#057AFF' : '#989cA9'" marginTop="0.12" class="bottom-bar-item" @on-click="onItemClick"/>
      <icon-text :imgSrc="position === 1? require('@/assets/img/ic_bottom_bar_gov_on.png') : require('@/assets/img/ic_bottom_bar_gov_off.png')" imgWidth="0.48" imgHeight="0.48"
                  text="政务" textSize="0.28" :textcolor="position === 1? '#057AFF' : '#989cA9'" marginTop="0.12" class="bottom-bar-item" @on-click="onItemClick"/>
      <icon-text :imgSrc="require('@/assets/img/ic_bottom_bar_show.png')" imgWidth="0.48" imgHeight="0.48"
                  text="亮证" textSize="0.28" :textcolor="position === 2? '#057AFF' : '#989cA9'" marginTop="0.12" class="bottom-bar-item" @on-click="onItemClick"/>
      <icon-text :imgSrc="position === 3? require('@/assets/img/ic_bottom_bar_service_on.png') : require('@/assets/img/ic_bottom_bar_service_off.png')" imgWidth="0.48" imgHeight="0.48"
                  text="服务" textSize="0.28" :textcolor="position === 3? '#057AFF' : '#989cA9'" marginTop="0.12" class="bottom-bar-item" @on-click="onItemClick"/>
      <icon-text :imgSrc="position === 4? require('@/assets/img/ic_bottom_bar_my_on.png') : require('@/assets/img/ic_bottom_bar_my_off.png')" imgWidth="0.48" imgHeight="0.48"
                  text="我的" textSize="0.28" :textcolor="position === 4? '#057AFF' : '#989cA9'" marginTop="0.12" class="bottom-bar-item" @on-click="onItemClick"/>
    </div>

    <img class="item-show" src="@/assets/img/ic_bottom_bar_show.png" alt="" @click="onItemClick('亮证')"/>
  </div>
</template>

<script>
import IconText from "@/components/IconText";

export default {
  components: {
    IconText,
  },
  data() {
    return {
      position: 0,
      content: "首页",

    }
  },
  methods: {
    onItemClick(name) {
      switch(name) {
        case "首页": 
          this.position = 0;
          
          break;
       case "政务": 
          this.position = 1;
          break;
        case "亮证": 
          this.position = 2;
          break;
        case "服务": 
          this.position = 3;
          break;
        case "我的": 
          this.position = 4;
          break;
      }
      this.content = name;
      // console.log("onItemCiclk" + name);
    }
  }

}
</script>

<style lang="scss">
.layout-main {
  display: flex;
  flex-direction: column;
  .main-content {
    flex: 1;
  }
  .bottom-bar {
    display: flex;
    flex-direction: row;
    .bottom-bar-item {
      flex: 1;
    }
    position: absolute;
    bottom: 0rem;
    width: 100%;
    box-shadow: 0px -0.5px 3px #888888;
    padding-top: 0.1rem;
  
}
.item-show {
  width: 1.04rem;
  height: 1.04rem;
  position: absolute;
  left: calc((100% - 1.04rem)/2);
  bottom: 0.36rem;
}
}


</style>