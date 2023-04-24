import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType } from "./types";

export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We define and provide information about the art of the training",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State to The Art Facilities",
    description:
      "We define and provide information about the art of the training",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "We define and provide information about the art of the training",
  },
];
