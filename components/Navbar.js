import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { persistor } from "../store/index";
import { logout } from "../store/reducers/authSlice";
import { reset } from "../store/reducers/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faUsersViewfinder,
  faUserPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const auth = useSelector((state) => state?.auth);
  const user = useSelector((state) => state?.user);
  const photo = user?.data?.dataValues
    ? user?.data?.dataValues?.photo
    : user?.data?.photo;

  useEffect(() => {
    const token = auth?.token;
    if (token !== null) {
      setIsAuthenticated(true);
    }
  }, [router, user]);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    dispatch(logout());
    dispatch(reset());
    persistor.purge();
  };

  return (
    <div className="bg-white shadow-lg">
      <div className="container align-item-center mt-1">
        <nav className="navbar navbar-expand-lg navbar-light py-4">
          <div className="container">
            <div>
              <Link href="/">
                <img
                  className="logo-logo"
                  src="/logo.png"
                  height="30px"
                  alt="CoolBrand"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  <div className="m-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="xl"
                      style={{ color: "#5e50a1" }}
                    />
                  </div>
                  <div className="m-2">
                    <FontAwesomeIcon
                      icon={faBell}
                      size="xl"
                      style={{ color: "#5e50a1" }}
                    />
                  </div>

                  <div style={{ position: "relative" }}>
                    <img
                      className="m-2 rounded-circle object-fit-cover"
                      src={photo}
                      style={{ width: `5vh`, height: `5vh` }}
                      onClick={toggleDropdown}
                    />
                    {dropdownOpen && (
                      <div
                        className="dropdown-menu show me-5 text-left"
                        style={{ position: "absolute", right: `-8vh` }}
                      >
                       

                        <Link href="/profile">
                          <div className="ms-2">
                            <button className="btn text-primary fw-bold">
                              Profile
                            </button>
                          </div>
                        </Link>

                        <div className="ms-2">
                          <button
                            className="btn text-primary fw-bold"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <Link href="/login">
                    <button className="btn btn-outline-primary col-sm-12 col-md-auto">
                      Masuk
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="navbar-button btn btn-primary mx-3 me-0">
                      Daftar
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
