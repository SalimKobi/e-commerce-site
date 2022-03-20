<script>
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
              <ul class="flex items-center absolute -mt-[14rem] ml-[11px]">
                <li>
                  <img src="./assets/img/fluent_cart-24-regular.svg" alt="" />
                </li>
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

  <!-- Latest products section  -->
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
    <div></div>
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
      <div>
        <div class="flex bg-gray-100">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image 1166.png"
            alt=""
          />
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
      </div>
      <!-- second product -->
      <div>
        <div class="flex">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image 15.png"
            alt=""
          />
          <li class="absolute list-none">
            <img src="./assets/img/Group 27.svg" alt="" />
          </li>
          <ul class="flex-cols absolute mt-[12rem] pl-[20px] items-center">
            <li>
              <img src="./assets/img/fluent_cart-24-regular.svg" alt="" />
            </li>
            <li class="ml-[10px]">
              <img src="./assets/img/uil_heart-alt.svg" alt="" />
            </li>
            <li class="ml-[16px]">
              <img src="./assets/img/uil_search-plus.svg" alt="" />
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
      </div>
      <!-- third product  -->
      <div>
        <div class="flex bg-gray-100">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image 1168.png"
            alt=""
          />
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
      </div>
      <!-- fourth product -->
      <div>
        <div class="flex bg-gray-100">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image 23.png"
            alt=""
          />
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
      </div>
      <!-- fifth product  -->
      <div>
        <div class="flex bg-gray-100">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image_32a.png"
            alt=""
          />
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
      </div>
      <!-- sixth product -->
      <div>
        <div class="flex bg-gray-100">
          <img
            class="h-[19rem] w-full object-scale-down object-center"
            src="./assets/img/image 3.png"
            alt=""
          />
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
      </div>
    </div>
  </section>
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
        md:max-w-[70vw]
        mx-auto
      "
    >
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
          src="./assets/img/free-delivery 1.png"
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
          src="./assets/img/cashback 1.png"
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
          src="./assets/img/premium-quality 1.png"
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
          src="./assets/img/24-hours-support 1.png"
          alt=""
        />
        <p class="mb-[20px] text-center font-bold">24/7 support</p>
        <p class="text-[12px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto minus
          facilis magni autem?
        </p>
      </div>
    </div>
  </section>

  <!-- latest trending products -->
  <section class="mt-20 bg-[#F1F0FF]">
    <div class="container sm:flex sm:justify-center mx-auto px-[30px] py-[35px]">
      <div class=""><img src="./assets/img/Group 153.png" alt="" /></div>
      <div class="">
        <p class="text-[25px] sm:mt-[82px] text-[#151875]">
          Unique Features Of leatest & Trending Poducts
        </p>
        <div class="flex pt-[29px] pb-[13px] space-x-3">
          <img src="./assets/img/Ellipse 65.svg" alt="" />
          <p>All frames constructed with hardwood solids and laminates</p>
        </div>
        <div class="flex pb-[13px] space-x-3">
          <img src="./assets/img/Ellipse 66.svg" alt="" />
          <p>
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </div>
        <div class="flex mb-[38px] space-x-3">
          <img src="./assets/img/Ellipse 67.svg" alt="" />
          <p>Arms, backs and seats are structurally reinforced</p>
        </div>
        <div class="flex items-center space-x-[19px]">
          <button class="bg-[#FB2E86] text-white py-[14px] px-[24px]">
            Add to Cart
          </button>
          <div class="text-[#151875] text-[14px]">
            <p>B&B Italian Sofa</p>
            <p>$32.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Discount section -->
  <section class="mt-20">
    <div class="justify-center">
      <div class="text-center text-[28px] sm:text-[42px]">Discount Item</div>
      <ul class="flex justify-center space-x-[30px] sm:pt-[0px] pt-[10px]">
        <li class="text-[#FB2E86] underline underline-offset-2">Wood Chair</li>
        <li>Plastic Chair</li>
        <li>Sofa Collection</li>
      </ul>
    </div>
    <div class="container sm:flex mx-auto sm:px-[100px]">
      <div class="">
        <div class="sm:flex sm:justify-center items-center container mx-auto">
          <div class="px-[30px] pt-[20px] sm:px-[0px]">
            <p class="text-[25px] text-[#151875]">
              20% Discount of All Products
            </p>
            <p class="text-[#FB2E86]">Eams Sofa Compact</p>
            <p class="text-[#B7BACB] mt-[28px] mb-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, saepe animi! Optio provident ad id.
            </p>
            <div class="text-[#B7BACB]">
              <div class="sm:flex flex-wrap">
                <div class="sm:flex sm:space-x-4 mb-[10px]">
                  <div class="flex items-center space-x-[5px]">
                    <div><img src="./assets/img/Vector.svg" alt="" /></div>
                    <div>Material expose like metals</div>
                  </div>
                  <div class="flex items-center space-x-[5px]">
                    <div><img src="./assets/img/Vector.svg" alt="" /></div>
                    <div>Material expose like metals</div>
                  </div>
                </div>
                <div class="sm:flex sm:space-x-4 mb-[10px]">
                  <div class="flex items-center space-x-[5px]">
                    <div><img src="./assets/img/Vector.svg" alt="" /></div>
                    <div>Material expose like metals</div>
                  </div>
                  <div class="flex items-center space-x-[5px]">
                    <div><img src="./assets/img/Vector.svg" alt="" /></div>
                    <div>Material expose like metals</div>
                  </div>
                </div>
              </div>
              <button
                class="bg-[#FB2E86] text-white py-[14px] px-[24px] mt-[37px] mx-auto flex justify-center sm:block sm:mx-0"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div class="">
            <img src="./assets/img/Group 154.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- latest blog  -->
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
        <div
          class="
            shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
            basis-1
            md:basis-1/2
            lg:basis-1/4
            rounded-xl
          "
        >
          <img src="./assets/img/Frame 3.png" alt="" />
          <div class="text-[14px] p-5">
            <div class="flex justify-between pb-[31px]">
              <div class="flex space-x-1">
                <img class="" src="./assets/img/Vector_pen.svg" alt="" />
                <p class="text-[#151875]">Saber Ali</p>
              </div>
              <div class="flex space-x-2">
                <img class="" src="./assets/img/uil_calendar-alt.svg" alt="" />
                <p class="text-[#151875]">21 August,2020</p>
              </div>
            </div>
            <p class="pb-[17px] text-[#151875] text-[18px]">
              Top essential trends in 2021
            </p>
            <p class="pb-[14px] text-[#72718F] text-[16px]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a class="underline underline-offset-2 text-[#151875]" href=""
              >Read More</a
            >
          </div>
        </div>
        <div
          class="
            shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
            basis-1
            md:basis-1/2
            lg:basis-1/4
            rounded-xl
          "
        >
          <img src="./assets/img/Frame 4.png" alt="" />
          <div class="text-[14px] p-5">
            <div class="flex justify-between pb-[31px]">
              <div class="flex space-x-1">
                <img class="" src="./assets/img/Vector_pen.svg" alt="" />
                <p class="text-[#151875]">Saber Ali</p>
              </div>
              <div class="flex space-x-2">
                <img class="" src="./assets/img/uil_calendar-alt.svg" alt="" />
                <p class="text-[#151875]">21 August,2020</p>
              </div>
            </div>
            <p class="pb-[17px] text-[#151875] text-[18px]">
              Top essential trends in 2021
            </p>
            <p class="pb-[14px] text-[#72718F] text-[16px]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a class="underline underline-offset-2 text-[#151875]" href=""
              >Read More</a
            >
          </div>
        </div>
        <div
          class="
            shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
            basis-1
            md:basis-1/2
            lg:basis-1/4
            rounded-xl
          "
        >
          <img src="./assets/img/Frame.png" alt="" />
          <div class="text-[14px] p-5">
            <div class="flex justify-between pb-[31px]">
              <div class="flex space-x-1">
                <img class="" src="./assets/img/Vector_pen.svg" alt="" />
                <p class="text-[#151875]">Saber Ali</p>
              </div>
              <div class="flex space-x-2">
                <img class="" src="./assets/img/uil_calendar-alt.svg" alt="" />
                <p class="text-[#151875]">21 August,2020</p>
              </div>
            </div>
            <p class="pb-[17px] text-[#151875] text-[18px]">
              Top essential trends in 2021
            </p>
            <p class="pb-[14px] text-[#72718F] text-[16px]">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>
            <a class="underline underline-offset-2 text-[#151875]" href=""
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="mt-[115px] bg-[#EEEFFB] text-[#8A8FB9]">
    <!-- <div class="sm:flex justify-around container mx-auto pt-[94px] px-[100px] pb-[100px]"> -->
    <div class=" grid grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          md:max-w-[70vw]
          mx-auto py-[94px]
          px-[30px] sm:px-[0px]">
      <div>
        <div class="mb-[31px]"><img src="./assets/img/Hekto.png" alt=""></div>
        <div class="hidden md:flex">
          <input class="border-3xl w-[auto] p-2 border focus:ring-1 rounded" type="text" placeholder="Enter Email Address" />
          <button class="bg-[#FB2E86] py-[8px] px-[13px] text-white rounded">
            Sign up
          </button>
        </div>
        <p class="mt-[25px]">Contact Info</p>
        <p class="mt-[10px]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
      <div>
        <ul class="space-y-[21px]">
          <h2 class="font-bold text-[18px] sm:text-[22px] text-black">Catagories</h2>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div>
        <ul class="space-y-[21px]">
          <h2 class="font-bold text-[18px] sm:text-[22px] text-black">Customer Care</h2>
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
      <div class="flex sm:justify-around container px-[30px] justify-between mx-auto">
      <div>©Webecy - All Rights Reserved</div>
      <div class="flex space-x-2">
        <img src="./assets/img/Group 202.svg" alt="">
        <img src="./assets/img/Group 203.svg" alt="">
        <img src="./assets/img/Group 204.svg" alt="">
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
