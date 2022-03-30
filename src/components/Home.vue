<template>
  <HeroSection />
  <FeaturedProducts />
  <LatestProducts />
  <WhatWeOffer />
  <LatestTrendingProduct />
  <DiscountItem />
  <LatestBlog />
</template>

<script>
import HeroSection from "./HeroSection.vue";
import FeaturedProducts from "./FeaturedProducts.vue";
import LatestProducts from "./LatestProducts.vue";
import WhatWeOffer from "./WhatShopexOffer.vue";
import LatestTrendingProduct from "./LatestTrendingProduct.vue";
import DiscountItem from "./DiscountItem.vue";
import LatestBlog from "./LatestBlog.vue";

export default {
  components: {
    HeroSection: HeroSection,
    FeaturedProducts: FeaturedProducts,
    LatestProducts: LatestProducts,
    WhatWeOffer: WhatWeOffer,
    LatestTrendingProduct: LatestTrendingProduct,
    DiscountItem: DiscountItem,
    LatestBlog: LatestBlog,
  },
  // ...
};

// import NavBar from "./components/Nav.vue";

// import { defineComponent } from "@vue/composition-api";
</script>