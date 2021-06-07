import { useLocation } from "react-router-dom";

export default function useQuert() {
    return new URLSearchParams(useLocation().search);
}