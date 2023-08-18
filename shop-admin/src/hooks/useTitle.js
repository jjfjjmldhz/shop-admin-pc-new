import { ref, watch } from 'vue'

export function useTitle(titleValue) {
  const title = ref(titleValue)

  watch(title, newTitle => {
    document.title = newTitle
  }, { immediate: true })

  return title
}