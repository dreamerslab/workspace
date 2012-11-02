# DreamersLab F2E training course

The followings are some useful tips and guidelines base on our experience and some tech talks. These help our team write cleaner and better performance codes.



## HTML

### General Guidelines

- Use proper tags
    - ref: [google seo guide](http://static.googleusercontent.com/external_content/untrusted_dlcp/www.google.com/zh-TW//webmasters/docs/search-engine-optimization-starter-guide.pdf)
- Use HTML5 doc type but not semantic tags
    - Use HTML5 doc type to enable HTMLS features in advance browsers. However semantic tags seem not have direct effect on SEO, so we skip this part to avoid potential problems

- Avoid complicated( deep nested ) structure
- Structure your layout for better semantic understanding not for easier styling



## CSS

### Performance Tips

- Browser CSS engine apply CSS rule from "right" to "left"
    - ex. #header .nav li a <-- browser find "a" first then "li" ....

- The shorter rule the faster
    - ex. #header .nav li a --> slower, #header .nav a --> faster, .header_nav_a -->fastest

- No tag before class

- CSS priority: id > class > tag > universal
    - id --> #header
    - class --> .header
    - tag --> div, li, a, img...
    - universal: All other rules. ex. tree > [collapsed="true"]

- Best performance CSS
    - use id and class only, if possible
    - use id instead of class if possible
    - make universal rules to classes if possible
    - if really need to use universal rules make it as short as possible



### Team Work Rules

- Use Compass with SASS

- Use proper CSS reset, don't do * to reset all. Compass

- Modular the stylesheets
    - Split CSS to different files, put common modules in common folder and group them with files. For the rest of the CSS group them with controller( folder ) and action( file ) name

- Simplify things
    - End users does not care what technics you use as long as it's fast and easy to use. So use as less tricks as possible. The latest tech might look promising but not suitable for real world projects. It's ok to play with it on your personal projects or if the sites is for special audiences like web developers
    - Use images instead of svg, webfont, data-uri if possible
    - Depends on the project use as less CSS3 trick as possible

- Follow the performance tips above
    - Especially when coding with compass, please avoid nested styles

- Use Absolute layout instead of float layout if possible
    - Most of the time this speeds up the dev process and produces the most stable CSS for all browsers

- Basically use margin only for centering a element, use padding to adjust its position. Never use both on the same element for adjusting position.

- Use sprite if possible
    - This reduce the page requests a lot if use it well

- Always provide both 1x and 2x images
    - Speed is always more important than pretty. 3g connection is slow and has very limited requests at the same time

- Match id, class name to server rendered variable name
    - For example don't name the class as `.link` when it's variable is `url`

