<template>
  <div class="mx-auto">
    <p class="text-[20px] text-center text-[#1D3178] pb-[42px]">Cart Totals</p>
    <div class="bg-[#F4F4FC] px-[24px] py-[34px]">
      <div class="divide-y">
        <div class="flex pt-[34px] pb-[11px] space-x-[178px] text-[18px]">
          <p>Subtotals:</p>
          <p>$200.00</p>
        </div>
        <div class="flex pt-[34px] pb-[11px] space-x-[202px] text-[18px]">
          <p>Totals:</p>
          <p>$323.00</p>
        </div>
        <div class="flex space-x-[7px] pt-[27px] pb-[20px]">
          <img src="../assets/img/uil_check.svg" alt="" />
          <p class="text-[12px]">Shipping & taxes calculated at checkout</p>
        </div>
      </div>
      <div class="pt-[35px]">
        <button class="bg-[#19D16F] py-[11px] px-[90px] rounded text-white">
          Proceed To Checkout
        </button>
      </div>
    </div>
  </div>
</template>