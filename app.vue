<script setup>
import "swiper/css";
import 'swiper/css/effect-fade';

const config = useRuntimeConfig();
const publicConfig = config.public;
</script>

<template>
  <Head>
    <Meta name="theme-color" content="#252525" />
    <Meta name="msapplication-navbutton-color" content="#252525" />
    <Meta name="apple-mobile-web-app-status-bar-style" content="#252525" />
    <Meta name="msapplication-starturl" content="/" />
    <Meta name="apple-mobile-web-app-title" :content="publicConfig.SIZE_NAME" />
    <Meta name="application-name" :content="publicConfig.SIZE_NAME" />
    <Meta name="apple-mobile-web-app-capable" content="yes" />
    <Meta name="mobile-web-app-capable" content="yes" />
    <Meta name="desscription"
          :content="`Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn 💚10 triệu thành viên tại ${publicConfig.SIZE_NAME}`" />
    <Meta property="og:title" :content="`Đọc truyện tranh online - Truyện gì cũng có - ${publicConfig.SIZE_NAME}`" />
    <Meta property="og:site_name" :content="publicConfig.SIZE_NAME" />
    <Meta property="og:url" :content="publicConfig.DOMAIN" />
    <Meta property="og:type" content="website" />
    <Meta property="og:description"
          :content="`Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn 💚10 triệu thành viên tại ${publicConfig.SIZE_NAME}`" />
    <Meta itemprop="name"
          :content="`Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn 💚10 triệu thành viên tại ${publicConfig.SIZE_NAME}`" />
    <Meta itemprop="description"
          :content="`Web đọc truyện tranh online lớn nhất được cập nhật liên tục mỗi ngày - Cùng tham gia đọc truyện và thảo luận với hơn 💚10 triệu thành viên tại ${publicConfig.SIZE_NAME}`" />
  </Head>
  <NuxtLoadingBar />
  <NuxtPage />
</template>