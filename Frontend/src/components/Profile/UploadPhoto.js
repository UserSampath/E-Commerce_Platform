import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';
import './UploadPhoto.css'; // Import your CSS file for styling

const UploadPhoto = () => {
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [accountName, setAccountName] = useState('');

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  return (
    <div className="upload-avatar-container">
      <div className="avatar-container">
        <Avatar
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          onCrop={onCrop}
          onClose={onClose}
          src={src}
        />
        {preview && <img src={preview} alt="Avatar Preview" className="avatar-image" />}
      </div>
      <div className="account-name-container">
        <input
          type="text"
          placeholder="Enter Account Name"
          value={accountName}
          onChange={handleAccountNameChange}
        />
      </div>
    </div>
  );
};

export default UploadPhoto;
