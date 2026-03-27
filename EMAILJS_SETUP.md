# EmailJS Setup Guide

## Overview

This project now uses EmailJS to send automated emails when users submit the contact form. Two emails are sent:

1. **Admin Email** - To your inbox with full inquiry details
2. **Auto-Response** - To the user with a professional thank-you message

## Step-by-Step Setup

### 1. Create EmailJS Account

- Go to [emailjs.com](https://www.emailjs.com)
- Sign up for a free account
- Confirm your email address

### 2. Add Email Service

- In the EmailJS dashboard, go to **Email Services**
- Click **"Add New Service"**
- Select **Gmail** (or your preferred email service)
- Follow the OAuth authentication steps
- Name it: `service_acmesecure`
- **Save the Service ID** - you'll need this

### 3. Create Admin Email Template

This template sends inquiry details to your inbox.

**Template Name:** `template_admin_inquiry`

**Template Settings:**

- **To Email:** `ahmadsaeedcodes@gmail.com` (dev), change to `enquiries@acmesecure.co.uk` for production
- **Subject:** `New Inquiry: {{user_service}}`

**Template Content (HTML):**

```html
<h2>New Inquiry Received</h2>

<p><strong>Client Name:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Phone:</strong> {{user_phone}}</p>
<p><strong>Company:</strong> {{user_company}}</p>
<p><strong>Service Interested:</strong> {{user_service}}</p>

<h3>Message:</h3>
<p>{{user_message}}</p>

<hr />
<p><em>Received from Acme Secure contact form</em></p>
```

### 4. Create User Auto-Response Template

This template sends a thank-you message to the user.

**Template Name:** `template_user_response`

**Template Settings:**

- **To Email:** `{{to_email_user}}`
- **Subject:** `We've Received Your Inquiry - Acme Secure`

**Template Content (HTML):**

```html
<p>Hi {{user_name}},</p>

<p>Thank you for reaching out to Acme Secure.</p>

<p>
  We've received your inquiry for <strong>{{user_service}}</strong> and will
  review it carefully. Our team will get back to you within 24 hours to discuss
  your security needs and provide a tailored quote.
</p>

<p>We appreciate the opportunity to help secure your business.</p>

<p>
  Best regards,<br />
  <strong>The Acme Secure Team</strong><br />
  Phone: +44 (0)20 XXXX XXXX<br />
  Email: enquiries@acmesecure.co.uk<br />
  Website: www.acmesecure.co.uk
</p>
```

### 5. Get Your Public Key

- In EmailJS dashboard, go to **Account** → **API Keys**
- Copy your **Public Key**

### 6. Update ContactForm Configuration

Open `src/components/ContactForm.tsx` and update these three values at the top:

```typescript
const EMAILJS_SERVICE_ID = "service_acmesecure"; // From step 2
const EMAILJS_TEMPLATE_ADMIN = "template_admin_inquiry"; // From step 3
const EMAILJS_TEMPLATE_USER = "template_user_response"; // From step 4
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE"; // From step 5
```

Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key.

### 7. Test the Form

- Go to your contact page
- Fill out the form with test data
- Click "Send Enquiry"
- Check:
  - Your inbox (`ahmadsaeedcodes@gmail.com`) for the admin email
  - Your test email address for the auto-response

## Production Changes

When you're ready to go to production, update:

1. **Email recipient for admin emails:**
   - Change `ahmadsaeedcodes@gmail.com` to `enquiries@acmesecure.co.uk` in:
     - `ContactForm.tsx` line 39
     - Admin template in EmailJS dashboard

2. **Email service configuration:**
   - Switch from Gmail to your business email (if different)

## Troubleshooting

**"Failed to send enquiry" error:**

- Check that your Public Key is correct
- Verify Service IDs and Template IDs match exactly
- Ensure templates are published (not in draft)

**Emails not arriving:**

- Check spam/junk folders
- Verify email addresses in templates match
- Check EmailJS dashboard "Logs" for errors

**Rate Limiting:**

- Free tier: 200 emails/month
- Upgrade if you exceed this

## Additional Notes

- EmailJS is production-ready and secure
- Your email credentials are kept private (no credentials exposed in code)
- All emails include HTML styling for professional appearance
- You can customize templates further with CSS styling in EmailJS dashboard
