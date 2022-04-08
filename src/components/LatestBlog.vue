<template>
  <section class="py-5">
    <div class="">
      <div class="mb-[30px] sm:mb-[80px]">
        <p class="text-center text-[28px] sm:text-[42px]">Latest Blog</p>
      </div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          container
          mx-auto
          sm:px-[50px]
        "
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from "./BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
};
</script>
