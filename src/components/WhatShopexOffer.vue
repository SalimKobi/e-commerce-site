<template>
  <section class="px-[30px]">
    <p class="text-center text-[20px] sm:text-[42px] py-[55px]">
      What Shopex Offer!
    </p>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-10
        container
        mx-auto
        px-[30px]
      "
    >
      <WhatWeOfferCards />
      <WhatWeOfferCards />
      <WhatWeOfferCards />
      <WhatWeOfferCards />

      <!-- <div
        class="
          shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
          sm:px-[12px]
          px-[50px]
          py-[20px]
        "
      >
        <img
          class="mt-[27px] mx-auto mb-[22px]"
          src="../assets/img/cashback 1.png"
          alt=""
        />
        <p class="mb-[20px] text-center font-bold">24/7 support</p>
        <p class="text-[12px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto minus
          facilis magni autem?
        </p>
      </div>
      <div
        class="
          shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
          sm:px-[12px]
          px-[50px]
          py-[20px]
        "
      >
        <img
          class="mt-[27px] mx-auto mb-[22px]"
          src="../assets/img/premium-quality 1.png"
          alt=""
        />
        <p class="mb-[20px] text-center font-bold">24/7 support</p>
        <p class="text-[12px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto minus
          facilis magni autem?
        </p>
      </div>
      <div
        class="
          shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
          sm:px-[12px]
          px-[50px]
          py-[20px]
        "
      >
        <img
          class="mt-[27px] mx-auto mb-[22px]"
          src="../assets/img/24-hours-support 1.png"
          alt=""
        />
        <p class="mb-[20px] text-center font-bold">24/7 support</p>
        <p class="text-[12px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto minus
          facilis magni autem?
        </p>
      </div> -->
    </div>
  </section>
</template>

<script>
import WhatWeOfferCards from "./WhatWeOfferCards.vue";

export default {
  components: {
    WhatWeOfferCards,
  },
};
</script>
