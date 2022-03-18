import type { Dispatch, SetStateAction, VFC } from 'react'

import { fontFamilies, fontWeights, shapes } from '../lib/WCOption'
import type { InputWCOptions } from '../lib/WCOption/WCOptions.type'

import { InputColor } from './ui/InputColor'
import { InputNumber } from './ui/InputNumber'
import { Label } from './ui/Label'
// import { Range } from './ui/Range'
import { Select } from './ui/Select'
import { Toggle } from './ui/Toggle'

type Props = {
  setOption: Dispatch<SetStateAction<InputWCOptions>>
  option: InputWCOptions
}
export const OptionSettingArea: VFC<Props> = ({ option, setOption }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label text="font family" />
        <Select onChange={(fontFamily) => setOption((option) => ({ ...option, fontFamily }))}>
          {fontFamilies.map((fontFamily) => (
            <option key={fontFamily} selected={fontFamily === option.fontFamily}>
              {fontFamily}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label text="font weight" />
        <Select onChange={(fontWeight) => setOption((option) => ({ ...option, fontWeight }))}>
          {fontWeights.map((fw) => (
            <option key={fw} value={fw} selected={fw === option.fontWeight}>
              {fw}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label text="font colors" />
        {Array.from({ length: option.colors.length }).map((_, i) => (
          <InputColor
            key={i}
            color={option.colors[i]}
            onChange={(e) => {
              const colors = option.colors
              colors[i] = e.target.value
              setOption((option) => ({ ...option, colors }))
            }}
          />
        ))}
      </div>

      <div>
        <Label text="background color" />
        <InputColor
          color={option.backgroundColor}
          onChange={(e) => {
            setOption((option) => ({
              ...option,
              backgroundColor: e.target.value,
            }))
          }}
        />
      </div>

      <div>
        <Label text="grid size" />
        <InputNumber
          number={option.gridSize}
          onChange={(gridSize) => {
            setOption((option) => ({ ...option, gridSize }))
          }}
          placeholder="grid size"
        />
      </div>

      <div>
        <Label text="draw mask" />
        <Toggle
          checked={option.drawMask}
          onChange={() =>
            setOption((option) => ({
              ...option,
              drawMask: !option.drawMask,
            }))
          }
        />
      </div>

      <div>
        <Label text="mask color" />
        <InputColor
          color={option.maskColor}
          onChange={(e) => {
            setOption((option) => ({
              ...option,
              maskColor: e.target.value,
            }))
          }}
        />
      </div>

      <div>
        <Label text="mask width" />
        <InputNumber
          number={option.gridSize}
          onChange={(gridSize) => {
            setOption((option) => ({ ...option, gridSize }))
          }}
        />
      </div>

      {/* TODO: min max rotation
      <div>
        <Label text="hoge" />
        <Range value={10} max={100} min={0} step={10} />
      </div>
      */}

      {/* TODO: rotation ratio
      <div>
        <Label text="hoge" />
        <Range value={0} min={0} max={1} />
      </div>
      */}

      {/* TODO: rotation step */}

      <div>
        <Label text="shape" />
        <Select
          onChange={(shape) => {
            setOption((option) => ({ ...option, shape }))
          }}
        >
          {shapes.map((shape) => (
            <option key={shape} selected={shape === option.shape}>
              {shape}
            </option>
          ))}
        </Select>
      </div>
    </div>
  )
}
