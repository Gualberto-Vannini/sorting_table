import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Profile = () => {
  return (
    <StyledSafeAreaView>
      <Text>MADE WITH LOVE</Text>
    </StyledSafeAreaView>
  );
};

export default Profile;
