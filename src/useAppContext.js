import { useContext } from "react";
import { Context } from "./context/Context";



export const useAppContext = () => {
        const context = useContext(Context);
        if (!context) {
            throw new Error('useAppContext must be used within a contextProvider')
        }
        return context;
    }
    