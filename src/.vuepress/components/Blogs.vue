<template>
  <div class="row gx-4 gx-lg-5 justify-content-center">
    <div
      v-for="(page, index) in getPosts()"
      :key="index"
      class="col-md-10 col-lg-8 col-xl-7"
    >
      <div class="post-preview">
        <router-link :to="page.path">
          <h2 class="post-title">
            {{ page.title }}
          </h2>
        </router-link>

        <p class="post-meta">
          {{ dayjs(page.frontmatter.created).format("YYYY MMMM DD") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {};
  },
  methods: {
    dayjs,
    getPosts() {
      return this.$site.pages.filter((p) => p.path !== "/");
    },
  },
};
</script>

<style>
</style>