import { ColorInput, Input, Navbar, NumberInput, ScrollArea, Select, Slider, Stack, Switch } from '@mantine/core'

import { FontFamilySelect } from './FontFamilySelect'

import { fontFamilies, mergeFamilies } from '~/feature/font/fontFamily'
import { fontWeights } from '~/feature/font/fontWeight'
import { useFormContext } from '~/feature/wcStyleForm/context'

export const WCStyleForm = () => {
  const form = useFormContext()

  return (
    <Navbar.Section grow component={ScrollArea} mt="md">
      <Stack spacing="sm" align="stretch">
        <FontFamilySelect
          data={fontFamilies.map((f, index) => ({
            value: `${index}`,
            label: f.name,
            fontFamily: mergeFamilies(f),
          }))}
          defaultValue={`${form.values.fontFamiliesIndex}`} // Mantine <Select> の value は string | null
          onChange={(value) => {
            form.setFieldValue('fontFamiliesIndex', Number(value) as typeof form.values.fontFamiliesIndex)
            form.validateField('fontFamiliesIndex')
          }}
          fontFamily={fontFamilies[form.values.fontFamiliesIndex].name}
        />

        <Select
          label="フォントの太さ"
          placeholder="フォントの太さ"
          data={fontWeights.map((fw) => ({ value: `${fw}`, label: `${fw}` }))}
          {...form.getInputProps('fontWeight')}
        />

        <Stack spacing="xs">
          {form.values.colors.map((color, i) => (
            <ColorInput
              key={i}
              label={i === 0 ? 'フォントの色' : undefined}
              value={color}
              color={color}
              onChangeEnd={(value) => {
                form.setFieldValue(
                  'colors',
                  form.values.colors.map((c, j) => (j === i ? value : c)) as typeof form.values.colors,
                )
                form.validateField('colors')
              }}
            />
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

        {/* TODO: minRotation */}
        {/* TODO: maxRotation */}
        {/* TODO: rotationSteps */}

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
