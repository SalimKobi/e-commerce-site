<template>
  <nav class="">
    <div class="bg-[#7E33E0] text-white flex justify-end py-[14px]">
      <div class="container mx-auto flex justify-between px-6">
        <div class="hidden md:flex">
          <div class="flex items-center">
            <div class="">
              <img
                class="mr-[10px] w-auto"
                src="../assets/img/uil_envelope-alt.svg"
                alt=""
              />
            </div>
            <div class="">mhhasanul@gmail.com</div>
          </div>
          <div class="flex items-center md:ml-[48px]">
            <div><img src="../assets/img/bx_bx-phone-call.svg" alt="" /></div>
            <div class="md:ml-[12px]">(12345)67890</div>
          </div>
        </div>
        <div class="relative">
          <ul class="flex justify-evenly items-center">
            <li class="hidden sm:flex">
              English<img
                class="w-[13px] sm:w-auto sm:pl-[3px]"
                src="../assets/img/akar-icons_chevron-down.svg"
                alt=""
              />
            </li>
            <li class="hidden sm:flex sm:pl-[31px]">
              USD<img
                class="sm:pl-[3px]"
                src="../assets/img/akar-icons_chevron-down.svg"
                alt=""
              />
            </li>
            <li class="flex sm:pl-[31px]">
              Login<img
                class="pl-[2px] sm:pl-[3px]"
                src="../assets/img/carbon_user.svg"
                alt=""
              />
            </li>
            <li class="hidden sm:flex sm:pl-[31px]">
              Wishlist<img
                class="sm:pl-[3px]"
                src="../assets/img/uil_heart-white.svg"
                alt=""
              />
            </li>
            <li class="ml-[10px] sm:pl-[31px]">
              <img
                class="sm:pl-[3px] w-[30px]"
                src="../assets/img/fluent_cart-24-white.svg"
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
            src="../assets/img/Hekto.png"
            alt=""
          />
          <div class="mt-[9px] hidden lg:block">
            <ul class="flex space-x-[21px] text-[16px]">
              <li class="flex text-[#FB2E86]">
                Home<img
                  class=""
                  src="../assets/img/akar-icons_chevron-down1.svg"
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
            <img class="w-[19px]" src="../assets/img/uil_search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

