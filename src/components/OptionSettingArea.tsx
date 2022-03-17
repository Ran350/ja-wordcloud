import type { Dispatch, SetStateAction, VFC } from 'react'

import type { WCOptions } from '../types/WCOptions.type'

import { InputColor } from './ui/InputColor'
import { InputNumber } from './ui/InputNumber'
import { Label } from './ui/Label'
import { Range } from './ui/Range'
import { Select } from './ui/Select'
import { Toggle } from './ui/Toggle'

type Props = {
  setOption: Dispatch<SetStateAction<WCOptions>>
  option: WCOptions
}
export const OptionSettingArea: VFC<Props> = ({ option, setOption }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label text="hoge" />
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
        <Label text="hoge" />
        <InputNumber
          number={option.gridSize}
          onChange={(e) => {
            const value = Number(e.target.value)
            if (value < 0) {
              return
            }
            setOption((option) => ({
              ...option,
              gridSize: value,
            }))
          }}
          placeholder="grid size"
        />
      </div>

      <div>
        <Label text="hoge" />

        <Select>
          <option value="" selected>
            hoge
          </option>
          <option value="">hoge</option>
        </Select>
      </div>

      <div>
        <Label text="hoge" />
        <Range value={10} max={100} min={0} step={10} />
      </div>

      <div>
        <Label text="hoge" />

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
    </div>
  )
}
