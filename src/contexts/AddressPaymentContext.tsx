import { produce } from 'immer'
import { createContext, ReactNode, useReducer } from 'react'

type Address = {
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
  const [addressState, dispatch] = useReducer(
    (state: AddressState, action: any) => {
      switch (action.type) {
        case 'SAVE_ADDRESS_PAYMENT':
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

        case 'RESET_ADDRESS_PAYMENT':
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
    },
    {
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
    },
  )

  const { address, paymentMethod } = addressState
  function handleSaveAddressAndPayment(
    address: Address,
    paymentMethod: string,
  ) {
    dispatch({
      type: 'SAVE_ADDRESS_PAYMENT',
      payload: {
        address,
        paymentMethod,
      },
    })
  }

  function handleResetAddressAndPayment() {
    dispatch({
      type: 'RESET_ADDRESS_PAYMENT',
    })
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
