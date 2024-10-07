import React, { useState } from 'react';
import { TextField, Chip, Autocomplete } from '@mui/material';

const ChipInputAlternative = () => {
  const [chips, setChips] = useState([]);

  const handleAddChip = (event, newChips) => {
    setChips(newChips);
  };

  //   const handleAddChiped = (tag) => {
  //     setPostData({ ...postData, tags: [...postData.tags, tag] });
  //   };

  //   const handleDeleteChip = (chipToDelete) => {
  //     setPostData({
  //       ...postData,
  //       tags: postData.tags.filter((tag) => tag !== chipToDelete),
  //     });
  //   };

  return (
    <Autocomplete
      multiple
      freeSolo
      options={[]}
      value={chips}
      onChange={handleAddChip}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => <TextField {...params} label="Enter tags" />}
    />
  );
};

export default ChipInputAlternative;
