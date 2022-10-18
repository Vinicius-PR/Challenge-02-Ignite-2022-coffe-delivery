import { createContext, ReactNode, useReducer } from 'react'
import {
  resetAddressAndPayment,
  saveAddressAndPaymentAction,
} from '../reducers/addressPayment/actions'
import {
  Address,
  addressPaymentReducer,
} from '../reducers/addressPayment/reducer'

interface AddressPaymentContextType {
  address: Address
  paymentMethod: string

  handleSaveAddressAndPayment: (address: Address, paymentMethod: string) => void
  handleResetAddressAndPayment: () => void
}

interface AddressContextProviderProps {
  children: ReactNode
}

export const AddressPaymentContext = createContext(
  {} as AddressPaymentContextType,
)

export function AddressPaymentContextProvider({
  children,
}: AddressContextProviderProps) {
  const [addressState, dispatch] = useReducer(addressPaymentReducer, {
    address: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    paymentMethod: '',
  })

  const { address, paymentMethod } = addressState
  function handleSaveAddressAndPayment(
    address: Address,
    paymentMethod: string,
  ) {
    dispatch(saveAddressAndPaymentAction(address, paymentMethod))
  }

  function handleResetAddressAndPayment() {
    dispatch(resetAddressAndPayment())
  }

  return (
    <AddressPaymentContext.Provider
      value={{
        address,
        paymentMethod,
        handleSaveAddressAndPayment,
        handleResetAddressAndPayment,
      }}
    >
      {children}
    </AddressPaymentContext.Provider>
  )
}
