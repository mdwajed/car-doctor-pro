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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Social from "@/components/SocialLogin/Social";

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

const LoginPage = () => {
  const router = useRouter();
  console.log(router);
  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(resp);
    event.target.reset();

    router.push("/");
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
                    <b>Welcome ! Log in to continue.</b>
                  </Typography>
                </div>
                <form onSubmit={handleLogIn}>
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
                      placeholder="Your Password"
                    />
                  </FormControl>
                  <Button
                    fullWidth
                    type="submit"
                    sx={{ mt: 3, backgroundColor: "#FF3811" }}
                  >
                    Log in
                  </Button>
                </form>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="text-center mt-2"
                >
                  Or Sign In with
                </Typography>
             <Social/>
                <Typography
                  endDecorator={
                    <Link className="text-red-900 font-bold" href="/signup">
                      Sign up
                    </Link>
                  }
                  fontSize="sm"
                  sx={{ alignSelf: "center" }}
                >
                  Don&apos;t have an account?
                </Typography>
              </Sheet>
            </main>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
};

export default LoginPage;
