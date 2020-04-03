import React, { Fragment } from 'react';
import UpgradeTab from '../Tab/Tab';
import Header from '../Header/Header';


export default function NavBottom(props) {

    return (
        <Fragment>

            <Header amount={'1,000'}/>

            <UpgradeTab />
        </Fragment>
    );
}