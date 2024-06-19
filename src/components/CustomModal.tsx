import { ActionTypes } from "@/utils/types/commonTypes";
import { CustomAxiosError } from "@/utils/types/errorTypes";
import { PostResponse } from "@/utils/types/postTypes";
import { Button, Dialog, Grid, Typography } from "@mui/material";
import { UseMutateFunction } from "@tanstack/react-query";
import CancelIcon from "@mui/icons-material/Cancel";

interface ModalProps {
  handleCloseModal: () => void;
  open: boolean;
  title: string;
  content: string;
  action: ActionTypes;
  doAction: UseMutateFunction<String, CustomAxiosError, number, unknown>;
  post: PostResponse;
}

export const CustomModal = ({
  handleCloseModal,
  open,
  title,
  content,
  action,
  doAction,
  post,
}: ModalProps) => {
  return (
    <Dialog
      className="modal"
      fullWidth
      maxWidth={"sm"}
      open={open}
      onClose={handleCloseModal}
    >
      <CancelIcon className="modal__cancel-icon" onClick={handleCloseModal} />
      <Grid container spacing={2} className="modal-container">
        <Grid item xs={12}>
          <h2 className="heading-secondary--modal__title">{title}</h2>
          <Typography className="text--modal" variant="body1">
            {content}
          </Typography>
        </Grid>
        <Grid container item spacing={2} xs={8} sm={8}>
          <Grid display={"flex"} item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <Button
              className="text--button"
              fullWidth
              color="primary"
              variant="contained"
              onClick={() =>
                action === "Delete"
                  ? doAction(post.id, { onSuccess: handleCloseModal })
                  : null
              }
            >
              Confirm
            </Button>
          </Grid>
          <Grid display={"flex"} item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Button
              className="text--button"
              onClick={handleCloseModal}
              fullWidth
              color="error"
              variant="contained"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
