import React, {useCallback, useEffect} from 'react';
import {Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {usersActions} from '../../redux/users/users';
import userSelectors from '../../redux/users/usersSelector';
import styled from 'styled-components/native';
import SortingTable from '../../components/Table/index';
import LoadingSpinner from '../../components/LoadingSpinner/';
import loadingSelectors from '../../redux/loading/loadingSelectors';
import shouldFetchData from '../../utils/helpers/shouldFetchData';
import {AsyncStorageKeys} from '../../utils/helpers/asyncStorageUtils';

const Container = styled.View`
  flex: 1;
`;

const TableContainer = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  margin: ${({theme}) => theme.space.m};
`;

const User = () => {
  const dispatch = useDispatch();

  const userSelectorData = useSelector(userSelectors.users);
  const {isLoading: usersLoading} = useSelector(
    loadingSelectors.usersRequestState,
  );

  const fetchDataIfNeeded = useCallback(async () => {
    const shouldFetch = await shouldFetchData(AsyncStorageKeys.USERS);
    if (shouldFetch) {
      dispatch(usersActions.loadUsers());
    }
  }, [dispatch]);

  useEffect(() => {
    // Fetch data on first login if no data available
    fetchDataIfNeeded();
  }, [fetchDataIfNeeded]);

  const handleRefresh = useCallback(() => {
    fetchDataIfNeeded();
  }, [fetchDataIfNeeded]);

  return (
    <Container>
      {usersLoading ? (
        <LoadingSpinner visible={usersLoading} />
      ) : (
        <>
          <ButtonContainer>
            <Button
              title="click here to refresh the data"
              onPress={handleRefresh}
            />
          </ButtonContainer>
          <TableContainer>
            <SortingTable data={userSelectorData} />
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default User;
