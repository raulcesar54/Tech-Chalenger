import { tv } from "tailwind-variants";

export const Card = tv({
  variants: {
    border: {
      fine: {
        base: "ring ring-primary ring-1",
      },
    },
    p: {
      none: {
        base: "p-0",
      },
      small: {
        base: "p-4",
      },
      "extra-small": {
        base: "p-3",
      },
    },
    shadow: {
      none: {
        base: "shadow-none",
      },
    },
    bg: {
      primary: {
        base: "!bg-primary-ligth",
      },
    },
    radius: {
      sm: {
        base: "rounded-[10px]",
      },
    },
    active: {
      true: {
        base: "!bg-primary-ligth",
      },
      false: {
        base: "!bg-ligth-gray",
      },
    },
  },
  slots: {
    base: "bg-white w-fit overflow-hidden flex w-full flex-col gap-8 p-6 text-medium-gray rounded-[20px] shadow-3xl",
    header: "bg-primary px-6 py-3 text-white flex items-center gap-4 ",
  },
  defaultVariants: {
    active: false,
  },
});
