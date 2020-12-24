import React, { useState } from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

const DotWrapper = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  background-color: ${p => p.color};
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  cursor: pointer;
`

const PickerWrapper = styled.div`
  position: absolute;
  top: 2rem;
`

const ColorDot = ({ value, onChange }) => {
  const [pickerIsOpen, setPickerIsOpen] = useState(false)

  return (
    <DotWrapper>
      <Wrapper
        color={value}
        onClick={() => setPickerIsOpen(!pickerIsOpen)}
        style={{ background: value }}
      />
      {pickerIsOpen && (
        <PickerWrapper>
          <ChromePicker color={value} onChange={(v) => onChange(v.hex)}/>
        </PickerWrapper>
      )}
    </DotWrapper>
  )
}

export default ColorDot