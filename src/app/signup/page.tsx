import { lucia } from "@/auth";
import Button from "@/components/button";
import Input from "@/components/input";
import db from "@/db";
import { userTable } from "@/db/schemas";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { z } from "zod";

const signupSchema = z.object({
  username: z.string(),
  password: z.string(),
});

interface ActionResult {
  error: unknown;
}

async function signup(formData: FormData): Promise<ActionResult> {
  "use server";

  const validated = signupSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return {
      error: validated.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = await new Argon2id().hash(validated.data.password);
  const userId = generateId(15);

  await db.insert(userTable).values({
    id: userId,
    username: validated.data.username,
    hashed_password: hashedPassword,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.name,
    sessionCookie.attributes,
  );

  return redirect("/");
}

export default async function Page() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-black">
      <form
        action={signup}
        className="flex flex-col space-y-2m-auto w-4/6 bg-gray-600/10 text-white rounded-md px-5 py-10"
      >
        <label htmlFor="username">Username</label>
        <Input
          className="bg-slate-100 rounded-md border-1 p-3 border-gray-100"
          name="username"
          intent="form"
          id="username"
          placeholder="Username"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <Input
          className="bg-slate-100 rounded-md border-1 p-3 border-gray-100"
          type="password"
          name="password"
          intent="form"
          id="password"
          placeholder="Password"
          required
        />
        <br />
        <Button
          type="submit"
          intent="primary"
          className="p-2 rounded-md text-purple-700 bg-purple-500 items-center justify-center"
        >
          Continue
        </Button>
        <div className="w-full flex items-center justify-start">
          <p className="text-sm mt-4">
            Already have an account ?{" "}
            <Link className=" text-purple-400" href="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
