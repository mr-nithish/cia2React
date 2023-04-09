import React, { useState } from 'react';

function Forms() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form>
        <select onChange={handleOptionChange}>
          <option value="">Choose one from below</option>
          <option value="mine">Nithish</option>
          <option value="father">Senthil Kumar</option>
          <option value="mother">Vanitha</option>
        </select>
      </form>
      {selectedOption && <p>You selected {selectedOption}.</p>}
    </div>
  );
}

export default Forms;
