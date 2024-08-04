import { tv } from "tailwind-variants";

export const Button = tv({
  variants: {
    p: {
      xs: "!py-[10px]",
    },
    disabled: {
      true: "text-medium-gray ring-medium-gray",
    },
  },
  base: "w-full text-primary ring ring-primary ring-1 rounded-[10px] p-6 whitespace-nowrap",
});
