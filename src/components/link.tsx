import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";


const link=cva({
    base:["font-semibold text-sm"],
    variants:{
        intent:{
            form:["bg-purple-500 text-sm font-medium"]
        }
    }
})

type Props=LinkProps & VariantProps<typeof link>

export default function LinkButton(props:Props){
    return <Link {...props} className={link({})}/>
}