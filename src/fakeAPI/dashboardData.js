const dashboardData = () => {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Spent this month",
        fill: false,
        borderColor: "rgba(255,255,255,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
        lineTension: 0.4,
      },
    ],
  };

  const balanceData = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: "Total Balance",
        fill: false,
        lineTension: 0.1,
        borderColor: "#00CCF2",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const statsData = {
    labels: ["Scatter"],
    datasets: [
      {
        label: "Stats",
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 },
        ],
      },
    ],
  };

  const calendarTime = ["8", "8:30", "9", "9:30", "10", "10:30", "11", "11:30"];

  return { data, balanceData, statsData, calendarTime };
};

export default dashboardData();
