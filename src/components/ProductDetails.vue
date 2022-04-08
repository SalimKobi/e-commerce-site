<template>
  <!-- advertisement section -->
  <section class="bg-[#F6F5FF]">
    <div class="container mx-auto">
      <div class="pl-6">
        <p class="text-[36px] pt-[96px] pb-[9px]">Product Details</p>
        <ul class="flex space-x-2 pb-[126px]">
          <li>Home</li>
          <li>Pages</li>
          <li class="text-[#FB2E86]">Product details</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- products site info -->
  <ProducDetailsCard />

  <!-- products info -->
  <ProductMoreDetails />

  <!-- Related Products -->
  <RelatedProducts />

  <section class="mt-[50px] sm:pt-[70px]">
    <div class="flex justify-center container mx-auto">
      <img class="text-center" src="../assets/img/image 1174.png" alt="" />
    </div>
  </section>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;x
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
<script>
import RelatedProducts from "./RelatedProducts.vue";
import ProductMoreDetails from "./ProductMoreDetails.vue";
import ProducDetailsCard from "./ProducDetailsCard.vue";

export default {
  components: {
    RelatedProducts,
    ProductMoreDetails,
    ProducDetailsCard,
  },
};
</script>