import { InjectionKey } from 'vue'
import { CounterStore } from '@/models/counter'

const useCounterKey: InjectionKey<CounterStore> = Symbol('CounterStore')

export default useCounterKey
