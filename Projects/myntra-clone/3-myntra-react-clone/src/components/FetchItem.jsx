import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItem = () => {
  const { fetchDone, currentlyFetching } = useSelector(
    (state) => state.fetchStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone || currentlyFetching) return;

    const fetchData = async () => {
      try {
        dispatch(fetchStatusActions.markFetchingStarted());
        const res = await fetch("http://localhost:8080/items");
        const data = await res.json();

        dispatch(itemsActions.addInitialItems(data));
        dispatch(fetchStatusActions.markFetchDone());
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        dispatch(fetchStatusActions.markFetchingFinished());
      }
    };

    fetchData();
  }, [fetchDone, currentlyFetching, dispatch]);

  return <></>;
};

export default FetchItem;
