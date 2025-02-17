import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../features/job/jobSlice.js";
import { Filter } from "lucide-react"; // Lucide Icon for UI
import Divider from "@mui/material/Divider"; // Material UI for better layout

const filterData = [
  {
    filterType: "Location",
    array: ["Dubai", "Canada", "Germany", "Australia", "UK"],
  },
  {
    filterType: "Industry",
    array: ["Software Engineer", "Data Scientist", "AI Researcher"],
  },
  {
    filterType: "Experience Level",
    array: ["Entry Level", "Mid Level", "Senior Level"],
  },
  {
    filterType: "Salary",
    array: ["$0-$50k", "$50k-$100k", "$100k-$200k", "$200k+"], // Updated salary ranges in dollars
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
    dispatch(setSearchedQuery(value)); // Dispatching here prevents redundant re-renders
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
      <div className="flex items-center gap-2">
        <Filter className="text-cyan-600 dark:text-blue-400" size={24} />
        <h1 className="font-bold text-xl text-gray-800 dark:text-white">Filter Jobs</h1>
      </div>
      <Divider className="my-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-semibold text-lg text-gray-700 dark:text-gray-300">
              {data.filterType}
            </h2>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className="text-gray-600 dark:text-gray-400">
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
