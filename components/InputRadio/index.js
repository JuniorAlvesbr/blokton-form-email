import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function InputRadio({ id, formLabel, list, radioValue, handleChange }) {

  return (
    <FormControl>
      <FormLabel id={id}>{formLabel}</FormLabel>
      <RadioGroup
        row
        aria-labelledby={id}
        name={id}
        value={radioValue}
        onChange={handleChange}
      >
        {list.map((item, index) =>
          <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
        )}
      </RadioGroup>
    </FormControl>
  )
}
