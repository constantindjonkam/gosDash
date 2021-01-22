import "./styles/sidebar.css";
import SearchIcon from "./assets/searchIcon.png";
import Profile from "./assets/profile.png";
import { useState } from "react";
import CloseIcon from "./common/CloseIcon";

function Sidebar({ show, onHide }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`sidebar ${show && "show"}`}>
      <aside className="sidebar__1">
        {!show && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            id="logo"
          >
            <g id="Logo" transform="translate(-464.785 520.904)">
              <g
                id="Group_125"
                data-name="Group 125"
                transform="translate(2 -51)"
              >
                <rect
                  id="Rectangle_82"
                  data-name="Rectangle 82"
                  width="5"
                  height="24"
                  rx="2.5"
                  transform="translate(462.785 -466.904)"
                  fill="#fff"
                  opacity="0.5"
                />
                <rect
                  id="Rectangle_83"
                  data-name="Rectangle 83"
                  width="5"
                  height="26"
                  rx="2.5"
                  transform="translate(469.785 -463.904)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_84"
                  data-name="Rectangle 84"
                  width="5"
                  height="15"
                  rx="2.5"
                  transform="translate(476.785 -459.904)"
                  fill="#fff"
                  opacity="0.5"
                />
                <rect
                  id="Rectangle_85"
                  data-name="Rectangle 85"
                  width="5"
                  height="27"
                  rx="2.5"
                  transform="translate(483.785 -469.904)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_86"
                  data-name="Rectangle 86"
                  width="5"
                  height="25"
                  rx="2.5"
                  transform="translate(490.785 -463.904)"
                  fill="#fff"
                  opacity="0.5"
                />
              </g>
            </g>
          </svg>
        )}
        {show && <CloseIcon onClick={onHide} />}
        <div className="sidebar__menu">
          <li>
            <svg
              id="house"
              xmlns="http://www.w3.org/2000/svg"
              width="130.04"
              height="124.081"
              viewBox="0 0 130.04 124.081"
            >
              <path
                id="Path_36"
                data-name="Path 36"
                d="M128.84,67.125,67.644,12.4a1.717,1.717,0,0,0-.348-.267,3.619,3.619,0,0,0-4.895-.08L1.206,66.778a3.618,3.618,0,0,0,4.814,5.4l11.02-9.869v63.817a9.1,9.1,0,0,0,9.094,9.094H45.445a8.538,8.538,0,0,0,8.532-8.532V94.246a1.313,1.313,0,0,1,1.311-1.311h19.5A1.313,1.313,0,0,1,76.1,94.246V126.69a8.538,8.538,0,0,0,8.532,8.532h19.311c5.082,0,9.094-5,9.094-11.394V62.659l11.02,9.869a3.637,3.637,0,0,0,5.109-.294A3.682,3.682,0,0,0,128.84,67.125Zm-23.055,17.84v38.809c0,2.594-1.284,4.172-1.872,4.172H84.6a1.313,1.313,0,0,1-1.311-1.311V94.246a8.538,8.538,0,0,0-8.532-8.532h-19.5a8.538,8.538,0,0,0-8.532,8.532V126.69A1.313,1.313,0,0,1,45.418,128H26.107a1.878,1.878,0,0,1-1.872-1.872V55.838l40.6-36.268,40.949,36.616V84.965Z"
                transform="translate(0 -11.141)"
                //   fill="#fff"
                fill="#00CCF2"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145.016"
              height="124.493"
              viewBox="0 0 145.016 124.493"
            >
              <path
                id="Path_27"
                data-name="Path 27"
                opacity="0.6"
                d="M121.721,53.277H87.365A15.17,15.17,0,0,1,72.207,38.118a4.051,4.051,0,0,0-4.068-4.068H23.3A23.331,23.331,0,0,0,0,57.345v77.9a23.331,23.331,0,0,0,23.3,23.3h98.425a23.331,23.331,0,0,0,23.3-23.3V76.542A23.305,23.305,0,0,0,121.721,53.277Zm15.159,81.941a15.17,15.17,0,0,1-15.159,15.159H23.3A15.17,15.17,0,0,1,8.137,135.218V57.345A15.17,15.17,0,0,1,23.3,42.187H64.432A23.334,23.334,0,0,0,87.365,61.414h34.355a15.17,15.17,0,0,1,15.159,15.159v58.645Z"
                transform="translate(0 -34.05)"
                fill="#fff"
              />
            </svg>
          </li>
          <li>
            <svg
              id="pie-chart"
              xmlns="http://www.w3.org/2000/svg"
              width="124.556"
              height="124.582"
              viewBox="0 0 124.556 124.582"
            >
              <g id="Group_30" data-name="Group 30" opacity="0.6">
                <path
                  id="Path_56"
                  data-name="Path 56"
                  d="M107.735,103.177H59.189V54.631A3.516,3.516,0,0,0,55.658,51.1a55.608,55.608,0,1,0,55.608,55.608A3.55,3.55,0,0,0,107.735,103.177ZM55.658,155.254a48.545,48.545,0,0,1-3.531-96.961v48.415a3.516,3.516,0,0,0,3.531,3.531h48.415A48.593,48.593,0,0,1,55.658,155.254Z"
                  transform="translate(-0.05 -37.734)"
                  fill="#fff"
                />
                <path
                  id="Path_57"
                  data-name="Path 57"
                  d="M309.289,55.425A55.6,55.6,0,0,0,253.681,0a3.516,3.516,0,0,0-3.531,3.531V55.608a3.516,3.516,0,0,0,3.531,3.531h52.077a3.516,3.516,0,0,0,3.531-3.531ZM257.212,52.1V7.219A48.578,48.578,0,0,1,302.1,52.1H257.212Z"
                  transform="translate(-184.733 0)"
                  fill="#fff"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              id="settings-1"
              xmlns="http://www.w3.org/2000/svg"
              width="120.77"
              height="124.316"
              viewBox="0 0 120.77 124.316"
            >
              <g id="Group_34" data-name="Group 34" opacity="0.6">
                <path
                  id="Path_67"
                  data-name="Path 67"
                  d="M193.374,60.592V3.494a3.494,3.494,0,1,0-6.988,0v57.1a17.744,17.744,0,0,0,0,34.787V120.8a3.494,3.494,0,1,0,6.988,0V95.379a17.744,17.744,0,0,0,0-34.787ZM189.88,88.727a10.741,10.741,0,1,1,10.741-10.741A10.748,10.748,0,0,1,189.88,88.727Z"
                  transform="translate(-129.365)"
                  fill="#fff"
                />
                <path
                  id="Path_68"
                  data-name="Path 68"
                  d="M28.074,31.292V3.494a3.494,3.494,0,0,0-6.988,0v27.8a17.744,17.744,0,0,0,0,34.787V120.8a3.494,3.494,0,1,0,6.988,0V66.053a17.728,17.728,0,0,0,0-34.761ZM24.58,59.427A10.741,10.741,0,1,1,35.321,48.686,10.748,10.748,0,0,1,24.58,59.427Z"
                  transform="translate(-6.85)"
                  fill="#fff"
                />
                <path
                  id="Path_69"
                  data-name="Path 69"
                  d="M357.674,31.292V3.494a3.494,3.494,0,0,0-6.988,0v27.8a17.744,17.744,0,0,0,0,34.787v54.742a3.494,3.494,0,0,0,6.988,0V66.053a17.728,17.728,0,0,0,0-34.761ZM354.18,59.427a10.741,10.741,0,1,1,10.741-10.741A10.748,10.748,0,0,1,354.18,59.427Z"
                  transform="translate(-251.14)"
                  fill="#fff"
                />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <g id="settings" transform="translate(0 -0.001)" opacity="0.6">
                <g
                  id="Group_35"
                  data-name="Group 35"
                  transform="translate(0 0.001)"
                >
                  <path
                    id="Path_70"
                    data-name="Path 70"
                    d="M30.362,12.642l-2.246-.381a12.683,12.683,0,0,0-.9-2.179L28.537,8.23a1.971,1.971,0,0,0-.214-2.547L26.331,3.691a1.962,1.962,0,0,0-1.4-.582,1.942,1.942,0,0,0-1.143.368L21.933,4.8a12.551,12.551,0,0,0-2.259-.929L19.3,1.652A1.975,1.975,0,0,0,17.347,0H14.533a1.975,1.975,0,0,0-1.952,1.651l-.388,2.273a12.37,12.37,0,0,0-2.173.916L8.182,3.517a1.974,1.974,0,0,0-2.547.214l-2,1.992A1.979,1.979,0,0,0,3.423,8.27L4.76,10.148a12.388,12.388,0,0,0-.889,2.186l-2.219.374A1.975,1.975,0,0,0,0,14.661v2.814a1.975,1.975,0,0,0,1.651,1.952l2.273.388a12.37,12.37,0,0,0,.916,2.173L3.523,23.819a1.971,1.971,0,0,0,.214,2.547l1.992,1.992a1.962,1.962,0,0,0,1.4.582,1.942,1.942,0,0,0,1.143-.368l1.878-1.337a12.646,12.646,0,0,0,2.112.869l.374,2.246A1.975,1.975,0,0,0,14.586,32h2.821a1.975,1.975,0,0,0,1.952-1.651L19.74,28.1a12.682,12.682,0,0,0,2.179-.9l1.852,1.324a1.962,1.962,0,0,0,1.15.368h0a1.962,1.962,0,0,0,1.4-.582l1.992-1.992a1.979,1.979,0,0,0,.214-2.547L27.2,21.914a12.592,12.592,0,0,0,.9-2.179l2.246-.374A1.975,1.975,0,0,0,32,17.408V14.594A1.951,1.951,0,0,0,30.362,12.642Zm-.154,4.766a.173.173,0,0,1-.147.174l-2.808.468a.9.9,0,0,0-.722.662,10.7,10.7,0,0,1-1.163,2.8.9.9,0,0,0,.04.983l1.651,2.326a.182.182,0,0,1-.02.227l-1.992,1.992a.17.17,0,0,1-.127.053.164.164,0,0,1-.1-.033L22.5,25.41a.9.9,0,0,0-.983-.04,10.7,10.7,0,0,1-2.8,1.163.887.887,0,0,0-.662.722l-.475,2.808a.173.173,0,0,1-.174.147H14.593a.173.173,0,0,1-.174-.147l-.468-2.808a.9.9,0,0,0-.662-.722,11.112,11.112,0,0,1-2.741-1.123.925.925,0,0,0-.455-.12.88.88,0,0,0-.521.167l-2.34,1.664a.2.2,0,0,1-.1.033.179.179,0,0,1-.127-.053L5.014,25.109a.181.181,0,0,1-.02-.227l1.644-2.306a.915.915,0,0,0,.04-.989A10.6,10.6,0,0,1,5.5,18.792a.915.915,0,0,0-.722-.662l-2.828-.481a.173.173,0,0,1-.147-.174V14.661a.173.173,0,0,1,.147-.174l2.788-.468a.9.9,0,0,0,.729-.668,10.69,10.69,0,0,1,1.143-2.808.893.893,0,0,0-.047-.976L4.9,7.227A.182.182,0,0,1,4.92,7L6.912,5.008a.17.17,0,0,1,.127-.053.164.164,0,0,1,.1.033L9.446,6.632a.915.915,0,0,0,.989.04A10.6,10.6,0,0,1,13.229,5.5a.915.915,0,0,0,.662-.722l.481-2.828a.173.173,0,0,1,.174-.147H17.36a.173.173,0,0,1,.174.147L18,4.734a.9.9,0,0,0,.668.729,10.85,10.85,0,0,1,2.868,1.177.9.9,0,0,0,.983-.04l2.306-1.658a.2.2,0,0,1,.1-.033.179.179,0,0,1,.127.053l1.992,1.992a.181.181,0,0,1,.02.227L25.415,9.5a.9.9,0,0,0-.04.983,10.7,10.7,0,0,1,1.163,2.8.887.887,0,0,0,.722.662l2.808.475a.173.173,0,0,1,.147.174v2.814Z"
                    transform="translate(0 -0.001)"
                    fill="#fff"
                  />
                  <path
                    id="Path_71"
                    data-name="Path 71"
                    d="M143.017,136a6.917,6.917,0,1,0,6.917,6.917A6.922,6.922,0,0,0,143.017,136Zm0,12.027a5.109,5.109,0,1,1,5.109-5.109A5.113,5.113,0,0,1,143.017,148.028Z"
                    transform="translate(-127.014 -126.922)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </li>
        </div>
        <div className="sidebar__profile">
          {!show && (
            <>
              <p
                onClick={() => setShowMenu(true)}
                className={`sidebar__toggler ${!showMenu && "showMenuBtn"}`}
              >
                &gt;
              </p>
              <p
                onClick={() => setShowMenu(false)}
                className={`sidebar__toggler ${showMenu && "showMenuBtn"}`}
              >
                &lt;
              </p>
            </>
          )}
          <img src={Profile} alt="Profile" />
        </div>
      </aside>

      <aside
        className={`sidebar__2 ${
          showMenu || show ? "showMenuBtn" : "hideSidebar"
        }`}
      >
        <div className="sidebar__search">
          <img src={SearchIcon} alt="search Icon" />
          <input type="text" placeholder="Search" />
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
