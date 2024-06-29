"use client";
import Image from "next/image";
import * as React from "react";
import { useColorScheme, CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import Social from "@/components/SocialLogin/Social";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <Button variant="soft">
        <DarkModeOutlined />
      </Button>
    );
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? <DarkModeOutlined /> : <LightModeOutlined />}
    </Button>
  );
}

const SignUpPage = () => {
  const router = useRouter();
  const session = useSession();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUsers = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(newUsers);
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUsers),
    });
    if (session.status === "authenticated") {
      router.push("/");
    }
  };
  return (
    <CssVarsProvider>
      <div className="max-w-7xl mx-auto my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="mt-10">
            <Image
              src="/assets/images/login/login.svg"
              width="440"
              height="440"
              alt="login image"
            />
          </div>
          <div>
            <main>
              <ModeToggle />
              <CssBaseline />
              <Sheet
                sx={{
                  width: 400,
                  mx: "auto",
                  mb: 16, // margin left & right
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: "sm",
                  boxShadow: "md",
                }}
                variant="outlined"
              >
                <div>
                  <Typography level="h4" component="h1">
                    <b className="text-red-900">Welcome ! Sign up to join.</b>
                  </Typography>
                </div>
                <form onSubmit={handleSignUp}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      // html input attribute
                      name="name"
                      type="name"
                      placeholder="Your Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      // html input attribute
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                      // html input attribute
                      name="password"
                      type="password"
                      placeholder="password"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{ mt: 3, backgroundColor: "#FF3811" }}
                  >
                    Sign Up
                  </Button>
                </form>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center mt-2"
                >
                  Or Sign Up with
                </Typography>
                <Social />
                <Typography
                  endDecorator={
                    <Link className="text-red-900 font-bold" href="/login">
                      Log in
                    </Link>
                  }
                  fontSize="sm"
                  sx={{ alignSelf: "center" }}
                >
                  Already have an account?
                </Typography>
              </Sheet>
            </main>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
};

export default SignUpPage;
