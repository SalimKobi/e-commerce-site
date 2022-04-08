<template>
  <footer class="mt-[115px] bg-[#EEEFFB] text-[#8A8FB9]">
    <!-- <div class="sm:flex justify-around container mx-auto pt-[94px] px-[100px] pb-[100px]"> -->
    <div
      class="
        grid grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
        gap-10
        2xl:max-w-[50vw]
        md:max-w-[85vw]
        py-[94px]
        sm:px-[0px]
        contianer
        mx-auto
      "
    >
      <div>
        <div class="mb-[31px]">
          <img src="../assets/img/Hekto.png" alt="" />
        </div>
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
        class="
          flex
          sm:justify-around
          container
          px-[30px]
          justify-between
          mx-auto
        "
      >
        <div>©Webecy - All Rights Reserved</div>
        <div class="flex space-x-2">
          <img src="../assets/img/Group 202.svg" alt="" />
          <img src="../assets/img/Group 203.svg" alt="" />
          <img src="../assets/img/Group 204.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>