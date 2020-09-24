import { ref } from 'vue'

export default function useIdentifer() {
  const version = ref<string>('ver.3.0.0-0')

  return { version }
}

export type IdentiferStore = ReturnType<typeof useIdentifer>
