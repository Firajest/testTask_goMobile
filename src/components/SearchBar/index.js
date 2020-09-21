/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Label, Input, Form, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { searchTasks } from '../../redux/actionCreators';
import './style.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const allTasks = useSelector((state) => state.allTasks);

  function handleSubmit(event) {
    event.preventDefault();
    const searchArr = allTasks.filter((task) => task.name === input);
    if (searchArr.length > 0) {
      dispatch(searchTasks(searchArr));
    } else dispatch(searchTasks('Nothing found'));
  }

  return (
    <>
      <Form className="searchForm" onSubmit={(event) => handleSubmit(event)}>
        <Label for="search">Искать по названию</Label>
        <Input
          className="searchInput"
          placeholder="Поиск по названию"
          id="search"
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <Button className="searchBtn" type="submit">Search</Button>
      </Form>
    </>
  );
}

export default SearchBar;
