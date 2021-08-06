import React from 'react'

import copyImage from 'assets/images/copy.svg'

import { Button } from './styles'

type TProps = {
  code: string
}

export const RoomCode = (props: TProps) => {
  const { code } = props

  const onClickCopyToClipoard = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <Button onClick={onClickCopyToClipoard}>
      <div>
        <img src={copyImage} alt="Copy room code" />
      </div>
      <span>{`Sala #${code}`}</span>
    </Button>
  )
}
