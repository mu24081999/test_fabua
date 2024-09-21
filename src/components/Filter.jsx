import { Search as SearchIcon } from "@mui/icons-material"; // Material UI search icon or use your own icon
import { debounce } from "lodash";
import { ActiveStatus, StatusOptions } from "../fields/tabsFields";
import {
  IconButton,
  InputAdornment,
  Grid2 as Grid,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { StatusTabs } from "./shareComponent/CustomTab";
import { CsvData } from "./CsvData";

const Filters = ({
  onFilterChange,
  onSearch,
  entriesValue,
  onStatusChange,
  entries,
  total,
  heading,
  btnText,
}) => {
  const [statusValue, setStatusValue] = useState(0);
  const [isSus, setIsSus] = useState(0);
  const onHandleChange = (e, val) => {
    setStatusValue(val);
    if (val === 0) onStatusChange({ status: null });
    else onStatusChange({ status: val });
  };
  const onActiveChange = (e, val) => {
    setIsSus(val);
    if (val === 0) onFilterChange({ is_suspended: null });
    else onFilterChange({ is_suspended: val });
  };
  const handleSearch = debounce((value) => {
    console.log(value);
    onSearch(value);
  }, 500);

  return (
    <div
      className="col-md-11 headerFilter main main-header "
      // style={{ marginLeft: "7em" }}
    >
      {/* Third Row........................ */}
      <Stack
        direction={{ lg: "row", md: "column", xs: "column" }}
        alignItems={{ lg: "space-between", md: "flex-start", xs: "flex-start" }}
        justifyContent={{
          lg: "space-between",
          md: "flex-start",
          xs: "flex-start",
        }}
        margin={2}
        sx={{ width: "90%", ml: 15 }}
      >
        <Stack
          direction="row"
          // justifyContent="space-between"
          justifyContent={{
            lg: "space-between",
            md: "center",
            sm: "center",
            xs: "center",
          }}
          alignItems="center"
          display={"flex"}
          flexWrap={"wrap"}
        >
          <StatusTabs
            onHandleChange={onActiveChange}
            tabOptions={ActiveStatus}
            statusValue={isSus}
          />

          <StatusTabs
            statusValue={statusValue}
            onHandleChange={onHandleChange}
            tabOptions={StatusOptions}
          />
        </Stack>
        <div className="search">
          <TextField
            className=""
            sx={{
              borderRadius: "10px",
              padding: "5px",
              width: "400px",
            }}
            placeholder="Search"
            fullWidth
            variant="outlined"
            size="small"
            onChange={(e) => handleSearch({ search: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Stack>
    </div>
  );
};
export default Filters;
