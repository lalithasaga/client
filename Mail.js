/*import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "./Redux/MailSlice";
import { useSelector } from "react-redux";

function Mail() {
  const navigate = useNavigate();

  const selectedMail = useSelector(selectOpenMail);

  const handleGoBack = () => {
    navigate("/Inbox");
  };

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton>
            <DeleteIcon />
          </IconButton>

        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className="mail-important" />
          </div>
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;*/

// Mail.js
// Mail.js

import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {selectOpenMail,deleteMail,}  from "./Redux/MailSlice";

import { db } from "../index";

function Mail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedMail = useSelector(selectOpenMail);

  const handleGoBack = () => {
    navigate("/Inbox");
  };

  const handleDelete = () => {
    if (selectedMail) {
      // Delete the data from the database
      db.collection("emails").doc(selectedMail.id).delete();
      dispatch(deleteMail()); // Dispatch the deleteMail action
    }
  };

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={handleGoBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      {selectedMail && (
        <div className="mail-body">
          <div className="mail-bodyHeader">
            <div className="mail-subject">
              <h2>{selectedMail.subject}</h2>
              <LabelImportantIcon className="mail-important" />
            </div>
            <p>{selectedMail.title}</p>
            <p className="mail-time">{selectedMail.time}</p>
          </div>
          <div className="mail-message">
            <p>{selectedMail.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mail;


