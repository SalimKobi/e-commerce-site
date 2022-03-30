<template>
  <section class="">
    <div class="px-[30px] sm:container sm:mx-auto">
      <div
        class="
          text-center text-[20px]
          sm:text-[42px]
          text-[#1A0B5B]
          sm:pt-[60px] sm:pb-[42px]
          pt-[30px]
          pb-[10px]
        "
      >
        Featured Products
      </div>
      <div class="container mx-auto my-10">
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            md:max-w-[70vw]
            mx-auto
          "
        >
          <FeaturedProductsCard />
          <FeaturedProductsCard />
          <FeaturedProductsCard />
          <FeaturedProductsCard />
        </div>
      </div>
      <div class="flex justify-center space-x-[7px] pb-[71px]">
        <img src="../assets/img/Rectangle_104.svg" alt="" />
        <img src="../assets/img/Rectangle_105.svg" alt="" />
        <img src="../assets/img/Rectangle_105.svg" alt="" />
        <img src="../assets/img/Rectangle_105.svg" alt="" />
      </div>
    </div>
  </section>


<!-- cards on hover -->
  <!-- <div
    class="
      shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
      basis-1
      md:basis-1/2
      lg:basis-1/4
    "
  >
    <div class="bg-[#F6F7FB]">
      <img
        class="h-[240px] w-full object-scale-down object-center"
        src="../assets/img/image_3.png"
        alt=""
      />
      <ul class="flex items-center absolute -mt-[14rem] ml-[11px]">
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
      <button
        class="
          absolute
          text-white
          rounded
          bg-[#08D15F]
          -mt-[45px]
          py-[8px]
          px-[13px]
          text-[12px]
          ml-[7rem]
          sm:ml-[70px]
        "
      >
        View Details
      </button>
    </div>
    <div class="text-center bg-[#2F1AC4] text-white">
      <div class="pt-[12px]">Cantilever chair</div>
      <div class="flex justify-center space-x-[4px] mt-[12px]">
        <img src="../assets/img/Rectangle 93.svg" alt="" />
        <img src="../assets/img/Rectangle 94.svg" alt="" />
        <img src="../assets/img/Rectangle_95a.svg" alt="" />
      </div>
      <div class="mt-[12px]">Code - Y523201</div>
      <div class="mt-[12px] pb-[30px]">$42.00</div>
    </div>
  </div> -->
</template>


<script>
import FeaturedProductsCard from "./FeaturedProductsCard.vue";

export default {
  components: {
    FeaturedProductsCard,
  },
};
</script>
