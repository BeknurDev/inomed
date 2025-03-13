import { IconButton, Stack } from "@mui/material";
import { FC, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Flag from "react-flagkit";

const ChangeLangMenu: FC = () => {
  const [isSettingGroupVisible, setIsSettingGroupVisible] = useState(false);

  const handleSettingButtonClick = () => {
    setIsSettingGroupVisible((prev) => !prev);
  };

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  return (
    <>
      {isSettingGroupVisible && (
        <Stack direction={"row"} gap={2}>
          <IconButton onClick={() => changeLang("uz")}>
            <Flag country="UZ" style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton onClick={() => changeLang("ru")}>
            <Flag country="RU" style={{ width: 24, height: 24 }} />
          </IconButton>
          <IconButton onClick={() => changeLang("eng")}>
            <Flag country="GB" style={{ width: 24, height: 24 }} />
          </IconButton>
        </Stack>
      )}
      <IconButton color="inherit" sx={{ ml: 2}} onClick={handleSettingButtonClick}>
        {isSettingGroupVisible ? (
          <ClearIcon />
        ) : (
          <Flag
            country={
              localStorage.getItem("lang") == "uz"
                ? "UZ"
                : localStorage.getItem("lang") == "eng"
                ? "GB"
                : "RU"
            }
          />
        )}
      </IconButton>
    </>
  );
};

export default ChangeLangMenu;
