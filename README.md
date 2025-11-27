# MAC-mock
MSS Anatomy Club mock bellringer platform

**password used for test versions: cingulate**

## version hx:
*current version is the one in main + additional branch with appropriately named version*
- *[x] versions 1 and 2 were two v different basic drafts, have been discarded
- *[x] [2025-10-20] 3.1 --> shown during MAC tech meeting
    - set up the overall layout
    - timed image sequence display
    - answer input
    - answer correction
    - display of corrected answers to user
    other details: was hosted on Nelify but w/ modifications in early November, Netlify free credits were maxed out
- *[x] [2025-11-26] 3.2 --> next functional version with data collection functions (took a while to get everything to work, sorry!)
    - password for restricting access
    - username collection (based on 2 initials + last 4 numbers of cell phone + month and year of birth -> AB-1234-012025) --> can be fine-tuned to make sure it's unique later if we want?
    - answers entered are sent to a google sheets file that appends it as a new row with associated timestamp and created username
      -  Google Sheets: https://docs.google.com/spreadsheets/d/1g1EtjZEZH0Ahy_srABgM08HI03PrPXroFNoO58UzDMs/edit?usp=sharing
        - when/if you refresh after submitting answers and sending them to the spreadsheet, the data row is written again (but w/ new timestamp). We do get a timestamp down to the second for each row so can sort it out manually later ig
      -  Google Apps Script: https://script.google.com/u/0/home/projects/1h9ttBdesndFEIzF3MqAOlNJGBzVG3musUeFiYZAywFjOh3ZZpMOm6ySJ/edit (version used: 1126PM_2)
    - other minor UX improvements (e.g., flow of field selection/form sending for inputs of the password and username info entries)
    - now hosted (manual deployment) on Cloudflare
      - ORIGINAL IMAGE DISPLAY: mac-mock-3-2-original-vert.simardleamai.workers.dev
      - WIDER IMAGE DISPLAY: macmock-3-2-horiz.simardleamai.workers.dev
    - POTENTIAL CONCERNS/CURRENT ISSUES (nothing huge)
      - usernames aren't necessarily unique if two ppl have the same initials, last 4 digits of phone number, and month/year of birth. can add a category later to reduce chances of duplicates
      - add email for tech support contact in the footer? or remove the line altogether
      - Pw-protection = likely not very high level
        - wanted to keep it simple so only used a javascript function added to the code itself. otherwise would probably have to use a third-party resource if we want to prevent ppl from seeing the password by inspecting the page or opening DevTools/disabling js
        - but then again with regular Zoom mocks, that type of security concerns don't seem to be that high. so I didn’t prioritize figuring out smth more robust yet since it’ll be a little annoying/time-consuming
Can improve on that later (using htaccess or smth), no time now
      - response data collection: will have to edit to another google acct bc i don’t have enough data/space on my own → I think MAC is supposed to have one per MSS guidelines? will have to ask for access to set that up before using the platform a first time
      - some light graphics details to rework (once we choose between the original and the horiz/wide display)
      - optimize and comment code soon
      - responsive design (works on tablet, but adaptation for use on cellphone-sized devices to be done later)
- *[x] [2025-11-26] 3.2-horizontal so we can compare it to 3.2 normal (original/vertical)
    - 3.2 (original): image display is the right half of the screen + header sticks to the top (modifiable, aesthetic choice)
    - 3.2-horizontal: image fills up the entire width of the screen, ~66% height and below is a scrollable answer input section + header stays on the top, not sticky so you can scroll down and make it disappear to have a bigger image display.
    - if wanted, we could also change the proportions of 3.2 so the image is on the right, but can take 60-70% of the screen's width instead of 50%--if we reduce the space that the questions take up on the left
- *[ ] [NEXT BIG UPDATE PLANNED, probably Jan/Feb 2026] 3.3 --> user additional question management system
  - want an integrate real-time collaborative question board where ppl can write in questions, see which other questions have been asked (grouped per station/question) + see the written ansewr or checkmark if the question was adressed orally. probably have to use firestore (or similar thing) to do it. can wait a bit later
  - kinda miro board but no subscription service required, and integrated into the website and allows users to see their own answer input on the side (probably not the cadaveric images tho)
  - should allow for an easier time managing the MAC question periods
  - question of bandwidth usage, to evaluate later

## better repo organisation coming soon!
