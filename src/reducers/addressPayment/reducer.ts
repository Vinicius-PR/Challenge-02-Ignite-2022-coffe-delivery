import produce from 'immer'
import { ActionsAddressPaymentTypes } from './actions'

export type Address = {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

interface AddressState {
  address: Address
  paymentMethod: string
}

export function addressPaymentReducer(state: AddressState, action: any) {
  switch (action.type) {
    case ActionsAddressPaymentTypes.SAVE_ADDRESS_PAYMENT:
      return produce(state, (draft) => {
        draft.address.neighborhood = action.payload.address.neighborhood
        draft.address.zipCode = action.payload.address.zipCode
        draft.address.street = action.payload.address.street
        draft.address.complement = action.payload.address.complement
        draft.address.number = action.payload.address.number
        draft.address.city = action.payload.address.city
        draft.address.state = action.payload.address.state
        draft.paymentMethod = action.payload.paymentMethod
      })

    case ActionsAddressPaymentTypes.RESET_ADDRESS_PAYMENT:
      return produce(state, (draft) => {
        draft.address.neighborhood = ''
        draft.address.zipCode = ''
        draft.address.street = ''
        draft.address.complement = ''
        draft.address.number = ''
        draft.address.city = ''
        draft.address.state = ''
        draft.paymentMethod = ''
      })
    default:
      return state
  }
}
