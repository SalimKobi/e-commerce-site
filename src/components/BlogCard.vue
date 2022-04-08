<template>
  <div
    class="
      shadow-[0px_0px_25px_rgba(0,_0,_0,_0.1)]
      basis-1
      md:basis-1/2
      lg:basis-1/4
      rounded-xl
      w-[375px]
    "
  >
    <img class="w-full" src="../assets/img/Frame 3.png" alt="" />
    <div class="text-[14px] p-5">
      <div class="flex justify-between pb-[31px]">
        <div class="flex space-x-1">
          <img class="" src="../assets/img/Vector_pen.svg" alt="" />
          <p class="text-[#151875]">Saber Ali</p>
        </div>
        <div class="flex space-x-2">
          <img class="" src="../assets/img/uil_calendar-alt.svg" alt="" />
          <p class="text-[#151875]">21 August,2020</p>
        </div>
      </div>
      <!-- <p class="pb-[17px] text-[#151875] text-[18px]">
        Top essential trends in 2021
      </p> -->
      <p class="pb-[17px] text-[#151875] text-[18px]">
        {{ $store.state.products[0].image_url }}
      </p>
      <p class="pb-[14px] text-[#72718F] text-[16px]">
        More off this less hello samlande lied much over tightly circa horse
        taped mightly
      </p>
      <a class="underline underline-offset-2 text-[#151875]" href=""
        >Read More</a
      >
    </div>
  </div>
</template>