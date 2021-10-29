import { createStyles, makeStyles } from '@mui/material/styles';

const useFormikInputDateTimeStyles = makeStyles(() =>
  createStyles({
    helperText: {
      alignSelf: 'self-end',
    },
  })
);

export default useFormikInputDateTimeStyles;
