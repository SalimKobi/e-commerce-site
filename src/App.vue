<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<template>
  <nav class="">
    <div class="bg-[#7E33E0] text-white flex justify-end py-[14px]">
      <div class="container mx-auto flex justify-between px-6">
        <div class="hidden md:flex">
          <div class="flex items-center">
            <div class="">
              <img
                class="mr-[10px] w-auto"
                src="./assets/img/uil_envelope-alt.svg"
                alt=""
              />
            </div>
            <div class="">mhhasanul@gmail.com</div>
          </div>
          <div class="flex items-center md:ml-[48px]">
            <div><img src="./assets/img/bx_bx-phone-call.svg" alt="" /></div>
            <div class="md:ml-[12px]">(12345)67890</div>
          </div>
        </div>
        <div class="relative">
          <ul class="flex justify-evenly items-center">
            <li class="hidden sm:flex">
              English<img
                class="w-[13px] sm:w-auto sm:pl-[3px]"
                src="./assets/img/akar-icons_chevron-down.svg"
                alt=""
              />
            </li>
            <li class="hidden sm:flex sm:pl-[31px]">
              USD<img
                class="sm:pl-[3px]"
                src="./assets/img/akar-icons_chevron-down.svg"
                alt=""
              />
            </li>
            <li class="flex sm:pl-[31px]">
              Login<img
                class="pl-[2px] sm:pl-[3px]"
                src="./assets/img/carbon_user.svg"
                alt=""
              />
            </li>
            <li class="hidden sm:flex sm:pl-[31px]">
              Wishlist<img
                class="sm:pl-[3px]"
                src="./assets/img/uil_heart-white.svg"
                alt=""
              />
            </li>
            <li class="ml-[10px] sm:pl-[31px]">
              <img
                class="sm:pl-[3px] w-[30px]"
                src="./assets/img/fluent_cart-24-white.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between bg-white">
        <div class="flex flex-wrap items-center">
          <img
            class="mr-[88px] py-[22px]"
            src="./assets/img/Hekto.png"
            alt=""
          />
          <div class="mt-[9px] hidden lg:block">
            <ul class="flex space-x-[21px] text-[16px]">
              <li class="flex text-[#FB2E86]">
                Home<img
                  class=""
                  src="./assets/img/akar-icons_chevron-down1.svg"
                  alt=""
                />
              </li>
              <li>Pages</li>
              <li>Products</li>
              <li>Blog</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div class="hidden md:flex">
          <input class="border-3xl w-[auto] border focus:ring-1" type="text" />
          <button class="bg-[#FB2E86] py-[8px] px-[13px]">
            <img class="w-[19px]" src="./assets/img/uil_search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- advertisement section -->
  <section class="bg-[#F6F5FF]">
    <div class="container mx-auto">
      <div class="pl-6">
        <p class="text-[36px] pt-[96px] pb-[9px]">Product Details</p>
        <ul class="flex space-x-2 pb-[126px]">
          <li>Home</li>
          <li>Pages</li>
          <li class="text-[#FB2E86]">Shop Left Sidebar</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- products site info -->
  <section>
    <div class="flex">
      <div><img src="./assets/img/Rectangle 32.png" alt=""></div>
      <div>
        <p>Dictum morbi</p>
        <div class="flex space-x-[5px]">
          <div class="flex items-center">
          <img src="./assets/img/fille_star.svg" alt="">
          <img src="./assets/img/fille_star.svg" alt="">
          <img src="./assets/img/fille_star.svg" alt="">
          <img src="./assets/img/fille_star.svg" alt="">
          <img src="./assets/img/fille_star.svg" alt="">
          </div>
          <div>
            <p>(22)</p>
          </div>
        </div>
        <div class="flex space-x-[18px]">
          <p class="text-[]">$32.00</p>
          <p class=" line-through text-[##FB2E86] ">$32.00</p>
        </div>
        <div>
          <p>color</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta natus sint sunt! Accusamus, velit.</p>
        </div>
        <div class="flex ">
          <button>Add to cart</button>
          <img src="./assets/img/uil_heart-alt.svg" alt="">
        </div>
      </div>
    </div>
  </section>

  <!-- products info -->
  <section>

  </section>
  
  <footer class="mt-[50px] sm:mt-[115px] bg-[#EEEFFB] text-[#8A8FB9]">
    <!-- <div class="sm:flex justify-around container mx-auto pt-[94px] px-[100px] pb-[100px]"> -->
    <div
      class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:max-w-[70vw] py-[94px] px-[30px] sm:px-[0px] container mx-auto"
    >
      <div>
        <div class="mb-[31px]"><img src="./assets/img/Hekto.png" alt="" /></div>
        <div class="hidden md:flex">
          <input
            class="border-3xl w-[auto] p-2 border focus:ring-1 rounded"
            type="text"
            placeholder="Enter Email Address"
          />
          <button class="bg-[#FB2E86] py-[8px] px-[13px] text-white rounded">
            Sign up
          </button>
        </div>
        <p class="mt-[25px]">Contact Info</p>
        <p class="mt-[10px]">
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>
      <div>
        <ul class="space-y-[21px]">
          <h2 class="font-bold text-[18px] sm:text-[22px] text-black">
            Catagories
          </h2>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <ul class="space-y-[21px]">
          <h2 class="font-bold text-[18px] sm:text-[22px] text-black">
            Customer Care
          </h2>
          <li>My Account</li>
          <li>Discount</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div>
        <ul class="space-y-[21px]">
          <h2 class="font-bold text-[18px] sm:text-[22px] text-black">Pages</h2>
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </div>
    <div class="bg-[#E7E4F8] py-[17px]">
      <div
        class="flex sm:justify-around container px-[30px] justify-between mx-auto"
      >
        <div>©Webecy - All Rights Reserved</div>
        <div class="flex space-x-2">
          <img src="./assets/img/Group 202.svg" alt="" />
          <img src="./assets/img/Group 203.svg" alt="" />
          <img src="./assets/img/Group 204.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;x
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
