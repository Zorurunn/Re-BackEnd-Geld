"use client";

export default function CategoryLine({ name, icon, id }) {
  return (
    <div className="flex gap-[10px] p-[10px]" id={id}>
      <div>{icon}</div>
      <div>{name}</div>
    </div>
  );
}
