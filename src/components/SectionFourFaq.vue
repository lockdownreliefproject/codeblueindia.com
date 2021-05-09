<template>
    <div class="bg-white">
  <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold text-gray-900">Frequently asked questions</h2>
    <div class="mt-6 border-t-2 border-gray-100 pt-10">
      <dl class="md:grid md:grid-cols-2 md:gap-8">
        <div>
          <template  v-for="(faq,i) in sectionfourfaq.faqs_left">
            <div :class="i==0?'':'mt-12'" :key="i">
            <dt class="text-lg leading-6 font-medium text-gray-900">{{faq.question_name}}</dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">{{faq.answer}}</p>
            </dd>
          </div>
          </template>
        </div>
         <div>
          <template  v-for="(faq,i) in sectionfourfaq.faqs_right">
            <div :class="i==0?'':'mt-12'" :key="i">
            <dt class="text-lg leading-6 font-medium text-gray-900">{{faq.question_name}}</dt>
            <dd class="mt-2">
              <p class="text-base leading-6 text-gray-500">{{faq.answer}}</p>
            </dd>
          </div>
          </template>
        </div>
    
      </dl>
    </div>
  </div>
</div>
</template>
<script>
import sectionfourfaqdata from "../data/sectionfourfaq.yml"
 
export default {
     data(){
      return{
        sectionfourfaq:sectionfourfaqdata
      }
  }
}
</script>