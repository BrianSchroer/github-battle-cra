import React from 'react';
import FaAutomobile from 'react-icons/lib/fa/automobile';
import FaBed from 'react-icons/lib/fa/bed';
import FaPlane from 'react-icons/lib/fa/plane';
import FaSpaceShuttle from 'react-icons/lib/fa/space-shuttle';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '../../core/tabs';

export default class Travel extends React.Component {
  render() {
    return(
      <Tabs>
        <TabList>
          <Tab><FaAutomobile /></Tab>
          <Tab><FaBed /></Tab>
          <Tab><FaPlane /></Tab>
          <Tab isDisabled><FaSpaceShuttle /></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Car content</TabPanel>
          <TabPanel>Hotel content</TabPanel>
          <TabPanel>Plane content</TabPanel>
          <TabPanel>Space shuttle content</TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
}