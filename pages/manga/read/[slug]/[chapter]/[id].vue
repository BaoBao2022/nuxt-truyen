<script lang="ts" setup>

const route = useRoute();
const {params} = route;

const {slug, chapter, id} = params;
const realSlug = slug.slice(0, slug.lastIndexOf('-'));

const url = `/api/chapters?slug=${realSlug}&chapter=${chapter}&id=${id}`
const {data: chapters} = await useFetch(url);

</script>

<template>
  <main class="overflow-x-hidden">
    <div class="flex h-fit min-h-screen flex-col bg-black">
      <section class="flex h-fit relative">
        <div class="relative flex h-fit flex-1 text-white">
          <div class="h-fit min-h-screen w-full bg-black">
            <LazyMangaChapterHeader :chapter="chapter" :title="chapters.data[0].title"/>
            <LazyMangaChapterImg :chapters="chapters.data"/>
            <div class="h-[200px] w-full overflow-hidden py-4">
              <div class="mx-auto flex h-full w-full flex-col space-y-4 md:w-1/2">
                <div class="flex h-full w-full gap-4 ">
                  <button data-id="prev"
                          class="absolute-center z-[700] h-full w-[20%] border-2 border-dashed border-white/40 px-2 text-white/40 transition-all hover:border-white hover:text-white md:gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" aria-hidden="true" class="inline h-8 w-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Chapter trước
                  </button>
                  <button data-id="next"
                          class="absolute-center h-full w-[80%] gap-2 border-2 border-dashed border-white/40 text-white/40 transition-all hover:border-white hover:text-white">
                    Chapter kế tiếp
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" aria-hidden="true" class="inline-block h-8 w-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
                <h1 class="py-4 px-2 text-center text-white/75">Mẹo: Bạn có thể double tap/click vào 2 cạnh của màn hình
                  để chuyển chap ở bất cứ vị trí nào ở chế độ dọc!</h1></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>