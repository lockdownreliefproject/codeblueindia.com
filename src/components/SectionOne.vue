<template>
  <div class="relative bg-gray-800">
    <div
      class="h-56 bg-blue-500 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=60&amp;blend=6875F5&amp;sat=-100&amp;blend-mode=multiply"
        alt=""
      />
    </div>
    <div
      class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div
          class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"
        >
          {{ data.small_title }}
        </div>
        <h2
          class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"
        >
          {{ data.main_title }}
        </h2>
        <p class="mt-3 text-lg leading-7 text-gray-300">
          {{ data.content }}
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              :href="data.button.link"
            >
              <span>{{ data.button.name }}</span>
              <svg
                class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                ></path>
                <path
                  d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionOneData from "../data/sectionone.yml";
export default {
  name: "SectionOne",
  data() {
    return {
      data: SectionOneData,
    };
  },
};
</script>
