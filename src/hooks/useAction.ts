import { useDispatch } from "react-redux";
import { actions as todoActions } from "../store/todos/todo.slice";
import { bindActionCreators } from "redux";
import { useMemo } from "react";

export const useAction = () => {
  const rootActions = { ...todoActions };
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
