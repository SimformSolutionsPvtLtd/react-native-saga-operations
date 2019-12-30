import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { TouchableOpacity } from 'react-native';
import { Header, Icon, Title } from 'native-base';
import styles from './styles/CustomHeaderStyles';

const CustomHeader = props => {
  const { title, left = false, renderRight } = props;
  const navigation = useNavigation();
  return (
    <Header>
      {left && (
        <TouchableOpacity style={styles.leftContainer}>
          <Icon
            name="arrow-back"
            style={styles.left}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      )}
      <Title style={styles.titleContainer}>{title}</Title>
      {renderRight}
    </Header>
  );
};

export default CustomHeader;
