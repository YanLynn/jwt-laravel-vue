<template>
    <div>
        <userMenu></userMenu>
        <router-view></router-view>
        <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
            </select>
    </div>
</template>
<script>
import userMenu from "../menu/userMenu";

export default {
  data() {
    return {
      langs:['ja','en']
    };
  },
  components: {
    userMenu,
    
  },
  mounted() {}
};
</script>