import "../styles/globals.css"
import { redirect } from "next/navigation"
export default function Page(): JSX.Element {
  return redirect("/auth")
}
