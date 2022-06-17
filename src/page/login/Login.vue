<template>
  <div class="page">
    <img class="goBack" src="@/assets/img/backIcon.png" alt=""> 
    <strong class="text-black">您好，</strong>
    <strong class="text-black">欢迎登录运证通</strong>

    <van-field class="edit" v-model="userInfo.name" placeholder="请输入帐号/手机号" @input="nameInput"/>
    <van-field class="edit" v-model="userInfo.pwd" style="margin-top: 0.4rem;" placeholder="请输入密码" :type="passwordType" @input="pwdInput">
      <van-icon slot="right-icon" :name="icPwdName" size=".52rem" @click="pwdSwitch"/>
      <!-- <template slot="right-icon">
        <img style="width: 0.59rem; height: 0.59rem"
             :src="passwordType==='password'? '@/assets/img/ic_login_toggle_password_on.png' : '@/assets/img/ic_login_toggle_password_off.png'"
             alt=""
             @click="pwdSwitch">
      </template> -->
    </van-field>
    <van-button class="btn" type="primary" :disabled="btnIsDisable" color="#057AFF" @click="login">登录</van-button>

    <div class="layout-regist-forget">
      <p class="regist">注册</p>
      <div style="flex: 1"> </div>
      <p class="forget">忘记密码</p>
    </div>

    <!-- <div style="flex: 1"> </div> -->
    
    <div class="layout-wx-msg">
      <icon-text imgWidth="0.92" imgHeight="0.92" :imgSrc="require('@/assets/img/ic_wechat.png')"
                 text="微信登录" textSize="0.24" textcolor="#989cA9" marginTop="0.16"/>
      
      <div style="flex: 1"> </div>

      <icon-text imgWidth="0.92" imgHeight="0.92" :imgSrc="require('@/assets/img/ic_msg_code.png')"
                 text="验证码登录" textSize="0.24" textcolor="#989cA9" marginTop="0.16"/>
      
    </div>
  </div>
</template>

<script>
import TextUtil from "@/utils/TextUtil";
import IconText from "@/components/IconText";

export default {
  components: { IconText },
  data() {
      return {
        icPwdName: "closed-eye",
        passwordType: 'password',//输入框类型
        btnIsDisable: true,

        userInfo: {
          name: "",
          pwd: ""
        },

      }
  },
  methods: {

    pwdSwitch() {
      console.log("pwdSwitch: " + this.passwordType);
      
      if(this.passwordType === 'password') {
        this.icPwdName = "eye-o";
        this.passwordType = 'text';
      } else {
        this.icPwdName = "closed-eye";
        this.passwordType = 'password';
      }

    },
    nameInput(value) {
      console.log("nameInput: " + value);
      // this.userInfo.name;
      
      this.userInfoIsEmpty();
    },
    pwdInput(value) {
      console.log("pwdInput: " + value);

      this.userInfoIsEmpty();
    },

    userInfoIsEmpty() {
      if(TextUtil.isEmpty(this.userInfo.name) || TextUtil.isEmpty(this.userInfo.pwd)) {
        this.btnIsDisable = true;
      } else {
        this.btnIsDisable = false;
      }
      
    },

    login() {
      this.$router.push({path: '/main'});
    }
  }
}
</script>

<style lang="scss">
.page {
  padding-left: #{(20/50)}rem;
  padding-right: #{(20/50)}rem;
  display: flex;
  flex-direction: column;
  .goBack {
    width: #{(20/50)}rem;
    height: #{(20/50)}rem;
    margin-top: #{(20/50)}rem;
    margin-bottom: #{(12/50)}rem;
  }
  .text-black {
    font-size: #{(24/50)}rem;
    display: block;
    margin-top: #{(14/50)}rem;
  }
  .edit {
    font-size: #{(16/50)}rem;
    margin-top: #{(44/50)}rem;
    padding-left: 0px;
    padding-bottom: #{(10/50)}rem;
    border-bottom: #{(0.5/50)}rem solid #CED4DA;
  }
  .btn {
    font-size: #{(18/50)}rem;
    margin-top: #{(36/50)}rem;
    width: 100%;
    border-radius: #{(2/50)}rem;
  }
  .layout-regist-forget {
    display: flex;
    flex-direction: row;
    .regist {
      font-size: #{(16/50)}rem;
      color: #057AFF;
    }
    .forget {
      font-size: #{(16/50)}rem;
      color: #9A9FA9;
    }
  }
  .layout-wx-msg {
    display: flex;
    flex-direction: row;
    width: #{(200/50)}rem;
    margin: auto;
    margin-top: #{(120/50)}rem;
    .layout-text-icon {
      display: flex;
      flex-direction: column;
    }
  }

}

</style>