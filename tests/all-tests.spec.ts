import { test, expect } from "@playwright/test";

test('TestCase01 - Verify Landing Page section', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBv')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTeaBaX')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTtzn')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTeaCaB')).toBeVisible();
  await expect(page.locator('text=Core Services')).toBeVisible();
  await expect(page.locator('text=Client Testimonials')).toBeVisible();
  await expect(page.locator('text=Offices')).toBeVisible();
});

test('TestCase02 - Verify Lets Talk button on Landing Page section', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.clickable-element.bubble-element.Button.baTrul.flex-aligned-button')).toBeVisible();
  await page.locator('.clickable-element.bubble-element.Button.baTrul.flex-aligned-button').click();
  await expect(page.locator('text=Feel free to get in touch with us via email or phone.')).toBeVisible();
});

test('TestCase03 - Verify Core Services Section in Landing Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('text=Core Services')).toBeVisible();
  await page.locator('.bubble-element.Text.baUaFnm0.clickable-element.bubble-r-vertical-center').nth(0).click();
  await expect(page.locator('text=What We Do')).toBeVisible();
  await expect(page.locator('text=Low Code/No-Code Development')).toBeVisible();
});

test('TestCase04 - Verify What We Do Menu', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBv')).toBeVisible();
});

test('TestCase05 - Verify What We Do Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBv')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBv').click();
  await expect(page.locator('text=What We Do')).toBeVisible();
  await expect(page.locator('text=Low Code/No-Code Development')).toBeVisible();
  await expect(page.locator('text=Lean-Thinking & Agile Software Methodology')).toBeVisible();
  await expect(page.locator('text=Digital Experience Platform (DXP)')).toBeVisible();
  await expect(page.locator('text=Nearshore/Offshore/Multi-Shore Resources')).toBeVisible();
  await expect(page.locator('text=Platform Engineering >> nth=0')).toBeVisible();
  await expect(page.locator('text=AI/ML >> nth=0')).toBeVisible();
});

test('TestCase06 - Verify Who We Serve Menu', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBaX')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBaX').click();
  await expect(page.locator('.bubble-element.Text.baTgim:has-text("Industries & Testimonials")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgim:has-text("NAICS")')).toBeVisible();
});

test('TestCase07 - Verify Industries Section', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBaX')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBaX').click();
  await expect(page.locator('.bubble-element.Text.baTgim:has-text("Industries & Testimonials")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgim:has-text("Industries & Testimonials")').click();
  await expect(page.locator('.bubble-element.Text.baTvtr:has-text("Industries")')).toBeVisible();
});

test('TestCase08 - Verify Testimonials Section', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBaX')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBaX').click();
  await expect(page.locator('.bubble-element.Text.baTgim:has-text("Industries & Testimonials")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgim:has-text("Industries & Testimonials")').click();
  await expect(page.locator('.bubble-element.Text.baTvvk.bubble-r-vertical-center:has-text("What Clients Say")')).toBeVisible();
});

test('TestCase09 - Verify NAICS Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBaX')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBaX').click();
  await expect(page.locator('.bubble-element.Text.baTgim:has-text("NAICS")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgim:has-text("NAICS")').click();
  await expect(page.locator('text=Jairosoft NAICS Code Product & Service Offerings')).toBeVisible();
});

test('TestCase10 - Verify Who We Are Menu', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Our History")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Our Mission, Vision & Culture")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Code of Business Conduct")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Executive Leadership")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Technical Leads & Certified Experts")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Partners")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Locations")')).toBeVisible();
});

test('TestCase11 - Verify Our History Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Our History")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Our History")').click();
  await expect(page.locator('#main-video')).toBeVisible();
});

test('TestCase12 - Verify Our Mission, Vision & Culture Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Our Mission, Vision & Culture")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Our Mission, Vision & Culture")').click();
  await expect(page.locator('text=Our mission is to provide sustainable ')).toBeVisible();
  await expect(page.locator('text=Our Vision')).toBeVisible();
  await expect(page.locator('text=Aloha Culture')).toBeVisible();
});

