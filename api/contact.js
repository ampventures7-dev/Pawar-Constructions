/**
 * Vercel Serverless Function: /api/contact
 * Handles contact form submissions, payload validation, and notifications.
 */
export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are supported.'
    });
  }

  try {
    const { name, email, phone, projectType, projectLocation, budgetRange, message } = req.body || {};

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Full name is required (minimum 2 characters).' });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      return res.status(400).json({ success: false, error: 'A valid phone number is required.' });
    }

    if (!projectType || typeof projectType !== 'string') {
      return res.status(400).json({ success: false, error: 'Project type is required.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' });
    }

    // Structured enquiry payload
    const enquiry = {
      id: `PAWAR-${Date.now().toString().slice(-6)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      projectType: projectType.trim(),
      projectLocation: projectLocation ? projectLocation.trim() : 'Location to be discussed',
      budgetRange: budgetRange ? budgetRange.trim() : 'Flexible / Needs Consultation',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    console.log('[PAWAR CONSTRUCTIONS - NEW ENQUIRY]:', JSON.stringify(enquiry));

    // Optional email dispatch if RESEND_API_KEY and COMPANY_RECEIVER_EMAIL are set in Vercel
    if (process.env.RESEND_API_KEY && process.env.COMPANY_RECEIVER_EMAIL) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Pawar Constructions <onboarding@resend.dev>',
            to: process.env.COMPANY_RECEIVER_EMAIL,
            subject: `New Enquiry [${enquiry.id}]: ${enquiry.projectType} from ${enquiry.name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h2 style="color: #D9531E; border-bottom: 2px solid #D9531E; padding-bottom: 8px;">New Construction Enquiry</h2>
                <p><strong>Enquiry Reference:</strong> ${enquiry.id}</p>
                <p><strong>Client Name:</strong> ${enquiry.name}</p>
                <p><strong>Phone:</strong> <a href="tel:${enquiry.phone}">${enquiry.phone}</a></p>
                <p><strong>Email:</strong> <a href="mailto:${enquiry.email}">${enquiry.email}</a></p>
                <p><strong>Project Type:</strong> ${enquiry.projectType}</p>
                <p><strong>Location:</strong> ${enquiry.projectLocation}</p>
                <p><strong>Estimated Budget:</strong> ${enquiry.budgetRange}</p>
                <p><strong>Project Requirements:</strong></p>
                <blockquote style="background: #f8fafc; padding: 12px; border-left: 4px solid #D9531E; margin: 10px 0;">
                  ${enquiry.message.replace(/\n/g, '<br/>')}
                </blockquote>
                <p style="font-size: 12px; color: #64748b; margin-top: 20px;">Submitted on: ${enquiry.timestamp}</p>
              </div>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('[EMAIL NOTIFICATION FAILED - NON FATAL]:', emailErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been received successfully. Our civil engineering team will reach out within 24 business hours.',
      enquiryId: enquiry.id,
      timestamp: enquiry.timestamp
    });

  } catch (error) {
    console.error('[SERVER ERROR IN /api/contact]:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred. Please try again or contact us via WhatsApp.'
    });
  }
}
