const express = require('express');
const app = express();

const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Robert
TEL:+250789052246
END:VCARD`;

app.get('/robert_contact.vcf', (req, res) => {
  res.set('Content-Disposition', 'attachment; filename="robert_contact.vcf"');
  res.set('Content-Type', 'text/vcard');
  res.send(vcardData);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
