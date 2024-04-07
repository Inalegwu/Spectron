import { lucia } from "@/auth";
import db from "@/db";
import { userTable } from "@/db/schemas";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { z } from "zod";

const signupSchema=z.object({
    username:z.string(),
    password:z.string(),
})

interface ActionResult {
  error: unknown;
}

async function signup(formData: FormData): Promise<ActionResult> {
  "use server";

    const validated=signupSchema.safeParse(formData);

    if(!validated.success){
        return {
            error:validated.error.flatten().fieldErrors
        }
    }

    const hashedPassword=await new Argon2id().hash(validated.data.password);

    const newUser=await db.insert(userTable).values({
        id:generateId(10),
        username:validated.data.username,
        hashed_password:hashedPassword
    })

    const session=await lucia.createSession(newUser.id,{});
    const sessionCookie=await lucia.createSessionCookie(session.id);

    cookies().set(sessionCookie.name,sessionCookie.name,sessionCookie.attributes);

return redirect("/")

}



export default async function Page() {


  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-50">
      <div className="m-auto w-4/6 h-4/6 bg-white rounded-md px-5 py-10">
        <form action={signup} className="flex flex-col space-y-2">
          <label htmlFor="username">Username</label>
          <input
            className="bg-slate-100 rounded-md border-1 p-3 border-gray-100"
            name="username"
            id="username"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className="bg-slate-100 rounded-md border-1 p-3 border-gray-100"
            type="password"
            name="password"
            id="password"
            required
          />
          <br />
          <button
            type="submit"
            className="p-2 rounded-md text-purple-700 bg-purple-500 items-center justify-center"
          >
            Continue
          </button>
          <Link
            className="text-sm mt-4 text-purple-400 w-full items-center justify-center text-center"
            href="/login"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}
