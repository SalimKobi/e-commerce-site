<template>
  <section class="px-[30px]">
    <div class="px-[30px] container mx-auto">
      <p class="text-center text-[30px] sm:text-[42px]">Latest Products</p>
      <ul
        class="
          flex flex-wrap
          justify-center
          mt-[19px]
          space-x-[13px]
          sm:space-x-[58px]
          text-[#151875]
          mb-[58px]
        "
      >
        <li class="text-[#FB2E86] underline underline-offset-4">New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li class="hidden sm:block">Special offer</li>
      </ul>
    </div>
    <!-- first product -->
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-10
        md:max-w-[70vw]
        mx-auto
      "
    >
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
      <LatestProductCard />
    </div>
  </section>

  <!-- special items on sale look like this  -->
  <!-- <div>
        <div class="flex">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="../assets/img/image 15.png"
            alt=""
          />
          <li class="absolute list-none">
            <img src="../assets/img/Group 27.svg" alt="" />
          </li>
          <ul class="flex-cols absolute mt-[12rem] pl-[20px] items-center">
            <li>
              <img src="../assets/img/fluent_cart-24-regular.svg" alt="" />
            </li>
            <li class="ml-[10px]">
              <img src="../assets/img/uil_heart-alt.svg" alt="" />
            </li>
            <li class="ml-[16px]">
              <img src="../assets/img/uil_search-plus.svg" alt="" />
            </li>
          </ul>
        </div>
        <div class="text-[#151875]">
          <ul class="flex justify-between">
            <li class="text-[16px]">Comfort Handy Craft</li>
            <li>
              <ul class="flex space-x-[5px] items-center">
                <li class="text-[14px]">$42.00</li>
                <li class="text-[12px] text-[#FB2448] line-through">$65.00</li>
              </ul>
            </li>
          </ul>
        </div>
      </div> -->
</template>

<script>
import LatestProductCard from "./LatestProductCard.vue";

export default {
  components: {
    LatestProductCard,
  },
};
</script>
