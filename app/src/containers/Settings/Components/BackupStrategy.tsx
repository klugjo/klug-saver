import React from 'react';
import { CloudBackup } from '../../../typings';
import { KSRadioButtons } from '../../../components/KSRadioButtons';
import { KSCard } from '../../../components/KSCard';

export interface IBackupStrategyProps {
  cloudBackup: CloudBackup;
  saveBackupStrategy: (cloudBackup: CloudBackup) => () => void;
};

export const BackupStrategy = ({ cloudBackup, saveBackupStrategy }: IBackupStrategyProps) => {
  return <KSCard text="BACKUP STRATEGY">
    <KSRadioButtons
      items={[
        {
          selected: cloudBackup === CloudBackup.Phone,
          icon: 'cellphone-iphone',
          text: 'Phone',
          onPress: saveBackupStrategy(CloudBackup.Phone)
        },
        {
          selected: cloudBackup === CloudBackup.Dropbox,
          icon: 'dropbox',
          text: 'Dropbox',
          onPress: saveBackupStrategy(CloudBackup.Dropbox)
        }
      ]}
    />
  </KSCard>;
};
