import { createStyles, makeStyles } from '@material-ui/core';

const useCreateGameFormStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      gap: '16px',
    },
  })
);

export default useCreateGameFormStyles;
