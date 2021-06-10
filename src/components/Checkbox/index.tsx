import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  // checkbox sempre é renderizado sem estar checked
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  // controlled components (state)
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    // verificação binária
    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        // permite que o usuário passe qualquer outra prop presente no HTMLInputElement
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
