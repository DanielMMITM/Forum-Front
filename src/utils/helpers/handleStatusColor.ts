import { Status } from '../enum/Status';

export function handleStatusColor(status: string) {
  let color: string;
  let border: string;
  switch (status) {
    case Status.NOT_RESPONDED: {
      color = 'rgba(226, 159, 6, 0.5)';
      border = 'rgba(173, 123, 5, 0.8)';
      break;
    }
    case Status.NOT_SOLVED: {
      color = 'rgba(226, 45, 31, 0.5)';
      border = 'rgba(177, 12, 0, 0.8)';
      break;
    }
    case Status.SOLVED: {
      color = 'rgba(0, 210, 41, 0.5)';
      border = 'rgba(0, 126, 25, 0.8)';
      break;
    }
    case Status.CLOSED: {
      color = 'rgba(8, 0, 150, 0.5)';
      border = 'rgba(4, 0, 110, 0.8)';
      break;
    }
    default:
      color = 'rgba(31, 115, 226, 0.5)';
      border = 'rgba(24, 87, 169, 0.8)';

      break;
  }

  return { color, border };
}
