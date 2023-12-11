export function handleChange(
  e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLTextAreaElement>,
  setForm: React.Dispatch<React.SetStateAction<any>>
) {
  const { name, value } = e.target as HTMLInputElement;
  setForm((prev: any) => ({ ...prev, [name]: value }));
}
