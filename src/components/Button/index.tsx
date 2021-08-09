
import React, { ButtonHTMLAttributes } from 'react'
import { CustomButton } from './styles'

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button = (props: TProps) => {
  const { isOutlined = false } = props

  return (
    <CustomButton
      isOutlined={isOutlined}
      {...props}
    />
  )
}
