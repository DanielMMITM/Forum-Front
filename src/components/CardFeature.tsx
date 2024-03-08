import { Box } from "@mui/material";
import sprite from "/src/assets/icons/sprite.svg";

interface CardProperties {
  iconName: string;
  title: string;
  description: string;
}

export const CardFeature = ({
  iconName,
  title,
  description,
}: CardProperties) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      flexBasis={"25%"}
      padding={"2rem"}
      mt={{ xs: "3rem", md: "0" }}
      className="feature"
    >
      <svg className="feature__icon">
        <use xlinkHref={`${sprite}${iconName}`}></use>
      </svg>
      <h2 className="heading-secondary--card-title">{title}</h2>
      <p className="text text--card">{description}</p>
    </Box>
  );
};