test('TestCase13 - Verify Code of Business Conduct Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Code of Business Conduct")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Code of Business Conduct")').click();
  await expect(page.locator('.bubble-element.Text.baTteaQ:has-text("Code of Business Conduct")')).toBeVisible();
});

test('TestCase14 - Verify Executive Leadership Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Executive Leadership")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Executive Leadership")').click();
  await expect(page.locator('text=Chief Executive Officer & Founder')).toBeVisible();
  await expect(page.locator('text=Ramon Aseniero')).toBeVisible();
});

test('TestCase15 - Verify Technical Leads & Certified Experts Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Technical Leads & Certified Experts")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Technical Leads & Certified Experts")').click();
  await expect(page.locator('text=Agile Project Manager')).toBeVisible();
  await expect(page.locator('text=Karl Jordan Caumban')).toBeVisible();
});

test('TestCase16 - Verify Partners Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Partners")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Partners")').click();
  await expect(page.locator('text=Premier Partners')).toBeVisible();
  await expect(page.locator('text=Technology & Solution Partners')).toBeVisible();
});

test('TestCase17 - Verify Locations Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaBp')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaBp').click();
  await expect(page.locator('.bubble-element.Text.baTgiaW:has-text("Locations")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTgiaW:has-text("Locations")').click();
  await expect(page.locator('.bubble-element.Text.baTtmaU:has-text("12584 Luna Road Victorville, California 92392 ")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTtmw:has-text("1050 Queen St Suite 100, Honolulu, HI 96814")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTtlv:has-text("1049 M.J. Cuenco Avenue Mabolo Cebu City, 6000 ")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTtlaW:has-text("Holy Trinity Avenue, Holy Trinity Village, Cabantian Davao City, 8000 ")')).toBeVisible();
});

test('TestCase18 - Verify News & Insights Menu', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTtzn')).toBeVisible();
  await page.locator('.bubble-element.Text.baTtzn').click();
  await expect(page.locator('.bubble-element.Text.baThxaS:has-text("News and Blogs")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baThxaS:has-text("Tutorials")')).toBeVisible();
});

test('TestCase19 - Verify News and Blogs Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTtzn')).toBeVisible();
  await page.locator('.bubble-element.Text.baTtzn').click();
  await expect(page.locator('.bubble-element.Text.baThxaS:has-text("News and Blogs")')).toBeVisible();
  await page.locator('.bubble-element.Text.baThxaS:has-text("News and Blogs")').click();
  await expect(page.locator('.bubble-element.Text.baTyns:has-text("General > Post")')).toBeVisible();
});

test('TestCase20 - Verify Tutorials Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTtzn')).toBeVisible();
  await page.locator('.bubble-element.Text.baTtzn').click();
  await expect(page.locator('.bubble-element.Text.baThxaS:has-text("Tutorials")')).toBeVisible();
  await page.locator('.bubble-element.Text.baThxaS:has-text("Tutorials")').click();
  await expect(page.locator('.bubble-element.Text.baUaAaZaG0:has-text("General > Tutorials")')).toBeVisible();
});

test('TestCase21 - Verify Careers Menu', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwaOe0').click();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Current Opportunities")')).toBeVisible();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")')).toBeVisible();
});

test('TestCase22 - Verify Current Opportunities Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwaOe0').click();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Current Opportunities")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwjs:has-text("Current Opportunities")').click();
  await expect(page.locator('text=Find Job')).toBeVisible();
});

test('TestCase23 - Verify Verification of Employment & Internship Inquiry Page', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwaOe0').click();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")').click();
  await expect(page.locator('text=To request a verification of employment for a current or former Jairosoft employee, please fill up and submit with attached signed and dated authorization from the employee. ')).toBeVisible();
  await expect(page.locator('text=Jairosoft welcomes internship inquiries from students looking to gain hands-on experience in the industry. To apply, please submit your request with the following required documents: ')).toBeVisible();
});

