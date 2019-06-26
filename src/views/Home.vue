<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <van-radio-group v-model="radio">
          <van-radio name="1">单选框 1</van-radio>
          <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
  </div>
</template>

<script>
// @ is an alias to /src
import { RadioGroup, Radio } from 'vant';
export default {
    name: 'home',
    components: {
        [RadioGroup.name]: RadioGroup,
        [Radio.name]: Radio
    },
    data() {
        return {
            radio: '1'
        }
    }
}
</script>
<style lang="less">
  .home{
      img{
          width: 100px;
      }
  }

</style>
