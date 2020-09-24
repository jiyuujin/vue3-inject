import { InjectionKey } from 'vue'
import { IdentiferStore } from '@/models/version'

const useVersionKey: InjectionKey<IdentiferStore> = Symbol('IdentiferStore')

export default useVersionKey
