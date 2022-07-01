<template>
  <nav>
    <ul class="ml-32 hidden h-full w-fit items-center space-x-10 font-secondary text-3xl text-white lg:flex">
      <li class="relative transition-all">
        <button class="flex items-center false">Thể loại
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" aria-hidden="true" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div></div>
      </li>
      <li class="relative transition-all">
        <button class="flex items-center false">Truyện tranh<!-- -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" aria-hidden="true" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div></div>
      </li>
      <li class="transition-all hover:text-primary "><a href="/browse?view=newComic">Mới cập nhật</a></li>
      <li class="transition-all hover:text-primary "><a href="/browse?view=all">Bảng xếp hạng</a></li>
    </ul>
  </nav>
</template>