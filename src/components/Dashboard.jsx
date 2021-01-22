import { useEffect, useState } from "react";
import { Line, Scatter } from "react-chartjs-2";

import "./styles/dashboard.css";
import WelcomeImg from "./assets/welcome.png";
import MastercardIcon from "./assets/mastercard.png";
import CopyIcon from "./assets/copy.png";
import ScrollArrows from "./assets/scrollArrows.png";
import Hamburger from "./assets/hamburger.png";
import Arrow from "./common/Arrow";
import Circle from "./common/Circle";
import TimeLine from "./common/TimeLine";
import dashboardData from "../fakeAPI/dashboardData";

const Dashboard = ({ onToggle }) => {
  const [data, setData] = useState({});
  const [balanceData, setBalanceData] = useState({});
  const [statsData, setStatsData] = useState({});
  const [calendarTime, setCalendarTime] = useState([]);

  useEffect(() => {
    setData(dashboardData.data);
    setBalanceData(dashboardData.balanceData);
    setStatsData(dashboardData.statsData);
    setCalendarTime(dashboardData.calendarTime);
  }, []);

  return (
    <main className="dashboard">
      <img onClick={onToggle} id="hamburger" src={Hamburger} alt="hamburger" />
      <h1>Dashboard</h1>

      <div className="dashboard__mainGrid">
        {/* <div className="dashboard__sec1"> */}
        <div className="dashboard__welcome">
          <aside>
            <h2>Welcome back Julie!</h2>
            <div className="dashboard__welcome__info">
              <p>Since your last login on the system, there were:</p>
              <ul>
                <li>21 new charts</li>
                <li>15 new reports</li>
                <li>45 new messages</li>
              </ul>
            </div>
          </aside>
          <img src={WelcomeImg} alt="Welcoming woman" />
        </div>

        <div className="dashboard__thisMonth">
          <Line
            data={data}
            options={{
              maintainAspectRatio: true,
              legend: {
                display: false,
              },
            }}
          />
          <div className="dashboard__thisMonth__info">
            <aside>
              <h2>
                ${data?.datasets?.map((d) => d.data)[0].reduce((a, c) => a + c)}
              </h2>
              <p className="small_font">This Month</p>
            </aside>
            <Arrow bgColor="#a72d68" />
          </div>
        </div>
        {/* </div> */}

        {/* <div className="dashboard__grid"> */}
        <div className="dashboard__sec2">
          <div className="dashboard__sec2__balance">
            <aside className="dashboard__sec2__balance__info">
              <div>
                <h2>$ 9.564</h2>
                <p className="small_font">Card Balance</p>
              </div>
              <img src={MastercardIcon} alt="Mastercard Icon" width={42} />
            </aside>
            <Line
              data={balanceData}
              options={{
                maintainAspectRatio: true,
                legend: {
                  display: false,
                },
              }}
            />
          </div>

          <div className="dashboard__sec2__stats">
            <aside>
              <div className="dashboard__sec2__stats__head">
                <h2>Statistics</h2>
                <p className="dots">⋮</p>
              </div>
              <div className="dashboard__sec2__stats__info">
                <p>
                  <Circle color="#00CCF2" /> Recieved
                </p>
                <p>
                  <Circle color="#FF007C" /> Transfered
                </p>
              </div>
            </aside>
            <Scatter data={statsData} />
            <Arrow style={{ marginLeft: "90%" }} bgColor="#00CCF2" />
          </div>
        </div>

        <div className="dashboard__sec3">
          <div className="dashboard__sec3__analytics">
            <div className="dashboard__sec3__analytics__head">
              <h2>Analytics</h2>
              <p className="dots">⋮</p>
            </div>
            <aside>
              <div className="dashboard__rect">
                <p>+24%</p>
                <p>02/20</p>
              </div>
              <div className="dashboard__sec3__analytics__data">
                <p>01/20</p>
                <p>03/20</p>
              </div>
            </aside>
          </div>

          <div className="dashboard__sec3__successful">
            <aside>
              <p>342.6K</p>
              <p className="small_font">Successfully completed</p>
            </aside>
            <Arrow bgColor="#00CCF2" />
          </div>

          <div className="dashboard__sec3__progress">
            <aside>
              <div className="dashboard__sec3__progressBar"></div>
              <div className="dashboard__sec3__progress__info">
                <h2>Status</h2>
                <p>Growth</p>
                <p>4.312</p>
              </div>
            </aside>
            <p className="dots">⋮</p>
          </div>
        </div>

        <div className="dashboard__sec4">
          <div className="dashboard__sec4__monthInfo">
            <div className="dashboard__sec4__monthInfo__invoices">
              <img src={CopyIcon} alt="Copy Icon" />
              <h2>2.8K</h2>
              <p>
                Monthly<br></br>Invoices
              </p>
              <Arrow
                bgColor="#789AF3"
                style={{ marginLeft: "75%", marginTop: "5px" }}
              />
            </div>
            <div className="dashboard__sec4__monthInfo__downloads">
              <img src={CopyIcon} alt="Copy Icon" />
              <h2>41.7K</h2>
              <p>
                Monthly<br></br>Downloads
              </p>
              <Arrow
                bgColor="#789AF3"
                style={{ marginLeft: "75%", marginTop: "5px" }}
              />
            </div>
          </div>

          <div className="dashboard__sec4__calendar">
            <div className="dashboard__sec4__calendar__head">
              <h2>Calendar</h2>
              <img src={ScrollArrows} alt="Scroll arrow" />
            </div>
            <aside>
              <div className="dashboard__sec4__calendar__timeLine">
                {calendarTime?.map((time) => (
                  <TimeLine key={time} time={time} />
                ))}
              </div>
            </aside>
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Dashboard;
