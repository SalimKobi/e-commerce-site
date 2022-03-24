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
        <p class="text-[36px] pt-[96px] pb-[9px]">Shop Left Sidebar</p>
        <ul class="flex space-x-2 pb-[126px]">
          <li>Home</li>
          <li>Pages</li>
          <li class="text-[#FB2E86]">Shop Left Sidebar</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Ecommerce Acceories & Fashion item  -->
  <section class="pt-[30px] sm:pt-[126px]">
    <div class="sm:flex sm:justify-between container mx-auto">
      <div class="">
        <p class="text-[#151875] sm:text-[22px] text-[19px] px-5">
          Ecommerce Accesories & Fashion item
        </p>
        <p class="text-[#8A8FB9] px-5 pb-2 sm:pb-[0]">About 9,620 results (0.62 seconds)</p>
      </div>
      <div class="sm:flex sm:space-x-[25px] items-center text-[#3F509E]">
        <div class="sm:flex hidden space-x-[8px]">
          <form action="">
            <label class="pr-[8px]">Per Page:</label>
            <input class="border w-[55px]" type="text" />
          </form>
        </div>
        <div class="flex px-5 sm:px-[0px]">
          <form action="" class="">
            <label for="" class="pr-[8px]">Sort by: </label>
            <select class="border text-[#E7E6EF] py-[2px] px-[4px] sm:py-[5px] sm:px-[11px]" id="" name="">
              <option value="volvo">Best match</option>
              <option value="saab">Lowest</option>
              <option value="fiat">Popularity</option>
              <option value="audi">Highest</option>
            </select>
          </form>
        </div>
        <div class="">
          <form action="" class="sm:flex hidden space-x-[4px]">
            <label>View:</label>
            <img class="" src="./assets/img/clarity_grid-view-solid.svg" alt="">
            <img class="pr-[20px]"  src="./assets/img/list-view.svg" alt="">
            <input class="border w-[162px]" type="text" />
          </form>
        </div>
      </div>
    </div>

    <!-- side bar and products   -->
    <div class="flex container mx-auto sm:space-x-[62px] mt-[100px] justify-between">
      <!-- side bar -->
      <div class="hidden sm:block text-[#7E81A2] space-y-[44px]">
        <div class="space-y-2">
          <p class="text-[20px] underline decoration-1 underline-offset-4 text-[#151875] pb-[11px]">Product Brand</p>
          <div class="">
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Coaster Furniture</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Fusion Dot High Fashion</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Unique Furnitture Restor</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Dream Furnitture Flipping</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Young Repurposed</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Green DIY furniture</label>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-[20px] text-[#151875] underline decoration-1 underline-offset-4 pb-[11px]">Discount Offer</p>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">20% Cashback</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">5% Cashback Offer</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">25% Discount Offer</label>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-[20px] text-[#151875] underline decoration-1 underline-offset-4 pb-[11px]">Rating Item</p>
          <div class="flex space-x-2 items-center">
            <input class="" type="checkbox">
           <div class="flex space-x-[3px] items-center">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
           </div>
           <p>(2341)</p>
          </div>
          <div class="flex space-x-2 items-center">
            <input class="" type="checkbox">
           <div class="flex space-x-[3px] items-center">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
           </div>
           <p>(1726)</p>
          </div>
          <div class="flex space-x-2 items-center">
            <input class="" type="checkbox">
           <div class="flex space-x-[3px] items-center">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
           </div>
           <p>(258)</p>
          </div>
          <div class="flex space-x-2 items-center">
            <input class="" type="checkbox">
           <div class="flex space-x-[3px] items-center">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/fille_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
             <img src="./assets/img/empty_star.svg" alt="">
           </div>
           <p>(25)</p>
          </div>
          
        </div>
        <div class="space-y-2 ">
          <p class="text-[20px] text-[#151875] underline decoration-1 underline-offset-4 pb-[11px]">Categories</p>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Prestashop</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Magento</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Bigcommerce</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">osCommerce</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">3dcart</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Bags</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Accessories</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Jewellery</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">Watches</label>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-[20px] text-[#151875] underline decoration-1 underline-offset-4 pb-[11px]">Price Filter</p>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">$0.00 - $150.00</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">$150.00 - $350</label>
          </div>
          <div>
            <input type="checkbox" id="" name="" value="" />
            <label class="pl-2" for="">$150.00 - $504.00</label>
          </div>
          <div>
            <input type="checkbox" class="text-[#FF3EB2] border-0 rounded-md focus:ring-0" id="" name="" value="" />
            <label class="pl-2" for="">$450.00 +</label>
          </div>
          <div>
            <div>
              <img class="absolute ml-40 mt-3 w-[16px]" src="./assets/img/uil_search-plus.svg" alt="">
               <input
                class="border-3xl w-[auto] p-2 border focus:ring-1 rounded height-[201px]"
                type="text"
                placeholder="$10.00 - $20000"
                />
            </div>
          </div>
        </div>
        <div class="space-y-2 text-[15px]">
          <p class="text-[20px] text-[#151875] underline decoration-1 underline-offset-4 pb-[11px]">Filter By Color</p>
          <div class="grid grid-cols-3 gap-x-2">
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 71.svg" alt="">
              <p>Blue</p>
            </div>
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 72.svg" alt="">
              <p>Orange</p>
            </div>
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 73.svg" alt="">
              <p>Brown</p>
            </div>
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 76.svg" alt="">
              <p>Green</p>
            </div>
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 75.svg" alt="">
              <p>Purple</p>
            </div>
            <div class="flex space-x-[2px]">
              <img src="./assets/img/Ellipse 74.svg" alt="">
              <p>Sky</p>
            </div>
          </div>
        </div>
        <!-- image by the side -->
      </div>
      <div class="px-[30px] -mt-[70px] sm:px-[0px] space-y-[40px] sm:space-y-[28px]">
        <div
        v-for="i in 10"
        :key="`product-${i}`"
          class="sm:flex space-x-[29px] shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)] basis-1 w-full"
        >
          <img
            class="object-scale-down pl-[18px] pt-[15px]"
            src="./assets/img/Rectangle 32.png"
            alt=""
          />
          <div class="py-[46px]">
            <div class="sm:flex sm:space-x-[67px]">
              <p class="text-[18px] text-[#111C85] pb-[13px]">Dictum morbi updatte</p>
              <div class="flex pb-[10px] space-x-1">
                <img class="w-3" src="./assets/img/Ellipse 24.svg" alt="" />
                <img class="w-3" src="./assets/img/Ellipse 25.svg" alt="" />
                <img class="w-3" src="./assets/img/Ellipse 26.svg" alt="" />
              </div>
            </div>
            <div class="flex space-x-2">
              <p>$26.00</p>
              <p class="text-[#FB2E86] line-through">$52.00</p>
              <div class="flex items-center">
                <img src="./assets/img/fille_star.svg" alt="" />
                <img src="./assets/img/fille_star.svg" alt="" />
                <img src="./assets/img/fille_star.svg" alt="" />
                <img src="./assets/img/fille_star.svg" alt="" />
                <img src="./assets/img/empty_star.svg" alt="" />
              </div>
            </div>
            <p class="text-[#9295AA] text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              blanditiis quae obcaecati cupiditate nostrum corporis dolores
              perferendis?
            </p>
            <div class="flex space-x-2 pt-[15px] items-center">
              <img
                class="w-[16px]"
                src="./assets/img/fluent_cart-24-regular.svg"
                alt=""
              />
              <img src="./assets/img/uil_heart-alt.svg" alt="" />
              <img src="./assets/img/uil_search-plus.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-[50px] sm:pt-[251px]">
    <div class="flex justify-center container mx-auto">
      <img class="text-center" src="./assets/img/image 1174.png" alt="">
    </div>
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
