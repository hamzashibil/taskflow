"use client"
import { Button } from "@/components/ui/button";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader,CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label"


export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    function handleLogin(){
        localStorage.setItem("isLoggedIn","true")
        router.push("/dashboard")

    } 

    return(
       
  <div className="min-h-screen flex items-center justify-center">
    <Card className="w-96">
      <CardHeader>
        <CardTitle>TaskFlow</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Label>Email</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </CardContent>
    </Card>
  </div>
)

    
}