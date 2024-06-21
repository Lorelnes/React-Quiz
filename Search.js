import React, { useState } from 'react';
import { Input } from 'reactstrap';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm); // Call parent function on search change
  };

  
