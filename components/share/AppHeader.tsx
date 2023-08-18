import s from "@/style/share/AppHeader.module.css";
export default function AppHeader({
  list,
  inClick = null,
  moduleNow,
}: {
  list: { label: string }[];
  inClick: Function | null;
  moduleNow: any;
}) {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <button
            onClick={() => inClick && inClick(item)}
            className={`${s.button_sm} ${
              moduleNow === item.label ? s.button_active : ""
            }`}
            key={index}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
