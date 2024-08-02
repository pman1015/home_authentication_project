import { onMounted, onUnmounted, ref } from "vue";
export default function useWindowResize() {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);
  
    function handler() {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    };
  
    onMounted(() => window.addEventListener('resize', handler));
    onUnmounted(() => window.removeEventListener('resize', handler));
    return { width, height };
  }