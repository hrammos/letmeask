import React, { ButtonHTMLAttributes } from 'react'
import { CustomButton } from './styles'

type TProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: TProps) => <CustomButton {...props} />
