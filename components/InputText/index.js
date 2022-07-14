import { TextField } from "@mui/material";

export default function InputText({ props }) {
  return (
    props.map((item, index) => (
      <TextField
        key={index}
        id={item.id}
        name={item.name}
        label={item.label}
        placeholder={item.placeholder}
        required={item.required}
        variant="standard"
        fullWidth
        margin="normal"
        onChange={item.mask}
      />
    ))
  )
}