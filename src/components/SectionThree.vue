<template>
  <div class="py-12 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase"
        >
          {{ data.blue_title }}
        </p>
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ data.main_title }}
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          {{ data.content }}
        </p>
      </div>
      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  {{ data.one.title }}
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ data.one.content }}
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  {{ data.two.title }}
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ data.two.content }}
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  {{ data.three.title }}
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ data.three.content }}
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10 md:mt-0">
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                >
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg leading-6 font-medium text-gray-900">
                  {{ data.four.title }}
                </h4>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  {{ data.four.content }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SectionThreeData from "../data/sectionthree.yml";
export default {
  data() {
    return {
      data: SectionThreeData,
    };
  },
};
</script>
