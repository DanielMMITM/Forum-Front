import { Box } from "@mui/material";
import profilePic from "@/assets/images/profile.webp";

interface CardAnswerProps {
  id: number;
  text: string;
  solution: boolean;
}

export const CardAnswers = ({ id, text, solution }: CardAnswerProps) => {
  return (
    <Box display={"flex"} flexDirection={"row"} key={id}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        flexBasis={"20%"}
        alignItems={"center"}
      >
        <Box display={"flex"} className="card-post__img">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="card-post__picture"
          />
        </Box>
        <Box display={"flex"}>
          <h2 className="">Leonel Messi</h2>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} flexBasis={"80%"}>
        <p>{text}</p>
      </Box>
    </Box>
  );
};
