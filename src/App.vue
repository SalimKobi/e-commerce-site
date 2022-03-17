<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import body from "./components/body.vue";
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
          <ul class="flex justify-evenly">
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
                src="./assets/img/uil_heart-alt.svg"
                alt=""
              />
            </li>
            <li class="ml-[10px] sm:pl-[31px]">
              <img
                class="sm:pl-[3px]"
                src="./assets/img/fluent_cart-24-regular.svg"
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
  <section class="bg-[#F2F0FF]">
    <div class="px-[20px] sm:container sm:mx-auto">
      <div class="sm:flex sm:justify-around">
        <div class="hidden sm:block">
          <img class="" src="./assets/img/image_32.png" alt="" />
          <div>
            <img
              class="hidden sm:block sm:ml-[5rem] sm:mt-[146px]"
              src="./assets/img/Ellipse 62.svg"
              alt=""
            />
          </div>
        </div>
        <div class="pt-[30px] sm:mt-[170px]">
          <p class="text-[16px] text-[#FB2E86]">
            Best furniture for your castle
          </p>
          <p class="text-[25px] mt-3px sm:text-[53px] sm:mt-[12px]">
            New Furniture Collection Trend in 2022
          </p>
          <p class="text-[#8A8FB9]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quos
            illum animi.
          </p>
          <button
            class="
              bg-[#FB2E86]
              text-white
              px-[10px]
              mt-[15px]
              py-[6px]
              sm:py-[17px] sm:px-[40px] sm:mt-[27px]
            "
          >
            Shop Now
          </button>
        </div>
        <div class="py-[15px]">
          <img src="./assets/img/sofa promotional header.svg" alt="" />
        </div>
      </div>
      <div class="flex justify-center space-x-[5px] pb-[53.47px]">
        <div><img src="./assets/img/Rectangle 96.svg" alt="" /></div>
        <div><img src="./assets/img/Rectangle 97.svg" alt="" /></div>
        <div><img src="./assets/img/Rectangle 97.svg" alt="" /></div>
      </div>
    </div>
  </section>
  <section class="">
    <div class="px-[30px] sm:continer sm:mx-auto">
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
          <div
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
                src="./assets/img/image_1.png"
                alt=""
              />
            </div>
            <div class="text-center">
              <div class="mt-[12px] text-[#FB2E86]">Cantilever chair</div>
              <div class="flex justify-center space-x-[4px] mt-[12px]">
                <img src="./assets/img/Rectangle 93.svg" alt="" />
                <img src="./assets/img/Rectangle 94.svg" alt="" />
                <img src="./assets/img/Rectangle 95.svg" alt="" />
              </div>
              <div class="mt-[12px]">Code - Y523201</div>
              <div class="mt-[12px] pb-[30px]">$42.00</div>
            </div>
          </div>
          <div
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
                src="./assets/img/image_3.png"
                alt=""
              />
              <ul class="flex items-center absolute -mt-[15rem]">
                <li><img src="./assets/img/Group 28.svg" alt="" /></li>
                <li class="ml-[10px]">
                  <img src="./assets/img/uil_heart-alt.svg" alt="" />
                </li>
                <li class="ml-[16px]">
                  <img src="./assets/img/uil_search-plus.svg" alt="" />
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
                  ml-[8rem]
                  sm:ml-[6rem]
                "
              >
                View Details
              </button>
            </div>
            <div class="text-center bg-[#2F1AC4] text-white">
              <div class="pt-[12px]">Cantilever chair</div>
              <div class="flex justify-center space-x-[4px] mt-[12px]">
                <img src="./assets/img/Rectangle 93.svg" alt="" />
                <img src="./assets/img/Rectangle 94.svg" alt="" />
                <img src="./assets/img/Rectangle_95a.svg" alt="" />
              </div>
              <div class="mt-[12px]">Code - Y523201</div>
              <div class="mt-[12px] pb-[30px]">$42.00</div>
            </div>
          </div>
          <div
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
                src="./assets/img/image_1169.png"
                alt=""
              />
            </div>
            <div class="text-center">
              <div class="pt-[12px] text-[#FB2E86]">Cantilever chair</div>
              <div class="flex justify-center space-x-[4px] mt-[12px]">
                <img src="./assets/img/Rectangle 93.svg" alt="" />
                <img src="./assets/img/Rectangle 94.svg" alt="" />
                <img src="./assets/img/Rectangle 95.svg" alt="" />
              </div>
              <div class="mt-[12px]">Code - Y523201</div>
              <div class="mt-[12px] pb-[30px]">$42.00</div>
            </div>
          </div>
          <div
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
                src="./assets/img/image_1168.png"
                alt=""
              />
            </div>
            <div class="text-center">
              <div class="pt-[12px] text-[#FB2E86]">Cantilever chair</div>
              <div class="flex justify-center space-x-[4px] mt-[12px]">
                <img src="./assets/img/Rectangle 93.svg" alt="" />
                <img src="./assets/img/Rectangle 94.svg" alt="" />
                <img src="./assets/img/Rectangle 95.svg" alt="" />
              </div>
              <div class="mt-[12px]">Code - Y523201</div>
              <div class="mt-[12px] pb-[30px]">$42.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-[7px] pb-[71px]">
        <img src="./assets/img/Rectangle_104.svg" alt="" />
        <img src="./assets/img/Rectangle_105.svg" alt="" />
        <img src="./assets/img/Rectangle_105.svg" alt="" />
        <img src="./assets/img/Rectangle_105.svg" alt="" />
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto">
      <p class="text-center text-[20px] sm:text-[42px]">Latest Products</p>
      <ul class="flex justify-center mt-[19px] space-x-[58px]">
        <li class="text-[#FB2E86] underline underline-offset-4">New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li>Special offer</li>
      </ul>
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
