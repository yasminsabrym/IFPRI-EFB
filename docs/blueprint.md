# **App Name**: EFB IFPRI Study

## Core Features:

- Splash Screen Video: Implement a visually engaging splash screen with the background video and overlaid text.
- Interactive Main Menu: Develop an interactive main menu with clear navigation buttons for 'Nutrition-Sensitive Box' and 'Stunting Reduction' modules.
- Interactive Spider Chart: Create an interactive spider chart for the NSB module where tapping each spoke reveals detailed metric information in a pop-up modal.
- Interactive Timeline: Design an interactive timeline for the Stunting Reduction module, showing progress at different months with pop-up data.
- Dynamic Page Transitions: Implement smooth and captivating page transitions and animations, drawing inspiration from https://efb.vps-dev.co.uk/ for style and movement.

## Style Guidelines:

- All pages need to have background video opacity 40% with green overlay with opacity 49-30% to have clear vision of content
- Replace existing chart colors with #1f1f1f and #FF6301 for improved clarity and modern aesthetic.
- Accent color: Use #FF6301 (vibrant orange) for interactive elements like buttons and chart highlights to draw user attention.
- Implement a fully responsive layout that adapts seamlessly to portrait orientation on both touchscreen kiosks and mobile devices.
- Incorporate the provided logo prominently across the application to reinforce branding.
- Add smooth and captivating transitions between pages and interactive elements, referencing https://efb.vps-dev.co.uk/ for inspiration.

## Original User Request:
Below is a fully scripted, single‐option blueprint for an interactive touchscreen exhibition—no “maybe” or “option” placeholders. It is rock‐solid: the agency can literally take these specifications, text, color codes, and step‐by‐step screens and just code it. Everything is in portrait mode (1080×1920 px). The content is crafted to be engaging, educational, and visually rich so visitors (non‐technical audience) can quickly grasp your data and scientific methods without boredom.

OVERALL EXHIBITION BLUEPRINT 1.1 Physical Setup

Display: One vertical 50" touchscreen kiosk. Orientation: Portrait, 1080 px (width) × 1920 px (height). Mounting: Stationary kiosk stand, center screen at average adult chest height so top is still reachable. Operating System: Windows 10 (or 11) in kiosk mode, single app full‐screen. Hardware: Intel Core i5, 8GB RAM, integrated GPU, 256GB SSD, 10‐point capacitive touchscreen. Speakers: Built‐in or external stereo. Internet: Not strictly required for local offline build, but recommended for updates. 1.2 Style & Branding

Background Colors: Primary background: #FFFFFF (white). Accent background shapes & bars: #F2F5FA (light grey‐blue). Title text on color blocks: #003D6C (dark navy). Font Family: Headings: Montserrat SemiBold (uppercase or Title case). Body Text: Open Sans Regular or Light (for readability). Accent Colors (charts, buttons, highlights): NSB: #44BBA4 (greenish teal) Control group: #EE6363 (soft red) Stunting “No Stunting”: #2E8B57 (sea green) Stunting “Moderate”: #FFBC42 (warm orange) Stunting “Severe”: #E63946 (tomato red) Button Shapes: Round corners, radius = 20 px, color #003D6C fill, white text (#FFFFFF). Touch Targets: Minimum 200×80 px for main interactive buttons. 1.3 Animations & Interaction

General Animations: 0.3s fade‐in for new screens. 0.2s “press‐down” effect on button tap (slight scale to 0.95). Chart Interactions: On tap, highlight the slice/bar/spoke with a 1px #003D6C outline and show pop‐up. Idle Timeout: If no interaction for 120 seconds, automatically fade back to the Splash Screen. 2. DETAILED SCREEN FLOWS & TEXT

Below is the exact text to appear on each screen. All text is in English. If bilingual is required, replicate screens with an Arabic or second language toggle (not included below unless you want it).

2.1 Splash Screen

