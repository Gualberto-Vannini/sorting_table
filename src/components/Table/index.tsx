import React from 'react';
import {Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import useHandleSort from '../../hooks/useHandleSort';
import useSortData from '../../hooks/useSortData';
import useDebouncedSearch from '../../hooks/useDebouncing';

const TableContainer = styled.View`
  flex: 1;
  background-color: white;
`;

const SearchContainer = styled.View`
  margin: ${({theme}) => theme.space.xxl};
  border-width: ${({theme}) => theme.space.xxxs};
  border-color: ${({theme}) => theme.colors.black[75]};
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${({theme}) => theme.space.xxxl};
  border-bottom-width: ${({theme}) => theme.space.xxxs};
  border-color: ${({theme}) => theme.colors.black[75]};
  background-color: ${({theme}) => theme.colors.black[50]};
`;

const ColumnContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-left-color: ${({theme}) => theme.colors.black[50]};
  border-left-width: ${({theme}) => theme.space.xxxs};
`;

const RowContainer = styled.View`
  flex-direction: row;
  height: ${({theme}) => theme.space.xxxl};
  border-bottom-width: ${({theme}) => theme.space.xxxs};
  border-color: ${({theme}) => theme.colors.black[50]};
  align-items: center;
  justify-content: center;
`;

interface SortingTableProps<T> {
  data: T[];
}

const SortingTable = <T extends Record<string, any>>({
  data,
}: SortingTableProps<T>) => {
  // Custom hooks for handling sort state and sorting data
  const {sortKey, sortDirection, handleSort} = useHandleSort<T>();
  const sortedData = useSortData<T>(data, sortKey, sortDirection);

  // Debounce time in milliseconds for the search input
  const debounceTime = 300; // You can adjust this value as needed
  const {searchQuery, setSearchQuery, filteredData} = useDebouncedSearch<T>(
    sortedData, // Pass the sorted data to the search hook
    debounceTime,
  );

  // Render each item in the sortedData array as a row
  const renderItem = ({item}: {item: T}) => (
    <RowContainer>
      {Object.entries(item).map(([key, value]) => (
        <ColumnContainer key={key}>
          <Text>{value}</Text>
        </ColumnContainer>
      ))}
    </RowContainer>
  );

  return (
    <TableContainer>
      {/* Search input */}
      <SearchContainer>
        {/* Search input */}
        <TextInput
          placeholder="Search by name or age"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </SearchContainer>

      {/* Render the table header with sortable columns */}
      {sortedData.length > 0 && (
        <HeaderContainer>
          {Object.keys(sortedData[0]).map(key => (
            <ColumnContainer key={key}>
              <TouchableOpacity onPress={() => handleSort(key as keyof T)}>
                <Text>{key}</Text>
                {sortKey === key && (
                  <MaterialIcons
                    name={
                      sortDirection === 'asc'
                        ? 'arrow-upward'
                        : 'arrow-downward'
                    }
                    size={18}
                    color="#000"
                  />
                )}
              </TouchableOpacity>
            </ColumnContainer>
          ))}
        </HeaderContainer>
      )}

      {/* Render the table rows based on the search query or sorted data */}
      {(filteredData.length > 0 ? filteredData : sortedData).length > 0 && (
        <FlatList
          data={filteredData.length > 0 ? filteredData : sortedData}
          renderItem={renderItem}
        />
      )}
    </TableContainer>
  );
};

export default SortingTable;
