"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbCrutches, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiPartyPopper,
  GiPhotoCamera,
  GiSaxophone,
  GiWashingMachine,
  GiBabyBottle,
  GiWrench,
  GiFarmTractor,
  GiHammerNails,
  GiFlatHammer,
  GiToolbox,
  GiDress,
  GiDrinking,
  GiCelebrationFire,
  GiDrill,
  GiTrumpet,
  GiGuitar,
  GiMountainClimbing,
  GiTie,
  GiLargeDress,
  GiPaddleSteamer,
  GiSurfBoard,
  GiLockedFortress,
  GiLockers,
  GiMedicalPack,
} from "react-icons/gi";
import { FaSkiing, FaTractor, FaWheelchair } from "react-icons/fa";
import { BsPersonWheelchair, BsProjector, BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {
  MdOutlineVilla,
  MdDirectionsBike,
  MdStorage,
  MdComputer,
  MdWheelchairPickup,
} from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { BiLockOpen } from "react-icons/bi";

export const categories = [
  {
    label: "Formal Wear",
    icon: GiLargeDress,
    description: "",
  },
  {
    label: "Bikes",
    icon: MdDirectionsBike,
    description: "",
  },
  {
    label: "Party",
    icon: GiPartyPopper,
    description: "",
  },
  {
    label: "Tools",
    icon: GiDrill,
    description: "",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "",
  },
  {
    label: "Climbing",
    icon: GiMountainClimbing,
    description: "",
  },
  {
    label: "Baby",
    icon: GiBabyBottle,
    description: "",
  },
  {
    label: "Watercraft",
    icon: GiSurfBoard,
    description: "",
  },
  {
    label: "Cameras",
    icon: GiPhotoCamera,
    description: "",
  },
  {
    label: "Music",
    icon: GiGuitar,
    description: "",
  },
  {
    label: "Appliances",
    icon: GiWashingMachine,
    description: "",
  },
  {
    label: "Lawn",
    icon: FaTractor,
    description: "",
  },
  {
    label: "Medical",
    icon: BsPersonWheelchair,
    description: "",
  },
  {
    label: "Tech",
    icon: BsProjector,
    description: "",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
