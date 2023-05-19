# Front-end Style Guide

## TODO

### First part

- Homepage (Select rock-paper-scissors page)
- Game Route (Computer also selects)
- Rock - paper - scissors algorithms with timer
- Score state (Win for computer if score is -3 or win for user if score is +3) and show Play Again component
- Rules button

### Second Part

- Modal component
- Responsive design
- Modal left to right or right to left animation


## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1366px

## Colors

### Primary

<div class="color-palette" style="background:linear-gradient(90deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);">
    Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
</div>
<div class="color-palette" style="background:linear-gradient(90deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);">
    Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
</div>
<div class="color-palette" style="background:linear-gradient(90deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);">
    Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
</div>
<div class="color-palette" style="background:linear-gradient(90deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%);">
    Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)
</div>

### Neutral

<div class="color-palette" style="background-color:hsl(229, 25%, 31%);">
    Dark Text: hsl(229, 25%, 31%)
</div>
<div class="color-palette" style="background-color:hsl(229, 64%, 46%);">
    Score Text: hsl(229, 64%, 46%)
</div>
<div class="color-palette" style="background-color:hsl(217, 16%, 45%);">
    Header Outline: hsl(217, 16%, 45%)
</div>

### Background

<div class="color-palette" style="background:linear-gradient(90deg, hsl(214, 47%, 23%) 0%, hsl(214, 47%, 23%) 100%);">
    Radial Gradient: hsl(214, 47%, 23%) to hsl(214, 47%, 23%)
</div>


## Fonts (Barlow Semi Condensed - 600,700)

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,600;0,700;1,600;1,700&family=Inter&display=swap" rel="stylesheet">

## React Router
    npm i -D react-router-dom
    npm i -D react-router-dom@latest

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        ...
        <Route path="*" element={<div>No page found</div>} />
      </Routes>
    </BrowserRouter>

<style>
    .color-palette{
        width:300px;
        height:100px;
        border:1px solid black;
        color:black;
        font-weight:bold;
    }
</style>