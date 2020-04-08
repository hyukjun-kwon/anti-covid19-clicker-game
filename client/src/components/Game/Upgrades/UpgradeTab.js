import React from "react";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CurrentTab from "./CurrentTab";
import LevelUpTab from "./LevelUpTab";
import SpecialsTab from "./SpecialsTab";

const styles = {
  height: "355px",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    fontFamily: "Bangers, cursive",
    letterSpacing: "3px",
    fontSize: "14pt",
  },
}));

export default function UpgradeTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            className={classes.tabs}
            label="Current"
            href="/drafts"
            {...a11yProps(0)}
          />
          <LinkTab
            className={classes.tabs}
            label="Level-Ups"
            href="/trash"
            {...a11yProps(1)}
          />
          <LinkTab
            className={classes.tabs}
            label="Specials"
            href="/spam"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel style={styles} value={value} index={0}>
        <CurrentTab />
      </TabPanel>
      <TabPanel style={styles} value={value} index={1}>
        <LevelUpTab />
      </TabPanel>
      <TabPanel style={styles} value={value} index={2}>
        <SpecialsTab />
      </TabPanel>
    </div>
  );
}
