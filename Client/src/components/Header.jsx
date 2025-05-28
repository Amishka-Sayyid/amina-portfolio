import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const pages = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#22223B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#F2E9E4",
              textDecoration: "none",
            }}
          >
            Amina Ibrahim
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "#4A4E69",
                    "&:hover": {
                      backgroundColor: "#9A8C98",
                    },
                  }}
                >
                  <a
                    href={page.link}
                    style={{
                      textDecoration: "none",
                      color: "#F2E9E4",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#F2E9E4",
              textDecoration: "none",
            }}
          >
            Amina
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.link}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#F2E9E4",
                  display: "block",
                  "&:hover": {
                    color: "#C9ADA7",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* CV Download */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Download CV">
              <a
                href="/cv/amina-cv.pdf"
                download
                style={{ textDecoration: "none" }}
              >
                {/* Desktop Button */}
                <Button
                  variant="contained"
                  sx={{
                    display: { xs: "none", md: "inline-flex" },
                    backgroundColor: "#F2E9E4",
                    color: "#4A4E69",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#e4d7d0",
                    },
                  }}
                >
                  Download CV
                </Button>

                {/* Mobile Icon */}
                <IconButton
                  sx={{
                    display: { xs: "inline-flex", md: "none" },
                    backgroundColor: "#F2E9E4",
                    color: "#4A4E69",
                    "&:hover": {
                      backgroundColor: "#e4d7d0",
                    },
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </a>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
