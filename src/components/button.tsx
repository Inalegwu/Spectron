import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";


const button=cva("rounded-sm px-4 py-2",{
    variants:{
        intent:{
            primary:"bg-purple-500 text-purple-900 text-sm"
        }
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof button>{}


export default function Button({intent,...rest}:ButtonProps){
    return <button {...rest} className={button({intent})}/>
}