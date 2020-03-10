import React, { useState } from 'react';
import { StyleSheet, View, Text, Linking, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { KSCard } from '../../../components/KSCard';
import { KSModal } from '../../../components/KSModal';
import { KSRadioButtons } from '../../../components/KSRadioButtons';
import { IThemeConstants } from '../../../typings';
import { withTheme } from '../../ThemeProvider/withTheme';
import { textStyleBase } from '../../../theme/styles';

export interface IMiscProps {
  theme: IThemeConstants;
};

const loadInBrowser = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const renderQuestion = (theme: IThemeConstants, icon: string, question: string, text: string, onPress?: () => void) => (
  <View style={styles(theme).question}>
    <View style={styles(theme).questionIcon}>
      <Icon name={icon} size={40} color={theme.accentMainColor} />
    </View>
    <TouchableHighlight style={styles(theme).questionText} onPress={onPress}>
      <View>
        <Text style={styles(theme).title}>{question}</Text>
        <Text style={styles(theme).text}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const MiscBase = ({ theme }: IMiscProps) => {
  const [isFaqOpen, setFaqOpen] = useState<boolean>(false);

  return <>
    <KSCard text="MISCELLANEOUS">
      <KSRadioButtons
        items={[
          {
            text: 'FAQ',
            onPress: () => setFaqOpen(true),
            selected: isFaqOpen
          },
          {
            text: 'FEEDBACK',
            onPress: () => loadInBrowser('https://forms.gle/XU76tnDUzgVnjXHM8'),
            selected: false
          },
          {
            text: 'DONATE',
            onPress: () => loadInBrowser('https://www.paypal.me/klugjo'),
            selected: false
          }
        ]}
      />
    </KSCard>
    <KSModal
      open={isFaqOpen}
      close={() => setFaqOpen(false)}
      title="FAQ"
    >
      <ScrollView>
        {renderQuestion(theme, 'content-save', 'Where is my data saved?', `
All expenses are saved in your phone's memory. Nothing is transmitted to any third party service.
This also means that if you lose your phone or delete the app, all your data will be lost.

Use the Dropbox backup to get around that limitation.`)}

        {renderQuestion(theme, 'square-edit-outline', 'Can I change the categories?', `
The categories and sub categories are editable. Just click on the pencil to get started.

Once you are in edit mode, you can change the category name and icon, add new sub categories and change the sub categories names.
`)}

        {renderQuestion(theme, 'playlist-edit', 'Can I modify/delete an expense?', `
In the list view, tap on a expense to access the delete button.
There is currently no way to modify an expense from there, you need to delete it an recreate it.
`)}

        {renderQuestion(theme, 'send', 'How can I contact you or send feedback?', 'Click Here', () => loadInBrowser('https://forms.gle/XU76tnDUzgVnjXHM8'))}
        {renderQuestion(theme, 'github-circle', 'How can I thank you?', 'You can star the project on GitHub', () => loadInBrowser('https://github.com/klugjo/klug-saver'))}
        {renderQuestion(theme, 'paypal', 'How can I donate?', 'Click here to donate with PayPal', () => loadInBrowser('https://www.paypal.me/klugjo'))}
      </ScrollView>
    </KSModal>
  </>
};

export const Misc = withTheme(MiscBase);

const styles = (theme: IThemeConstants) => StyleSheet.create({
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingBottom: 30,
    paddingTop: 15,
    borderBottomColor: theme.underlayColor,
    borderBottomWidth: 1
  },
  questionIcon: {
    padding: 20,
    paddingLeft: 10
  },
  questionText: {
    flexGrow: 1,
    flexShrink: 1,
    paddingRight: 10
  },
  title: {
    ...textStyleBase(theme),
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'justify'
  },
  text: {
    ...textStyleBase(theme),
    textAlign: 'justify'
  }
});