test('TestCase24 - Verify Verification of Employment Functionality', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwaOe0').click();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")').click();
  await expect(page.locator('text="To request a verification of employment for a current or former Jairosoft employee, please fill up and submit with attached signed and dated authorization from the employee."')).toBeVisible();
  await expect(page.locator('text="Jairosoft welcomes internship inquiries from students looking to gain hands-on experience in the industry. To apply, please submit your request with the following required documents:"')).toBeVisible();
  await page.locator('#employment').getByRole('textbox', { name: 'Enter your First Name' }).fill('Bon');
  await page.locator('#employment').getByRole('textbox', { name: 'Enter your Last Name' }).fill('Test');
  await page.locator('#employment').getByRole('textbox', { name: 'Enter your Position' }).fill('QA');
  await page.locator('#employment').getByRole('textbox', { name: 'Enter your Request' }).fill('Test Message');
  await page.locator('#employment').getByRole('textbox', { name: 'Enter your Email' }).fill('bcueva@jarosoft.com');
  const fileInput = await page.locator('#test1 input[type="file"]');
  await fileInput.setInputFiles('./data/dummy.pdf');
  await page.locator('.clickable-element.bubble-element.Icon.baTwaBaY2').click();
  await page.locator('.clickable-element.bubble-element.Button.baTwaBaS2').click();
});

test('TestCase25 - Verify Internship Inquiry Functionality', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTwaOe0')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwaOe0').click();
  await expect(page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")')).toBeVisible();
  await page.locator('.bubble-element.Text.baTwjs:has-text("Verification of Employment & Internship Inquiry")').click();
  await expect(page.locator('text=To request a verification of employment for a current or former Jairosoft employee, please fill up and submit with attached signed and dated authorization from the employee.')).toBeVisible();
  await expect(page.locator('text=Jairosoft welcomes internship inquiries from students looking to gain hands-on experience in the industry. To apply, please submit your request with the following required documents:')).toBeVisible();
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your First Name' }).fill('Bon');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your Last Name' }).fill('Test');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your Email' }).fill('bcueva@jarosoft.com');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your School' }).fill('AMA');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your Course' }).fill('BSIT');
  await page.locator('#internship').getByRole('textbox', { name: ': : - : :' }).fill('365');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your OJT Coordinator Full Name' }).fill('Ms. Minchin');
  await page.locator('#internship').getByRole('textbox', { name: 'Enter your OJT Coordinator Email' }).fill('rparacuelles@jairosoft.com');
  const fileInput = await page.locator('#test input[type="file"]');
  await fileInput.setInputFiles('./data/dummy.pdf');
  await page.locator('.clickable-element.bubble-element.Icon.baTwaFx2').click();
  await page.locator('.clickable-element.bubble-element.Button.baTwaFr2').click();
});

test('TestCase26 - Verify Contact Us Menu', async ({ page }) => {
  // Playwright steps here
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaCaB')).toBeVisible();
});

test('TestCase27 - Verify Contact Us Page', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaCaB')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaCaB').click();
  await expect(page.locator('text=Use our contact form for all information requests or contact is directly using the contact information below.')).toBeVisible();
});

test('TestCase28 - Verify Get in Touch Functionality', async ({ page }) => {
  await page.goto('https://jairosoft.com');
  await expect(page.locator('.bubble-element.Text.baTeaCaB')).toBeVisible();
  await page.locator('.bubble-element.Text.baTeaCaB').click();
  await expect(page.locator('text=Use our contact form for all information requests or contact is directly using the contact information below.')).toBeVisible();
  await page.selectOption('select.bubble-element.Dropdown.dropdown-chevron', { label: 'General Inquiry' });
  await page.locator('input[placeholder="Enter your First Name"]').fill('Bon');
  await page.locator('input[placeholder="Enter your Last Name"]').fill('Test');
  await page.locator('input[placeholder="201-555-0123"]').fill('99999');
  await page.locator('input[placeholder="Enter your Email"]').fill('bcueva@jairosoft.com');
  await page.locator('input[placeholder="Enter your Company"]').fill('Jairosoft');
  await page.locator('textarea[placeholder="Enter your Message"]').fill('This is a test message');
  await page.locator('.clickable-element.bubble-element.Icon.baTlte1').click();
  await page.locator('.clickable-element.bubble-element.Button.baTltaX1').click();
});