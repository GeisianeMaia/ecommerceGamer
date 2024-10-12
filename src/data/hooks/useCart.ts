'use client'
import { useContext } from "react";
import ContextCart from "../contexts/CartContext";

const useCart = () => useContext(ContextCart)

export default useCart;