<template>
  <section class="py-5 mx-auto">
    <div class="">
      <div class="mb-[30px] sm:mb-[80px]">
        <p class="text-center text-[28px] sm:text-[42px]">Latest Blog</p>
      </div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          md:max-w-[70vw]
          mx-auto
          px-[25px]
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
