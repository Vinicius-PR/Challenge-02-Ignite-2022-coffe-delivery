/* eslint-disable no-unused-vars */
import { Address } from './reducer'

export enum ActionsAddressPaymentTypes {
  SAVE_ADDRESS_PAYMENT = 'SAVE_ADDRESS_PAYMENT',
  RESET_ADDRESS_PAYMENT = 'RESET_ADDRESS_PAYMENT',
}

export function saveAddressAndPaymentAction(
  address: Address,
  paymentMethod: string,
) {
  return {
    type: ActionsAddressPaymentTypes.SAVE_ADDRESS_PAYMENT,
    payload: {
      address,
      paymentMethod,
    },
  }
}

export function resetAddressAndPayment() {
  return {
    type: ActionsAddressPaymentTypes.RESET_ADDRESS_PAYMENT,
  }
}
