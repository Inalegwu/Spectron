import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";

const input = cva("px-2 py-2 mt-1 rounded-sm", {
  variants: {
    intent: {
      form: ["bg-gray-500/10"],
    },
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export default function Input({ intent, ...rest }: InputProps) {
  return <input {...rest} className={input({ intent })} />;
}
