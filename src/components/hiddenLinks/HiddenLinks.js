import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/features/AuthSlice";

export const ShowOnLogin = ({ children }) => {
  const { isLoggedin } = useSelector(selectedUser);
  if (isLoggedin) {
    return children;
  }
  return null;
};

export const HideOnLogin = ({ children }) => {
  const { isLoggedin } = useSelector(selectedUser);
  if (!isLoggedin) {
    return children;
  }
  return null;
};
