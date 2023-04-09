import { ColorInput, Input, Navbar, NumberInput, ScrollArea, Select, Slider, Stack, Switch } from '@mantine/core'

import { FontFamilyField } from './FontFamilyField'

import { fontWeights } from '~/feature/font/fontWeight'
import { useFormContext } from '~/feature/wcStyleForm/context'

export const WCStyleForm = () => {
  const form = useFormContext()

  return (
    <Navbar.Section grow component={ScrollArea} mt="md">
      <Stack spacing="sm" align="stretch">
        <FontFamilyField
          {...form.getInputProps('fontFamily')}
          // FIXME: asアサーションせずにvalidationかける
        />

        <Select
          label="フォントの太さ"
          placeholder="フォントの太さ"
          data={fontWeights.map((fw) => ({ value: `${fw}`, label: `${fw}` }))}
          {...form.getInputProps('fontWeight')}
        />

        <Stack spacing="xs">
          {form.values.colors.map(({ color, onChange }, i) => (
            <ColorInput
              key={i}
              label={i === 0 ? 'フォントの色' : undefined}
              value={color}
              color={color}
              onChangeEnd={onChange}
            />
            // TODO: onChangeEnd
          ))}
        </Stack>

        <ColorInput
          label="背景色"
          {...form.getInputProps('backgroundColor')}
          // TODO: onChangeEnd
        />

        <NumberInput label="グリッドの大きさ" placeholder="グリッドの大きさ" {...form.getInputProps('gridSize')} />

        <Select
          label="クラウドの形状"
          placeholder="クラウドの形状"
          data={['circle', 'cardioid', 'diamond', 'square', 'triangle-forward', 'triangle', 'pentagon', 'star'].map(
            (shape) => ({ value: shape, label: shape }),
          )}
          {...form.getInputProps('shape')}
        />

        {/* TODO: MaxRotationForm */}

        {/* TODO: MinRotationForm */}

        <Slider
          label="ワードの回転ステップ"
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
          {...form.getInputProps('rotationSteps')}
        />

        {/* <RangeSlider
          label="ワードの回転角度"
          marks={[
            { value: 20, label: '20%' },
            { value: 50, label: '50%' },
            { value: 80, label: '80%' },
          ]}
          {...form.getInputProps('rotationRange')}
        /> */}

        <Input.Wrapper label="ワードの回転確率">
          <Slider
            defaultValue={0}
            label={(value) => `${value}%`}
            mb="xl"
            marks={[
              { value: 0, label: '0%' },
              { value: 50, label: '50%' },
              { value: 100, label: '100%' },
            ]}
            {...form.getInputProps('rotateRatio')}
            // TODO: onChangeEnd
          />
        </Input.Wrapper>

        <Switch labelPosition="left" label="グリッドのマスク" {...form.getInputProps('drawMask')} />

        <ColorInput
          disabled={!form.values.drawMask}
          label="マスクの色"
          {...form.getInputProps('maskColor')}
          // TODO: onChangeEnd
        />

        <NumberInput
          label="マスクの大きさ"
          placeholder="マスクの大きさ"
          disabled={!form.values.drawMask}
          {...form.getInputProps('maskWidth')}
        />
      </Stack>
    </Navbar.Section>
  )
}
