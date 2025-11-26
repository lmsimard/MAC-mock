# MAC-mock
MSS Anatomy Club mock bellringer platform

## version hx:
- versions 1 and 2 were two v different basic drafts, have been discarded
- [2025-10-20] 3.1 --> shown during MAC tech meeting
    - set up the overall layout
    - timed image sequence display
    - answer input
    - answer correction
    - display of corrected answers to user
    other details: was hosted on Nelify but w/ modifications in early November, Netlify credits were maxed out :(
- [2025-11-26] 3.2 --> next functional version with data collection functions
    - password for restricting access
    - username collection (based on 2 initials + last 4 numbers of cell phone + month and year of birth -> AB-1234-012025) --> can be fine-tuned to make sure it's unique later if we want?
    - answers entered are sent to a google sheets file that appends it as a new row with associated timestamp and created username
        -  Google Sheets: https://docs.google.com/spreadsheets/d/1g1EtjZEZH0Ahy_srABgM08HI03PrPXroFNoO58UzDMs/edit?usp=sharing
        -  Google Apps Script: https://script.google.com/u/0/home/projects/1h9ttBdesndFEIzF3MqAOlNJGBzVG3musUeFiYZAywFjOh3ZZpMOm6ySJ/edit (version used: 1126PM_2)
    - other minor UX improvements (e.g., flow of field selection/form sending for inputs of the password and username info entries)
- [2025-11-26] 3.2V and 3.2H
    - 3.2V: original, image display is the right half of the screen
    - 3.2H: cadaveric image fills up the entire width of the screen, ~75% height and below is a scrollable answer input section
    - want to have both versions running to then compare and pick one
- [NEXT BIG UPDATE PLANNED] 3.3 --> user additional question management system
  - want an integrate real-time collaborative question board where ppl can write in questions, see which other questions have been asked (grouped per station/question) + see the written ansewr or checkmark if the question was adressed orally. probably hae to use firestore (or similar thing) to do it. can wait a bit later
  - kinda miro board but no subscription service required, and integrated into the website and allows users to see their own answer input on the side (probably not the cadaveric images tho)
  - should allow for an easier time managing the MAC question periods
  - question of bandwidth usage, to evaluate later

## more repo organisation coming soon

current version should be the one in main + additional branch with appropriately named version
