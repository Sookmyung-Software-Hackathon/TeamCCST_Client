export const ArrowDownAnimation = `
  @keyframes ArrowDown {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(180deg);
    }
  }
`;

export const ArrowUpAnimation = `
  @keyframes ArrowUp {
    from {
      transform: rotate(180deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const RotateAnimation = `
  @keyframes rotation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const UpDownAnimation = `
  @keyframes upNdown {
      0% {
        transform: translate(-50%,20%);
      }
      25% {
        transform: translate(-50%,-20%);
      }
      50% {
        transform: translate(-50%,20%);
      }
      75% {
        transform: translate(-50%,-20%);
      }
      100% {
        transform: translate(-50%,20%);
      }
    }
`;
