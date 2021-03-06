import React, { PropTypes } from 'react';
import ModalContainer from '../../../modules/modals/container'
import SettingsContainer from '../../../modules/settings/container'
import RelayAdd from '../components/RelayAdd'
import RelayEdit from '../components/RelayEdit'
import Settings from './Settings'

function Modals(){
  return (
    <div>
      <ModalContainer id='settings/relay/add'>
        <SettingsContainer>
          <RelayAdd />
        </SettingsContainer>
      </ModalContainer>
      <ModalContainer id='settings/relay/edit'>
        <SettingsContainer>
          <RelayEdit />
        </SettingsContainer>
      </ModalContainer>
      <ModalContainer id='settings'>
        <Settings />
      </ModalContainer>
    </div>
  );
}

export default Modals;



