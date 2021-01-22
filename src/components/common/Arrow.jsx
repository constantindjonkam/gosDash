const Arrow = ({ bgColor, style }) => {
  return (
    <svg
      id="More_Button"
      data-name="More Button"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 40 40"
      style={{ ...style, cursor: "pointer" }}
    >
      <circle
        id="Ellipse_40"
        data-name="Ellipse 40"
        cx="20"
        cy="20"
        r="20"
        fill={bgColor}
      />
      <g
        id="Group_72"
        data-name="Group 72"
        transform="translate(-818.715 317.778) rotate(-45)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          x1="14.45"
          transform="translate(796.55 382)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          x2="6"
          y2="6"
          transform="translate(805 376)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          y1="6.157"
          x2="5.257"
          transform="translate(805.743 382)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default Arrow;
