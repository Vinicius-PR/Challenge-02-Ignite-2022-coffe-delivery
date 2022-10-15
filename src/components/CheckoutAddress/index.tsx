import { MapPinLine } from 'phosphor-react'
import {
  CheckoutAddressContainer,
  CheckoutAddressTitle,
  CheckoutAddressInputs,
  InputError,
  InputBox,
} from './styles'

import { useFormContext } from 'react-hook-form'

interface dataCepProps {
  cep: string
  bairro: string
  localidade: string
  logradouro: string
  uf: string
}

interface InputFormsType {
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}

export function CheckoutAddress() {
  const {
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<InputFormsType>()

  function getAddress(valueCep: string) {
    if (valueCep.length < 9) {
      setError('zipCode', { type: 'minLength', message: 'CEP Incompleto' })
      return
    }

    valueCep = valueCep.replace('-', '')
    fetch(`https://viacep.com.br/ws/${valueCep}/json/`)
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.erro) {
              setError('zipCode', { type: 'custom', message: 'CEP Inválido' })
            } else {
              clearErrors()
              SetAddressData(data)
            }
          })
          .catch((e) => {
            console.error(e)
          })
      })
      .catch((e) => {
        console.error(e)
      })
  }

  function SetAddressData(dataCep: dataCepProps) {
    setValue('zipCode', dataCep.cep)
    setValue('street', dataCep.logradouro)
    setValue('neighborhood', dataCep.bairro)
    setValue('city', dataCep.localidade)
    setValue('state', dataCep.uf)
  }
  return (
    <CheckoutAddressContainer>
      <CheckoutAddressTitle>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de entrega</h3>
          <p>Informe o endereço onde deseja receber o seu produto</p>
        </div>
      </CheckoutAddressTitle>

      <CheckoutAddressInputs>
        <input
          type="text"
          placeholder="CEP"
          {...(register('zipCode'),
          {
            onChange: (e) => {
              clearErrors('zipCode')
              e.target.value = e.target.value
                .replace(/\D/g, '')
                .replace(/(\d{5})(\d{1})/, '$1-$2')
                .replace(/(-\d{3})\d+?$/, '$1')
            },
            onBlur: (e) => {
              getAddress(e.target.value)
            },
          })}
        />

        {errors.zipCode?.message === undefined ? (
          ''
        ) : (
          <InputError>{errors.zipCode?.message}</InputError>
        )}

        <input type="text" placeholder="Rua" {...register('street')} />

        {errors.street?.message === undefined ? (
          ''
        ) : (
          <InputError>{errors.street?.message}</InputError>
        )}

        <InputBox>
          <div>
            <input
              type="number"
              placeholder="Numero"
              {...register('number', {
                valueAsNumber: true,
              })}
            />

            {errors.number?.message === undefined ? (
              ''
            ) : (
              <InputError>{errors.number?.message}</InputError>
            )}
          </div>

          <input
            type="text"
            placeholder="Complemento (opcional)"
            {...register('complement')}
          />
        </InputBox>

        <InputBox>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood?.message === undefined ? (
              ''
            ) : (
              <InputError>{errors.neighborhood?.message}</InputError>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Cidade"
              {...register('city', {
                required: true,
              })}
            />
            {errors.city?.message === undefined ? (
              ''
            ) : (
              <InputError>{errors.city?.message}</InputError>
            )}
          </div>

          <div>
            <input type="text" placeholder="UF" {...register('state')} />

            {errors.state?.message === undefined ? (
              ''
            ) : (
              <InputError>{errors.state?.message}</InputError>
            )}
          </div>
        </InputBox>
      </CheckoutAddressInputs>
    </CheckoutAddressContainer>
  )
}
