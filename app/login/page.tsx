"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"

export default function LoginPage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")


  function handleSubmit(){
  if(!email || !password){
    setError("Please enter email and password")
    return
  }
  if(!email.includes("@") || !email.includes(".")){
    setError("Please enter a valid email address")
    return
  }
  if(isLogin){
    // Login logic
    const savedUser = localStorage.getItem("user")
    if(!savedUser){
      setError("No account found. Please register first.")
      return
    }
    const user = JSON.parse(savedUser)
    if(user.email !== email || user.password !== password){
      setError("Invalid email or password")
      return
    }
  } else {
    // Register logic
    if(!name){
      setError("Please enter your name")
      return
    }
    localStorage.setItem("user", JSON.stringify({ name, email, password }))
  }
  setError("")
  localStorage.setItem("isLoggedIn","true")
  router.push("/dashboard")
}

 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="absolute top-4 right-4">
      <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </div>
    <Card className="w-96 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white text-center text-2xl">
          {isLogin ? "Welcome Back" : "Create Account"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {!isLogin && (
          <>
            <Label className="dark:text-gray-200">Name</Label>
            <Input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          </>
        )}
        <Label className="dark:text-gray-200">Email</Label>
        <Input type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <Label className="dark:text-gray-200">Password</Label>
        <Input type="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button onClick={handleSubmit} className="w-full">
          {isLogin ? "Login" : "Create Account"}
        </Button>
        <p className="text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => { setIsLogin(!isLogin); setError("") }} className="text-blue-500 ml-1 hover:underline">
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </CardContent>
    </Card>
  </div>
)
}