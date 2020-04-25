<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <btaj-icon class="mr-5" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >Exchange</router-link
          >
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-left lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import BtajIcon from "@/components/BtajIcon";

export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  name: "BtajHeader",
  components: {
    BtajIcon
  }
};
</script>
