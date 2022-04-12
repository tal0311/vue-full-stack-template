<template>
 <h1>testimonials</h1>
</template>

<script>
import testimonialsPreviewVue from './testimonialsPreview.vue'
export default {
  name: 'testimonials',
  components: {
    testimonialsPreviewVue,
  },
  data() {
    return {
      list: [
        {
          img: 'src/assets/img/profile-1.jpg',
          name: 'Satish Patel',
          position: 'Founder & CEO, Huddle',
          content:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        },
        {
          img: 'src/assets/img/profile-2.jpg',
          name: 'Bruce McKenzie',
          position: 'Founder & CEO, Huddle',
          content:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        },
        {
          img: 'src/assets/img/profile-3.jpg',
          name: 'Bruce McKenzie',
          position: 'Founder & CEO, Huddle',
          content:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        },
      ],
    }
  },
}
</script>

<style></style>
