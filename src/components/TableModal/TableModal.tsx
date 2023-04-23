import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../Button/Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ModalBody, ModalForm, ModalHeader, ModalInput, Overlay } from './TableModal.styles';
import { ITableModal } from './TableModal.styles.interface';

export const TableModal = ({visible, onClose, onSave}: ITableModal) => {
  const [table, setTable] = useState('');

  const handleSaveTable = () => {
    setTable('');
    onSave(table);
    onClose();
  };

  const handleCloseTable = () => {
    setTable('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={Platform.OS === 'web' ? 'height' : 'padding'}>
        <ModalBody>
          <ModalHeader>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={handleCloseTable}>
              <Close color="#666"/>
            </TouchableOpacity>
          </ModalHeader>
          <ModalForm>
            <ModalInput
              placeholder='Número da mesa'
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={value => setTable(value)}
            >
            </ModalInput>
            <Button
              onPress={handleSaveTable}
              label="Salvar"
              disabled={table.length === 0}
            />
          </ModalForm>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};
