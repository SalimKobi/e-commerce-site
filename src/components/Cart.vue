<template>
  <!-- advertisement section -->
  <section class="bg-[#F6F5FF]">
    <div class="container mx-auto">
      <div class="pl-6">
        <p class="text-[36px] pt-[96px] pb-[9px]">Shopping Cart</p>
        <ul class="flex space-x-2 pb-[126px]">
          <li>Home</li>
          <li>Pages</li>
          <li class="text-[#FB2E86]">Shopping cart</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div class="flex container mx-auto pt-[131px]">
      <CartProductTable />
      <div class="mx-auto">
        <CartTotal />
        <CartCalculate />
      </div>
    </div>
  </section>

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
import CartProductTable from "./CartProductTable.vue";
import CartTotal from "./CartTotal.vue";
import CartCalculate from "./CartCalculate.vue";

export default {
  components: {
    CartProductTable,
    CartTotal,
    CartCalculate,
  },
};
</script>
