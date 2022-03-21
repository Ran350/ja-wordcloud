import { Details } from '../ui/Details'
import { List } from '../ui/Details/List'
import { Label } from '../ui/Label'

import { fontFamilies, getFontFamilyName } from 'src/lib/form/data/fontFamily'
import type { Form } from 'src/lib/form/index.type'

type Props = {
  form: Form
  setForm: React.Dispatch<React.SetStateAction<Form>>
}
export const FontFamilyForm: React.VFC<Props> = ({ form, setForm }) => {
  return (
    <div className="">
      <Label text="font family" />

      <Details ariaLabel="font-family" summary={getFontFamilyName(form.fontFamilyId)}>
        <div className="w-full">
          <List
            list={Object.entries(fontFamilies).map(([id, fontFamily]) => ({
              id,
              text1: { display: 'サンプル', fontFamily: fontFamily.css },
              text2: { display: fontFamily.name },
              onClick: () => setForm({ ...form, fontFamilyId: id }),
              selected: form.fontFamilyId === id,
            }))}
          />
        </div>
      </Details>
    </div>
  )
}
