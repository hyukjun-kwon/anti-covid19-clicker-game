import React, { Fragment } from 'react';
import UpgradeTab from './Tab';
import Header from './Header';


export default function NavBottom(props) {

    return (
        <Fragment>

            <Header amount={'1,000'}/>

            <UpgradeTab />
        </Fragment>
    );
}