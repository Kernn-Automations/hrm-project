import React from 'react';

const DistrictList = ({
  districts = [],
  selectedDistrict = null,
  onSelect,
  children,
}) => {
  return (
    <div className="districts-list">
      {districts.map((district, index) => (
        <div key={index} className="district-section">
          <div
            className="district-button"
            onClick={() => onSelect && onSelect(district.name)}
          >
            {district.name}
          </div>

          {selectedDistrict === district.name && children(district)}
        </div>
      ))}
    </div>
  );
};

export default DistrictList;
