import React, { useEffect } from "react";
import axios from "axios";
import DataFetch from "../hooks/dataFetch";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { tabActions } from "../store/tab";
import { updateActions } from "../store/update";
import "../style/TrlData.scss";

const TrlData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api-test.innoloft.com/trl/")
      .then((res) => {
        dispatch(tabActions.fetchTrl(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(updateActions.selectedHandler(e.target.value));
  };

  const trlData = useSelector((state: RootState) => state.tab.trlData);
  const selectedData = useSelector(
    (state: RootState) => state.update.selectedData
  );

  console.log(selectedData);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put("https://api-test.innoloft.com/trl/", selectedData)
      .then((res) => {
        dispatch(updateActions.updateContent(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = useSelector((state: RootState) => state.update.updateData);
  console.log(updateData);

  const updateDataItem = updateData?.map((el: any) => el.name);

  const config = useSelector((state: RootState) => state.config.config);
  return (
    <div className="trldata">
      <form onSubmit={submitHandler} className="trldata_form">
        <label>{updateDataItem && updateDataItem[0]}</label>
        <select name="trl" id="trl" onChange={selectHandler}>
          {trlData &&
            trlData?.map((el: any) => (
              <option key={el.id}>{el.name.slice(1, 25)}</option>
            ))}
        </select>
        <input
          type="submit"
          value="Submit"
          style={
            config?.mainColor
              ? { backgroundColor: config.mainColor }
              : { backgroundColor: "#272e71" }
          }
        />
      </form>
    </div>
  );
};
export default TrlData;
