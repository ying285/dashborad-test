import React, { InputHTMLAttributes, FC, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { updateActions } from "../store/update";
import "../style/UpdateForm.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  url: string;
  btn: string;
  inputWidth: number;
  inputHeight: number;
}

const UpdateForm: FC<InputProps> = ({
  type,
  url,
  btn,
  inputWidth,
  inputHeight,
}) => {
  const dispatch = useDispatch();

  const updatedItem = useSelector(
    (state: RootState) => state.update.updatedItem
  );

  const changeHandler = (e: any) => {
    dispatch(updateActions.updateDesHandler(e.target?.value));
  };

  const updateHandler = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(url, updatedItem)
      .then((res) => {
        dispatch(updateActions.updateContent(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={updateHandler} className="updateForm">
      <input
        type={type}
        onChange={changeHandler}
        style={{ width: `${inputWidth}rem`, height: `${inputHeight}rem` }}
      />
      <Button>{btn}</Button>
    </form>
  );
};

export default UpdateForm;
