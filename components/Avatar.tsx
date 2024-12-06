interface Props {
  name: string;
  color: string;
  size: number;
}

export function Avatar({ name, color, size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full shadow-[0_0_0_2px_white]"
      width={size}
      height={size}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color}></circle>
      <text
        className="fill-white"
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontWeight="bold"
        fontSize={size / 1.5}
      >
        {name?.[0]?.toUpperCase() || "A"}
      </text>
    </svg>
  );
}
