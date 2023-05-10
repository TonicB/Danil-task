import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../storeRedax/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector