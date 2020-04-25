<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <btaj-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import BtajAssetsTable from "@/components/BtajAssetsTable";
import api from "@/api";

export default {
  name: "Home",
  components: { BtajAssetsTable },
  data() {
    return {
      assets: [],
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;

    api.getAssets().then(assets => {
      this.assets = assets;
    }).finally(() => (this.isLoading = false));
  }
};
</script>
