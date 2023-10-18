import React, { useEffect, useState } from "react";
import styles from "./Question.module.css";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SingleCorrectType from "../Compoments/SingleCorrectType";
import MultipleCorrrectType from "../Compoments/MultipleCorrectType";
import FileUpload from "../Compoments/FileUpload";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
const Questions = () => {
  const [questionType, setQuestionType] = useState("");
  const [optionData,setOptionData]=useState([])
  const handleQuestionChange = (event) => {
    setQuestionType(event.target.value);
  };

  const TypeOfQuestion = [
    "Short Answer",
    "Multiple Correct Type",
    "Single Correct Type",
    "File Upload",
  ];

  const handleSingleOptionData=(data)=>{
       setOptionData(data)
  }

  const handleMultipleOptionData=(data)=>{
    setOptionData(data)
}
useEffect(()=>{
  console.log(optionData)
},[optionData])
  
  const TypeOfQuestionRender = () => {
    if (questionType === "Single Correct Type") {
      return <SingleCorrectType handleSingleOptionData={handleSingleOptionData} />;
    } else if (questionType === "Multiple Correct Type") {
      return <MultipleCorrrectType handleMultipleOptionData={handleMultipleOptionData} />;
    } else if (questionType === "File Upload") {
      return <FileUpload />;
    }
  };
  const handleDeleteQuestion=()=>{
    
  }

  return (
    <div className={styles.Container}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          paddingTop: "3%",
        }}
      >
        <div className={styles.Question}>
          <Input placeholder="Question" fullWidth />
        </div>

        <div className={styles.QuestionType}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={questionType}
              label="Question Type"
              onChange={handleQuestionChange}
            >
              {TypeOfQuestion.map((item, idx) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div
        style={{
          paddingTop: "2%",
          paddingBottom: "2%",
          display: "flex",
          marginLeft: "8%",
          width: "100%",
        }}
      >
        {TypeOfQuestionRender()}
      </div>
      
      <div className={styles.Footer}>
        <div >
        <div>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteQuestion()}
          >
            <DeleteIcon />
          </IconButton>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
