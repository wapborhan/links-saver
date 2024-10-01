import React from "react";
import {
  FaAddressCard,
  FaBicycle,
  FaBriefcase,
  FaBus,
  FaCalendarAlt,
  FaCamera,
  FaCar,
  FaChartBar,
  FaCode,
  FaEnvelope,
  FaFilm,
  FaFolder,
  FaFootballBall,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaKeyboard,
  FaMapMarkerAlt,
  FaMicrochip,
  FaMobileAlt,
  FaMoneyBillWave,
  FaMoon,
  FaMusic,
  FaNewspaper,
  FaPaintBrush,
  FaPlane,
  FaPlaneDeparture,
  FaPlus,
  FaRobot,
  FaShareAlt,
  FaShip,
  FaShoppingCart,
  FaStar,
  FaSun,
  FaTrain,
  FaUser,
  FaUtensils,
} from "react-icons/fa";

import { FaPencil } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

const Icon = ({ iconName, size }) => {
  const iconComponents = {
    FaAddressCard: <FaAddressCard size={size} />,
    FaCode: <FaCode size={size} />,
    FaFolder: <FaFolder size={size} />,
    FaHome: <FaHome size={size} />,
    FaKeyboard: <FaKeyboard size={size} />,
    FaPaintBrush: <FaPaintBrush size={size} />,
    FaPlus: <FaPlus size={size} />,
    FaRobot: <FaRobot size={size} />,
    FaShareAlt: <FaShareAlt size={size} />,
    FaUser: <FaUser size={size} />,
    FaPencil: <FaPencil size={size} />,
    MdFavorite: <MdFavorite size={size} />,
    FaShoppingCart: <FaShoppingCart size={size} />,
    FaGraduationCap: <FaGraduationCap size={size} />,
    FaNewspaper: <FaNewspaper size={size} />,
    FaHeartbeat: <FaHeartbeat size={size} />,
    FaFilm: <FaFilm size={size} />,
    FaMicrochip: <FaMicrochip size={size} />,
    FaPlane: <FaPlane size={size} />,
    FaUtensils: <FaUtensils size={size} />,
    FaFootballBall: <FaFootballBall size={size} />,
    Music: <FaMusic size={size} />,
    FaMobileAlt: <FaMobileAlt size={size} />,
    FaEnvelope: <FaEnvelope size={size} />,
    FaCalendarAlt: <FaCalendarAlt size={size} />,
    FaChartBar: <FaChartBar size={size} />,
    FaMapMarkerAlt: <FaMapMarkerAlt size={size} />,
    FaCamera: <FaCamera size={size} />,
    FaSun: <FaSun size={size} />,
    FaMoon: <FaMoon size={size} />,
    FaStar: <FaStar size={size} />,
    FaBicycle: <FaBicycle size={size} />,
    FaCar: <FaCar size={size} />,
    FaBus: <FaBus size={size} />,
    FaTrain: <FaTrain size={size} />,
    FaShip: <FaShip size={size} />,
    FaPlaneDeparture: <FaPlaneDeparture size={size} />,
    FaMoneyBillWave: <FaMoneyBillWave size={size} />,
    FaBriefcase: <FaBriefcase size={size} />,
    default: <FaFolder size={size} />,
  };

  return iconComponents[iconName] || iconComponents.default;
};

export default Icon;
