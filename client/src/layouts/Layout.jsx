import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <div className="green-div flexer">
          <div className="title-holder">
            <Link to="/" className="link-font-change w-text title">
              grocal
            </Link>
          </div>

          <div className="link-holder">
            <div>
              {currentUser ? (
                <div className="top-level">
                  <div className="user">
                    <p className="w-text make-smaller-welcome layout-text-size">
                      {" "}
                      Welcome {currentUser.username}
                    </p>
                  </div>

                  <div className="logout">
                    <button
                      onClick={handleLogout}
                      className="green-button w-text layout-text-size"
                    >
                      {" "}
                      logout{" "}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="top-level">
                  <div className="flex-layout">
                    <Link
                      to="/login"
                      className="link-font-change w-text fit-link layout-text-size"
                    >
                      login
                    </Link>
                  </div>

                  <div className="flex-layout">
                    <Link
                      to="/register"
                      className="link-font-change w-text fit-link layout-text-size"
                    >
                      register
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="link-holder-bottom">
              {currentUser && (
                <nav className="bottom-level">
                  <Link
                    to="/produces"
                    className="link-font-change w-text layout-text-size"
                  >
                    produce
                  </Link>
                  <br />
                  <Link
                    to="/seasons"
                    className="link-font-change w-text layout-text-size"
                  >
                    seasonal
                  </Link>
                  <br />
                  <Link
                    to="/produces/new"
                    className="link-font-change w-text layout-text-size"
                  >
                    create
                  </Link>
                </nav>
              )}
            </div>
          </div>
        </div>

        <hr />
      </header>
      {props.children}
    </div>
  );
}
