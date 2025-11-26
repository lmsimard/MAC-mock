# MAC-mock
MSS Anatomy Club mock bellringer platform

## version hx:
- versions 1 and 2 were two v different basic drafts, have been discarded
- 3.1 --> shown during 2025-10-20 MAC tech meeting
    new functions:
    - overall layout
    - timed image sequence display
    - answer input
    - answer correction
    - display of corrected answers to user
    other details: was hosted on Nelify but w/ modifications in early November, Netlify credits were maxed out :(
- 3.2 --> next functional version, got it to work on 2025-11-26
    new functions:
    - password for restricting access
    - username collection (based on 2 initials + last 4 numbers of cell phone + month and year of birth -> AB-1234-012025) --> can be fine-tuned to make sure it's unique later if we want?
    - answers entered are sent to a google sheets file that appends it as a new row with associated timestamp and created username
        -  Google Sheets: https://docs.google.com/spreadsheets/d/1g1EtjZEZH0Ahy_srABgM08HI03PrPXroFNoO58UzDMs/edit?usp=sharing
        -  Google Apps Script: https://script.google.com/u/0/home/projects/1h9ttBdesndFEIzF3MqAOlNJGBzVG3musUeFiYZAywFjOh3ZZpMOm6ySJ/edit (version used: 1126PM_2)
    - other minor UX improvements (e.g., flow of field selection/form sending for inputs of the password and username info entries)
- 3.3 --> want to add a field to send questions to ppl on the zoom (before exam review starts, so we can organize that a bit)
- 3.3V (original, img display is the right half of the screen) and 3.3H (img fills up the entire width of the screen, ~75% height and below is a scrollable answer input sectino). have both versions running to then compare and pick one

## more repo organisation coming soon

current version should be the one in main + additional branch with appropriately named version
