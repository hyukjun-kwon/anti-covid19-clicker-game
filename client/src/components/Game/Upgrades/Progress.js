import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Progress(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progress = React.useRef(() => {});
  React.useEffect(() => {
    progress.current = () => {
      if (completed > 100) {
        setCompleted(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setCompleted(completed + diff);
        setBuffer(completed + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    function tick() {
      progress.current();
    }
    const timer = setInterval(tick, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const style = {
    margin: '0px'
  }

  return (
    <div style={style} className={classes.root}>
      <p>{props.upgrade}</p>
      <p>Next Upgrade Cost: ${props.description}</p>
      <LinearProgress variant="buffer" value={completed} valueBuffer={buffer} color="secondary" />
    </div>
  );
}