Filename: screen_splash.html Dimensions: 1080w × 1920h

Layout:

Background: White (#FFFFFF). Centered Title: “WANT TO KNOW HOW WE MEASURE SUCCESS?” in Montserrat SemiBold, 60px, #003D6C. Subtitle (just below title): “Tap to explore our Impact” in Montserrat Regular, 36px, #444444. Subtle circular flourish behind the text using #F2F5FA. User Action: Tapping anywhere transitions to the Main Menu screen with a fade effect.

Exact Text:

Headline (large):

WANT TO KNOW HOW WE MEASURE SUCCESS?

Subtitle (medium):

Tap to explore our Impact

2.2 Main Menu Screen

Filename: screen_mainMenu.html Dimensions: 1080w × 1920h

Layout:

Top Title (centered): “GIVING HOPE THROUGH DATA” (Montserrat SemiBold, 50px, #003D6C). Subtitle (just below, in smaller text): “Select a project to learn how we track and achieve impact.” (Open Sans Regular, 32px, #333333). Two large rectangular buttons, each 600 px wide × 350 px tall, spaced vertically. White background (#FFFFFF), small accent behind each button (#F2F5FA rectangle shape). Button 1: “NUTRITION‐SENSITIVE BOX (NSB)”

Button fill: #003D6C, corners radius 20px. Button text: “NUTRITION‐SENSITIVE BOX (NSB)” in Montserrat SemiBold, 38px, color #FFFFFF. Button 2: “STUNTING REDUCTION”

Same style as Button 1, text = “STUNTING REDUCTION” in Montserrat SemiBold, 38px, color #FFFFFF. Exact Text:

Title:

GIVING HOPE THROUGH DATA

Subtitle:

Select a project to learn how we track and achieve impact.

Button 1 text:

NUTRITION-SENSITIVE BOX (NSB)

Button 2 text:

STUNTING REDUCTION

User Action: Tapping button #1 → goes to the NSB module (screen_nsbOverview.html). Tapping button #2 → goes to the Stunting module (screen_stuntingOverview.html).

NUTRITION‐SENSITIVE BOX MODULE 3.1 NSB Overview Screen

Filename: screen_nsbOverview.html Dimensions: 1080×1920

Layout:

Title (top center): “Nutrition‐Sensitive Box: Protecting Food Security” (Montserrat SemiBold, 42px, #003D6C). Short Description (below Title, in a bounding box #F2F5FA, 900px wide, center‐aligned): (Open Sans Regular, 30px, #333333) Exact Paragraph:

Short Description:

Facing high inflation, our Nutrition-Sensitive Box (NSB) was designed to go beyond staples

by including protein- and iron-rich foods. This approach helps families maintain dietary

quality and overall food security, even as prices soar.

SPIDER CHART area: Center ~600×600 px. 5 “spokes”: HDDS, FIES, Energy Intake, Protein Intake, Iron Intake. There are 3 lines on the chart: Baseline (gray, #999999) Control midline (red, #EE6363) NSB midline (green, #44BBA4) Legend (small text beneath spider chart):

• Baseline (Grey line)

• Control Group Mid-Term (Red line)

• NSB Mid-Term (Green line)

Tap any metric on the chart to learn more.

(font: Open Sans, 26px, #666666)

Interaction: Tapping each spoke label triggers a pop‐up.

3.2 NSB Metric Pop‐Ups

Format: A modal overlay box ~800×900 px, center screen, scrollable if needed. White (#FFFFFF) with a #003D6C heading bar.

Heading: The metric name (Montserrat SemiBold, 36px, #FFFFFF on a #003D6C background). Body: ~two paragraphs explaining the metric, data, “why it matters,” plus a final bullet with numeric difference. Close: “CLOSE” button (#003D6C background, #FFFFFF text, 36px).

Below is the exact text for each of the 5 metrics:

HDDS (Household Dietary Diversity Score) Heading: “HDDS” Body:

What It Is:

The Household Dietary Diversity Score (HDDS) counts how many different food groups

a household consumes. It ranges from 0 (no variety) to 12 (high variety).

Why It Matters:

A higher HDDS means better diet quality and typically indicates greater economic

access to food. When inflation rises, diet diversity often suffers.

NSB Results vs. Control:

• Control changed by -0.64 points from baseline, while NSB increased by +0.87.

• Net difference = +1.51 points, a 15.6% improvement for NSB families.

FIES (Food Insecurity Experience Scale) Heading: “FIES” Body:

What It Is:

The Food Insecurity Experience Scale (FIES) runs 0 to 8, where a higher score

means more severe insecurity. It is based on self-reported experiences like

skipping meals or running out of food.

Why It Matters:

FIES captures the stress and uncertainty of accessing enough safe, nutritious

food. Even if a household has some variety, anxiety or shortfalls indicate

insecurity.

NSB Results vs. Control:

• Control's FIES rose by +0.71, while NSB families dropped by -1.20.

• Net difference = -1.91 (36% improvement).

Energy Intake (kcal) Heading: “Energy Intake (kcal/day)” Body:

What It Is:

Total daily calories consumed by the main female adult, measured by a

24-hour recall of all meals and ingredients.

Why It Matters:

Sufficient energy intake is crucial to prevent undernourishment, especially

during economic shocks. When staple prices spike, people often reduce total

calories.

NSB Results vs. Control:

• Control decreased by -154 kcal/day, whereas NSB gained +352 kcal/day.

• Net difference = +506 kcal/day (30.2% higher).

Protein Intake (grams/day) Heading: “Protein Intake (g/day)” Body:

What It Is:

Protein intake measures grams of protein consumed by the main female adult

in the past 24 hours.

Why It Matters:

Adequate protein is critical for muscle maintenance, immune function,

and childbearing health. Inflation usually makes protein-rich foods

less accessible.

NSB Results vs. Control:

• Control dropped by -13.9 g/day, while NSB rose by +24.6 g/day.

• Net difference = +38.5 g/day, a 59.7% improvement.

Iron Intake (mg/day) Heading: “Iron Intake (mg/day)” Body:

What It Is:

Iron is key to preventing anemia. We measure daily iron consumption via

detailed dietary recall for the main female adult in the household.

Why It Matters:

Iron deficiency leads to serious health risks, especially for women

of childbearing age. In times of inflation, iron-rich foods become

harder to afford.

NSB Results vs. Control:

• Control group changed by -1.82 mg/day, while NSB increased by +3.87 mg/day.

• Net difference = +5.69 mg/day (66% improvement).

3.3 Back or End

At the bottom of the NSB overview screen, a “BACK TO MAIN MENU” button (#003D6C fill, 36px text) is anchored. Tapping returns to screen_mainMenu.html.

STUNTING REDUCTION MODULE 4.1 Stunting Overview Screen

Filename: screen_stuntingOverview.html Dimensions: 1080×1920

Layout:

Title: “Stunting Reduction: Building a Healthy Generation” (Montserrat SemiBold, 42px, #003D6C). Paragraph (Open Sans, 30px, #333333) in a box #F2F5FA background, width ~900 px: Stunting is when a child’s growth (height-for-age) is too low due to chronic

malnutrition or poor health. Our program focuses on the first 1,000 days,

providing nutritional support, medical checkups, and counseling to reduce

stunting and secure a better future.

Large vertical timeline occupying the lower half: three labeled steps: “BIRTH (Baseline)” “2 MONTHS” “4 MONTHS” 4.2 Timeline Interaction

Design:

Each timeline node is a big circle (#003D6C outline, 80px diameter). Tapping a node opens a pop‐up with the stunting prevalence data (No / Moderate / Severe). Exact Data:

Baseline (Birth)

No Stunting = 57%

Moderate Stunting = 29%

Severe Stunting = 14%

2 Months

No Stunting = 78% (up from 57%)

Moderate Stunting = 14% (down from 29%)

Severe Stunting = 8% (down from 14%)

4 Months

No Stunting = 73% (up from 52% in that subgroup)

Moderate Stunting = 24% (down from 29%)

Severe Stunting = 2% (down from 18%)

(Note: The user data shows a smaller subset for 4 months, but the main gist remains.)

Pop‐Up:

Title: e.g. “2 MONTHS OLD: PROGRESS” or “4 MONTHS OLD: PROGRESS” Body: A bar chart or simple labeled text for “No / Moderate / Severe.” Additional note on “% change from baseline” in bullet form. Sample Pop‐Up Text:

Title: “2 MONTHS OLD: PROGRESS” Body:

Stunting at 2 months:

• No Stunting: 78%

(up from 57%, +21 percentage points) • Moderate Stunting: 14%

(down from 29%, -15 percentage points) • Severe Stunting: 8%

(down from 14%, -6 percentage points) These shifts suggest our interventions—nutrition supplementation, maternal

counseling, and medical checkups—significantly improved growth outcomes.

4.3 Methodology & Next Steps

Below the timeline, a small box labeled “HOW WE MEASURE” (Open Sans, 28px, #333333) with text:

We measure infants’ length-for-age at birth, 2 months,

and 4 months. Children who improve from severe or moderate

stunting to normal range demonstrate the impact of early

nutrition and health interventions.

One large button at the bottom: “BACK TO MAIN MENU” (#003D6C fill, white text, 36px).

WRAP‐UP & IDLE TIMEOUT 5.1 Return to Splash

When:

If user taps the “BACK TO MAIN MENU” from any module → screen_mainMenu.html. If user idle for 120 seconds → fade out, then show screen_splash.html. 5.2 Additional Optional Content

If you want to incorporate a short video or beneficiary quotes, you can embed them in a pop‐up, but for now, the blueprint stands as is—no “maybe”. This is the final design to be implemented.

TECHNICAL IMPLEMENTATION DETAILS HTML/CSS/JS: Single‐page web app or multi‐HTML approach. For the spider chart, use Chart.js Radar chart type. For stunting timeline, a simple HTML/CSS vertical line with clickable nodes. No server required if data is static. Host locally. All images (background shapes, brand logos) must be preloaded. Responsive: not strictly needed since kiosk has fixed 1080×1920 resolution. 7. COLOR & TYPOGRAPHY QUICK REFERENCE

Primary BG: #FFFFFF Light BG: #F2F5FA Buttons / Dark Nav: #003D6C NSB Chart: #44BBA4 Control Chart: #EE6363 No Stunting: #2E8B57 Moderate: #FFBC42 Severe: #E63946 Title Font: Montserrat SemiBold (size range 36–60px) Body Font: Open Sans Regular (size range 26–36px) END OF SPEC

This exhaustive specification covers every detail: text content, colors, fonts, layout, user flows, animations, and exact metric descriptions. The agency can directly implement this design. No alternative flows or “maybe” disclaimers apply.

there is a video https://efb.vps-dev.co.uk/wp-content/uploads/2025/04/thg-video-bg.mp4 which i need in full height as background for all those pages this video needs to be in splash screen as well as all pages eith 0a5d50 hex color green overlaying between the video and the elements above

all pages need to be portrait friendly and mobile and fully responsive layout 

The charts need to be clear and interactive enabeling when interactinge to show on NSB each field definition as shown above and the chart representation to be accurate remove the ble and replace with #1f1f1f #FF6301 colors and add logo attached as the logo main 

please ensure navigation is quick and smooth between pages and clear working 

i need a pixel perfect website that is heavy in animations movements and the trransitions between pages is captivating please add as many as you can

https://efb.vps-dev.co.uk/ this is souce for styles and animations please
  