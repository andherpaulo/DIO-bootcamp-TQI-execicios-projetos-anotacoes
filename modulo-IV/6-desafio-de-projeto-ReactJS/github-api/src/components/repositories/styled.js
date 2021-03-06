import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: white;
    margin: 8px 8px 0;

    &:focus {
        outline: none;
    }

    &.is-selected {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid white;
        box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.2);
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 2px -2px 5px rgba(0, 0, 0, 0.2);
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';