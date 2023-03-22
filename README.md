# Startup

This will be a file for new discoveries, questions and things that I learn in my CS260 class.


I learned how to deal with merge conflicts, and the do's and dont's of pulling and pushing.


Here is my Pitch for my startup Website:

I had the idea to create a website a little like pottermore which is a website that allows fans of Harry Potter to take a little interactive quiz to be 'sorted' into their very own hogwarts house. Instead of focused on the harry potter houses though, I plan to make a website that allows its users to take a quiz-like experience to be sorted into one of the 4 types of elemental benders from Avatar the Last Airbender. I plan to make it stylistically appealing, as well as a little complex allowing its users to try many different combinations of answers to have a unique chance of being put into an element.

Other than the main feature of the quiz, I might implement an easter egg of allowing a certain sequence of answers to the quiz to allow the user to be sorted not into one element, but all 4, and thus becoming the "avatar". At the end of the quiz the user will be greeted with an artistic representation of their particular element/nation.

https://github.com/KCcooldude11/Startup/blob/b71c3c176ee49fd21d89d072528e6b50f76e29a5/Screenshot%202023-01-12%20144519.png


So for future reference, when navigating vim, typing i puts you into insert mode where you can edit files. Pressing ESC will then get you out of insert mode. Finally, typing :wq will write to the file (w) and quit (q)
Also, be very careful when typing file names to get them exactly correct. for example when typing "sudo vim Caddyfile" do NOT type CaddyFile. This will create a new file rather than access the already existing Caddyfile.

Here are some html special characters that have codes to put them on the page:
& = &amp;
< = &lt;
> = &gt;
smiley face = &#128512;

Simon.Html reflection:
From working on the simon.html assignment I learned about hexadecimal colors, and how to apply both normal predefined colors and hexadecimal colors to text and shapes. I also learned about changing font, size and positioning of text, as well as how to take input from users in multiple different ways like buttons, uploading files, emails etc.

<<<<<<< HEAD
CSS - you can add a shadow to text using the following:
text-shadow: 3px 3px 1px #cccccc;
the px numbers specify the xyz positioning of the shadow, and the #cccccc tells it to be black.

Simon CSS:
From this assignment I learned much more about how to impliment CSS boostrap, CSS, and basic HTML in many different ways. For example I messed around first just with a basic paragraph in html and used basic css to format a line on the score.html text page. Then I messed around with the original code for that page having to do with bootstrap tables, and found out how they work and how simple yet clean they look!

I also learned how to take images from the web and set them as a a background, and how you can do so for any different block of the page such as a header, footer, main etc.
=======

From the Flex assignment I learned and messed around with flex and hmtl <button> to make a page that is
  somewhat interactible. *I would still like to learn how to use a javascript with the <button> to
  do something when the button is pressed rather than just animate the button.

  
  Simon.css:
  While doing this assignment I learned the different strengths of boostrap vs regular css such as
  the usage of boostrap tables. I spent some time trying to make a table from scratch in css which proved very 
  difficult, however, the boostrap tables were easy to work with. I also learned how to add background images for 
  pages and such.
  
  Startup Html/CSS
  
    This assignment taught me A LOT about writing my own css, using boostrap, and even a little bit of basic javascript to get look scroll effect animations. One big thing I learned is that to save time you can make a section class in which you can include images, text and other objects and within the section css part include universal positioning, padding, width/height etc. and then all of the objects within section will fallback on those presets. This also caused me a little confusion at times though at times.
    Box-shadow works with a button, even if button is reshaped into a elipse.
    You can animate text or even an image with (example->) @keyframes _animationname{
    0%{opacity: 0;}
    100%{opacity: 1;}
    }
    font-weight can give text a wider brushstroke appearance, allowing for a kind of font
    customization outside of font presets you may be working with
    To give a background a cooler look rather than a simple solid color you can use:
    linear-gradient(1 color, 2nd color) and it will fade from on color to another
    using #btn:hover you can add a color change or some animation when the
    user hovers over a button, and with #btn:active you can add what happens
    when a user presses the button.
  
  Simon JavaScript:
  
    It was really fun to mess around with the extra effects added to the simon game using javascript. 
    I think what I learned the most is how to store input from a user and then call on that input
    later to store as a variable such as a username, pressed choice or so. This will be very helpful
    for the quiz I am going to make for the finished startup project so I should look back on this project 
    when working on that quiz portion.
    I might consider adding sound effects to my startup as well, as I was able to succesfully use the base of simon
    and replace the sound effects in some cases with my own royalty free sound effects. ALthough it was difficult
    because sound effects with even 2 seconds of sound lasted too long and made the game take forever, 
    atleast with the default settings.
  
  Startup JavaSscript:
  This stage of the Startup was super fun because I was able to actually do some cool things using
  javascript to make certain actions do something else. For example, I had a quiz that would
  use a random number generator function (between 1 and 4) to choose a random element for the
  user to become. Now the ideal end goal is to make it so their quiz submissions directly
  influence the result of the element, but it was cool to work towards a still difficult yet
  easier way to give the user a result before I actually figure out better how to impliment
  their real results. I also learned a lot more about page formatting and buttons. To accomplish the quiz
  I figured out how to make a button link to a javascript function, and then how to make that javascript function
  with if statements send the user to various other html pages i made using:
  window.location.href = "water.html";
  for example.
  this code will send the user to that html page!
  
  Simon Service:
  So I didn't make a lot of major changes from my previous design of simon, but it was cool to be able to host it in a different way than before with node express. I ran into some problems with deploying that came down to one missing letter due to a mishap with pasting, so lesson learned, always double check when you paste in code...
all in all though, I learned quite a bit from this, technicalities and such. It is cool now though that when the system restarts the scores will be reset as well.
  
