import { formatStatus } from "@/utils/helpers/formatStatus";
import { handleStatusColor } from "@/utils/helpers/handleStatusColor";
import { Box } from "@mui/material";

interface Props {
  status: string;
}
export const StatusIndicator = ({ status }: Props) => {
  const { color, border } = handleStatusColor(status);
  return (
    <Box
      display={"flex"}
      padding={0.7}
      borderRadius={3}
      border={`2px solid ${border}`}
      sx={{ backgroundColor: color }}
      minWidth={"10rem"}
      justifyContent={"center"}
    >
      <h3>{formatStatus(status)}</h3>
    </Box>
  );
};
