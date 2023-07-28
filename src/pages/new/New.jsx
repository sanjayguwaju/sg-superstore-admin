import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users/userSlice';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...formData, img: file };
    console.log(userData)
    dispatch(addUser(userData));
    setIsSubmitted(true);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username..."
                    onChange={handleInputChange}
                    required
                  />
              </div>
              <div className="formInput">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname..."
                    onChange={handleInputChange}
                  />
              </div>
              <div className="formInput">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname..."
                    onChange={handleInputChange}
                  />
              </div>
              <div className="formInput">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email..."
                    onChange={handleInputChange}
                    required
                  />
              </div>
              <div className="formInput">
                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter your password..."
                    onChange={handleInputChange}
                    required
                  />
              </div>              <button type="submit">
                {isSubmitted ? "Submitted Successfully" : "Submit Add User"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;