import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const overlayStyles =
  "p-5 absolute z-30 flex h-[100%] w-fit flex-col justify-center items-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 overflow-hidden";
const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
