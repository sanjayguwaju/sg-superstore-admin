import "./updateUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/users/userSlice';
import { userRows } from "../user-list/userdatatablesource";

const UpdateUser = ({ title }) => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState(userRows);
  const [updatedUser, setUpdatedUser] = useState();


  const {id} = useParams();
  

  useEffect(() => {
    if (id) {
      const singleUser = userData.filter((ele)=> ele.id === id);
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...formData, img: file };
    try {
      setIsSubmitted(true);
      await dispatch(updateUser(userData));
      setIsSuccess(true);
      setIsSubmitted(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      setIsError(true);
    }
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
                  : selectedUser?.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
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
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Username *</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username..."
                  onChange={handleInputChange}
                  required
                  value={formData.username || ''}
                />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your firstname..."
                  onChange={handleInputChange}
                  value={formData.firstname || ''}
                />
              </div>
              <div className="formInput">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your lastname..."
                  onChange={handleInputChange}
                  value={formData.lastname || ''}
                />
              </div>
              <div className="formInput">
                <label>Email *</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email..."
                  onChange={handleInputChange}
                  required
                  value={formData.email || ''}
                />
              </div>
              <div className="formInput">
                <label>Password *</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password..."
                  onChange={handleInputChange}
                  required
                  value={formData.password || ''}
                />
              </div>
              {isError && <p>Server Error. Please try again.</p>}
              <button type="submit">
                {isSubmitted ? "Updating..." : isSuccess ? "Updated successfully!" : "Submit Update User"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;